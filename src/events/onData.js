/* 
  명세
  [ PayloadOneofCase ] [ versionLength ] [ version ] [ sequence ] [ payloadLength ] [ payload ]
  2 bytes              1 bytes         versionLength 4 bytes      4 bytes         payloadLength 
  C2S = 리틀 엔디안
  S2C = 빅 엔디안

  const PAYLOAD_ONEOF_CASE_SIZE = 2;
  const VERSION_LENGTH_SIZE = 1;
  const SEQUENCE_SIZE = 4;
  const PAYLOAD_LENGTH_SIZE = 4;
-------------------------------------------------------------
  const PACKET_TYPE_LENGTH = 2;     // PayloadOneofCase
  const VERSION_START = 1;          // versionLength (version)
  const SEQUENCE_SIZE = 4;          // sequence
  const PAYLOAD_LENGTH_SIZE = 4;    // payloadLength 
*/

import { config } from "../config/config.js";
import {
  TOTAL_LENGTH,
  PACKET_TYPE_LENGTH,
  VERSION_START,
  SEQUENCE_SIZE, 
  PAYLOAD_LENGTH_SIZE
} from "../constants/header.js";
import { getHandlerByHandlerId } from "../handlers/index.js";
import { getProtoMessages } from "../init/loadProto.js";

export const onData = (socket) => async (data) => {
  socket.buffer = Buffer.concat([socket.buffer, data]);

  // 정의된 패킷 헤더 명세
  // const headerSize = PACKET_TYPE_LENGTH + VERSION_START + SEQUENCE_SIZE + PAYLOAD_LENGTH_SIZE;
  // const headerSize = config.packet.totalLength + config.packet.typeLength;

  // 버퍼 데이터로 들어온 패킷 데이터가 헤더 길이보다 크다면 ( 데이터가 들어왔다고 이해 )
  while (socket.buffer.length >= TOTAL_LENGTH) {

    // 버퍼 데이터 중 PayloadOneofCase 길이만큼 할당 2byte (packet type)
    const payloadOneofCase = socket.buffer.readUInt16BE(0);
    let offset = payloadOneofCase;

    // 1byte만큼 versionLength순서부터 할당 :payloadOneofCase 다음 순서
    const versionLength = socket.buffer.readUInt8(offset, PACKET_TYPE_LENGTH);
    offset += versionLength;

    // version을 읽을 곳 4byte (문자열로 반환받기)
    // 헤더에는 3으로 되어있어서 일단 3byte 읽어오기
    // 만약 4byte일 경우에는 VERSION_START + versionLength 만큼 읽기
    const version = socket.buffer.subarray(offset, VERSION_START).toString();

    // offset += VERSION_START + versionLength;
    // 만약 1byte 이면 offset += versionLength; 만 해주기
    offset += payloadOneofCase + versionLength;

    // 4byte sequence를 읽을 곳 : version 다음 순서
    const sequence = socket.buffer.readUInt32BE(offset, SEQUENCE_SIZE);
    offset += sequence;

    // 4byte payloadLength를 읽을 곳 : sequence 다음 순서
    const payloadLength = socket.buffer.readUInt32BE(offset, PAYLOAD_LENGTH_SIZE);
    offset += payloadLength;

    // 패킷 전체 길이
    const requiredLength = offset + payloadLength;

    // 전체 패킷 데이터 길이
    if (socket.buffer.length >= requiredLength) {

      // payload를 읽을 곳 
      const payload = socket.buffer.slice(offset, requiredLength);

      // 남은 데이터는 다시 퍼버 데이터에 추가
      socket.buffer = socket.buffer.slice(requiredLength);

      console.log(`패킷 타입 : ${getPacketTypeName(payloadOneofCase)}`);
      console.log(`버전 : ${version}`);
      console.log(`시퀸스 : ${sequence}`);
      console.log(`패킷길이 : ${requiredLength}`);
      console.log(`페이로드 : ${payload}`);

      try {
        // 모든 패킷을 게임패킷으로 처리 가능하다고 한다
        const decodedPacket = GamePacket.decode(payload);

        // 인자로 받을 패킷 타입 전송
        const handler = getHandlerByHandlerId(payloadOneofCase);
        if (handler) {
          await handler(socket, decodedPacket);
        }
      } catch (err) {
        console.error(`패킷처리 에러 : `, err);
      }
    } else {
      console.log(`들어온 데이터 비교 : ${socket.buffer.length}, ${requiredLength}`);
      break;
    }
    
  }
};
