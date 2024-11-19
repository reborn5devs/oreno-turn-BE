import { PACKET_TYPE } from '../../constants/header.js';
import { getProtoMessages } from '../../init/loadProto.js';
import { rooms } from '../../session/session.js';
import sendResponsePacket from '../../utils/response/createResponse.js';

export const gameStart = (socket) => {
  const protoMesages = getProtoMessages();

  const roomId = socket.roomId;
  const room = rooms.get(roomId);

  let gameStartResponse;

  // gameState
  let currentPhase = protoMesages.enum.PhaseType.DAY;
  let nextPhaseAt = Date.now() + 180000; // 3분후에 넥스트 페이즈 타입으로 이동
  const gameState = {
    phaseType: currentPhase,
    nextPhaseAt: nextPhaseAt,
  };

  // users
  const users = {};
  // characterPositions
  const characterPositions = [];
  let positionKeys = Object.keys(R1NDOM_POSITIONS);

  room.users.forEach((user, index) => {
    users[user.userId] = user;
    const positionKey = positionKeys[index % positionKeys.length];
    characterPositions.push({
      id: user.userId,
      x: RANODM_POSITIONS[positionKey].x,
      y: RANDOM_POSITIONS[positionKey].y,
    });
  });

  const gameStartNotification = {
    gameState,
    users,
    characterPositions,
  };
  try {
    gameStartResponse = {
      success: true,
      failcode: failCode.NONE_FAILCODE,
    };
    multiCast(usersInRoom, PACKET_TYPE.GAME_START_NOTIFICATION, {
      gameStartNotification,
    });
  } catch (err) {
    gameStartResponse = {
      success: false,
      failcode: failCode.UNKNOWN_ERROR,
    };
  }
  sendResponsePacket(
    socket,
    PACKET_TYPE.GAME_START_RESPONSE,
    gameStartResponse,
  );
};

// PACKET ID = 34번에서 사용될 가능성이 있어 보임 S2CPhaseUpdateNotification

// setTimeout(() => {
//     //setTimeout 때문에 180000밀리초 이후에 실행
//     currentPhase = protoMessages.enum.PhaseType.END; // 밤으로 페이즈 변경
//     nextPhaseAt = Date.now() + 30000; // 페이즈 변경 시간 30초로 변경
//     const updatedGameState = {
//       PhaseType: currentPhase,
//       nextPhaseAt: nextPhaseAt,
//     };
//     const updatedGameStartNotification = {
//       gameState: updatedGameState,
//       users,
//       characterPositions,
//     };
//     multiCast(usersInRoom, PACKET_TYPE.GAME_START_NOTIFICATION, {
//       updatedGameStartNotification,
//     }); // 밤이라고 노티 다시 보내기
//     sentTimeout(() => {
//       // setTimout 호출 30000밀리초 이후에 실행
//       currentPhase = protoMesages.enum.PhaseType.DAY; // 낮으로 페이지 변경
//       nextPhaseAt = Date.now() + 180000; // 페이즈 변경 시간 30초로 변경
//       const finalGameState = {
//         PhaseType: currentPhase,
//         nextPhaseAt: nextPhaseAt,
//       };
//       const finalGameStartNotification = {
//         gameState: finalGameState,
//         users,
//         characterPositions,
//       };
//       multiCast(usersInRoom, PACKET_TYPE.GAME_START_NOTIFICATION, {
//         finalGameStartNotification,
//       }); // 다시 노티 보냄
//     }, 30000);
//   }, 180000);