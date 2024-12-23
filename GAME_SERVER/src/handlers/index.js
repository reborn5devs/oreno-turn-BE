import { PACKET_TYPE } from '../constants/header.js';
import { gamePrepare } from './game/gamePrepare.handler.js';
import { gameStart } from './game/gameStart.handler.js';
import { leaveRoomHandler } from './room/room.leave.handler.js';
import { positionUpdateHandler } from './sync/user.position.handler.js';
import { useCardHandler } from './card/card.use.handler.js';
import { reactionHandler } from './game/game.reaction.handler.js';
import { destroyCardsHandler } from './card/card.destroy.handler.js';
import { eveningPickHandler } from './sync/evening.phase.handler.js';
import {
  marketCardDeletePickHandler,
  marketPickHandler,
} from './sync/market.handler.js';
import { rerollHandler } from './card/card.reroll.handler.js';
import { verifyTokenHandler } from './auth/verifyToken.handler.js';
import { heartBeatHandler } from './sync/heartBeat.handler.js';
import { switchHandler } from './sync/switch.handler.js';

const handlers = {
  [PACKET_TYPE.LEAVE_ROOM_REQUEST]: {
    handler: leaveRoomHandler,
    protoType: 'request.C2SLeaveRoomRequest',
  },
  [PACKET_TYPE.GAME_PREPARE_REQUEST]: {
    handler: gamePrepare,
    protoType: 'request.C2SGamePrepareRequest',
  },
  [PACKET_TYPE.GAME_START_REQUEST]: {
    handler: gameStart,
    protoType: 'request.C2SGameStartRequest',
  },
  [PACKET_TYPE.USE_CARD_REQUEST]: {
    handler: useCardHandler,
    protoType: 'request.C2SUseCardRequest',
  },
  [PACKET_TYPE.FLEAMARKET_PICK_REQUEST]: {
    handler: marketPickHandler,
    protoType: 'request.C2SFleaMarketPickRequest',
  },
  [PACKET_TYPE.POSITION_UPDATE_REQUEST]: {
    handler: positionUpdateHandler,
    protoType: 'request.C2SPositionUpdateRequest',
  },
  [PACKET_TYPE.REACTION_REQUEST]: {
    handler: reactionHandler,
    protoType: 'request.C2SReactionRequest',
  },
  [PACKET_TYPE.DESTROY_CARD_REQUEST]: {
    handler: destroyCardsHandler,
    protoType: 'request.C2SDestroyCardReqeset',
  },
  [PACKET_TYPE.EVENING_DRAW_REQUEST]: {
    handler: eveningPickHandler,
    protoType: 'requst.C2SEveningPickRequest',
  },
  [PACKET_TYPE.MARKET_CARD_DELETE_REQUEST]: {
    handler: marketCardDeletePickHandler,
    protoType: 'requst.C2SEveningPickRequest',
  },
  [PACKET_TYPE.REROLL_REQUEST]: {
    handler: rerollHandler,
    protoType: 'request.C2SRerollReqeset',
  },
  [PACKET_TYPE.VERIFY_TOKEN_REQUEST]: {
    handler: verifyTokenHandler,
    protoType: 'request.C2SVerifyTokenReqeset',
  },
  [PACKET_TYPE.PING_REQUEST]: {
    handler: heartBeatHandler,
    protoType: 'request.C2SPingRequest',
  },
  [PACKET_TYPE.SWITCH_REQUEST]: {
    handler: switchHandler,
    protoType: 'request.C2SSwitchRequest',
  },
};

export const getHandlerByPacketType = (packetType) => {
  const handler = handlers[packetType];
  if (!handler) {
    if (!PACKET_TYPE[packetType]) return () => {}; // 다른 서버의 기능이 호출된 경우
    throw Error(`알 수 없는 패킷타입: ${packetType}`);
  }
  return handler.handler;
};

export const getHandlerByHandlerId = (packetType) => {
  if (!handlers[packetType]) {
    throw Error();
  }
  return handlers[packetType].protoType;
};
