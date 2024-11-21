import { PACKET_TYPE } from '../constants/header.js';
import { loginHandler } from './auth/login.handler.js';
import { registerHandler } from './auth/register.handler.js';
import { gamePrepare } from './game/gamePrepare.handler.js';
import { gameStart } from './game/gameStart.handler.js';
import { createRoomHandler } from './room/room.create.handler.js';
import { fleamarketPickHandler } from './fleamarket/fleaMarket.handler.js';
import { getRoomListHandler } from './room/room.getList.handler.js';
import { joinRoomHandler } from './room/room.join.handler.js';
import { joinRandomRoomHandler } from './room/room.joinRandom.handler.js';
import { leaveRoomHandler } from './room/room.leave.handler.js';

const handlers = {
  // 회원가입
  [PACKET_TYPE.REGISTER_REQUEST]: {
    handler: registerHandler, // 사용하게될 함수명
    protoType: 'request.C2SRegisterRequest', // protobuf 타입
  },
  [PACKET_TYPE.LOGIN_REQUEST]: {
    handler: loginHandler,
    protoType: 'request.C2SLoginRequest',
  },
  [PACKET_TYPE.GET_ROOM_LIST_REQUEST]: {
    handler: getRoomListHandler,
    protoType: 'request.C2SGetRoomListRequest',
  },
  [PACKET_TYPE.JOIN_ROOM_REQUEST]: {
    handler: joinRoomHandler,
    protoType: 'request.C2SJoinRoomRequest',
  },
  [PACKET_TYPE.JOIN_RANDOM_ROOM_REQUEST]: {
    handler: joinRandomRoomHandler,
    protoType: 'request.C2SJoinRandomRoomRequest',
  },
  [PACKET_TYPE.CREATE_ROOM_REQUEST]: {
    handler: createRoomHandler,
    protoType: 'request.C2SCreateRoomRequest',
  },
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
  [PACKET_TYPE.FLEAMARKET_PICK_REQUEST]: {
    handler: fleamarketPickHandler,
    protoType: 'request.C2SFleaMarketPickRequest',
  },
};

export const getHandlerByPacketType = (packetType) => {
  if (!handlers[packetType]) {
    throw Error();
  }
  return handlers[packetType].handler;
};

export const getHandlerByHandlerId = (packetType) => {
  if (!handlers[packetType]) {
    throw Error();
  }
  return handlers[packetType].protoType;
};
