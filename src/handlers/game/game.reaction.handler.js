import CharacterState from '../../classes/models/character.state.class.js';
import { PACKET_TYPE } from '../../constants/header.js';
import { getProtoMessages } from '../../init/loadProto.js';
import { rooms, users } from '../../session/session.js';
import { getUserById } from '../../session/user.session.js';
import {
  multiCast,
  sendResponsePacket,
} from '../../utils/response/createResponse.js';
import { getFailCode } from '../../utils/response/failCode.js';

// message C2SReactionRequest {
//     ReactionType reactionType = 1; // NOT_USE_CARD = 1
// }

export const reactionHandler = async (socket, payloadData) => {
  const protoMessages = getProtoMessages();
  const reactionType = protoMessages.enum.ReactionType.values;
  const failCode = getFailCode();
  const { reactRequest } = payloadData;
  let reactionResponse;

  try {
    console.log('reactRequest/', JSON.stringify(payloadData));
    console.log('reationType/', reactionType);

    // 공격당한 유저의 정보
    const user = users.get(socket.token);
    const character = user.character;
    let stateInfo = character.stateInfo;

    // 뱅을 쏜 유저의 상태를 초기화
    const shooterId = stateInfo.stateTargetUserId;
    const shooter = getUserById(shooterId);
    shooter.character.stateInfo = new CharacterState();

    // 공격당한 유저의 상태를 초기화
    character.stateInfo = new CharacterState(); // 만약 state = new CharacterState로 초기화하면 반영안됨.
    character.hp -= 1;

    reactionResponse = {
      success: true,
      failCode: failCode.NONE_FAILCODE,
    };

    // 총에 맞았음으로 유저 상태를 동기화
    const room = rooms.get(socket.roomId);
    multiCast(room.users, PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
      userUpdateNotification: { user: room.users },
    });
  } catch (error) {
    reactionResponse = {
      success: false,
      failCode: failCode.UNKNOWN_ERROR,
    };

    console.error('리액션 실패: ', error);
  }

  sendResponsePacket(socket, PACKET_TYPE.REACTION_RESPONSE, {
    reactionResponse,
  });
};

// message S2CReactionResponse {
//     bool success = 1;
//     GlobalFailCode failCode = 2;
// }