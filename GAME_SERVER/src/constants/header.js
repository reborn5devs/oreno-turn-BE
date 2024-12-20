export const TOTAL_LENGTH = 11;

export const PACKET_TYPE_LENGTH = 2;
export const VERSION_LENGTH = 1;
export const SEQUENCE_SIZE = 4;
export const PAYLOAD_LENGTH_SIZE = 4;

export const PACKET_TYPE = {
  // 클라이언트나 서버가 데이터 전송 할 때 파악한 패킷 타입 (핸들러 ID)
  // 회원가입 및 로그인
  REGISTER_REQUEST: 1,
  REGISTER_RESPONSE: 2,
  LOGIN_REQUEST: 3,
  LOGIN_RESPONSE: 4,

  // 방 생성
  CREATE_ROOM_REQUEST: 5,
  CREATE_ROOM_RESPONSE: 6,

  // 방 목록 불러오기
  GET_ROOM_LIST_REQUEST: 7,
  GET_ROOM_LIST_RESPONSE: 8,

  // 방 참여
  JOIN_ROOM_REQUEST: 9,
  JOIN_ROOM_RESPONSE: 10,

  // 방 랜덤 참여
  JOIN_RANDOM_ROOM_REQUEST: 11,
  JOIN_RANDOM_ROOM_RESPONSE: 12,
  JOIN_ROOM_NOTIFICATION: 13,

  // 방 이탈
  LEAVE_ROOM_REQUEST: 14,
  LEAVE_ROOM_RESPONSE: 15,
  LEAVE_ROOM_NOTIFICATION: 16,

  // 게임 준비
  GAME_PREPARE_REQUEST: 17,
  GAME_PREPARE_RESPONSE: 18,
  GAME_PREPARE_NOTIFICATION: 19,

  // 게임 시작
  GAME_START_REQUEST: 20,
  GAME_START_RESPONSE: 21,
  GAME_START_NOTIFICATION: 22,

  // 위치 동기화
  POSITION_UPDATE_REQUEST: 23,
  POSITION_UPDATE_NOTIFICATION: 24,

  // 카드 사용
  USE_CARD_REQUEST: 25,
  USE_CARD_RESPONSE: 26,
  USE_CARD_NOTIFICATION: 27,

  // 카드 장착
  EQUIP_CARD_NOTIFICATION: 28,
  CARD_EFFECT_NOTIFICATION: 29,

  // 플리마켓
  FLEAMARKET_NOTIFICATION: 30,
  FLEAMARKET_PICK_REQUEST: 31,
  FLEAMARKET_PICK_RESPONSE: 32,

  // 카드 사용, 체력 감소 등 유저 상태 변경 시
  USER_UPDATE_NOTIFICATION: 33,

  // 페이즈 업데이트
  PHASE_UPDATE_NOTIFICATION: 34,

  // 상대에게 피격 시 - 대응 카드 보유 시 팝업 발생
  REACTION_REQUEST: 35,
  REACTION_RESPONSE: 36,

  // 카드 사용 후 소멸
  DESTROY_CARD_REQUEST: 37,
  DESTROY_CARD_RESPONSE: 38,

  // 게임 종료
  GAME_END_NOTIFICATION: 39,

  // 카드 선택
  CARD_SELECT_REQUEST: 40,
  CARD_SELECT_RESPONSE: 41,

  // 폭탄 넘기기
  PASS_DEBUFF_REQUEST: 42,
  PASS_DEBUFF_RESPONSE: 43,

  // 폭탄 폭발 경고
  WARNING_NOTIFICAITON: 44,
  ANIMATION_NOTIFICATION: 45,

  // 황혼 카드 선택
  EVENING_DRAW_REQUEST: 46,
  EVENING_DRAW_RESPONSE: 47,

  //마켓 카드 제거
  MARKET_CARD_DELETE_REQUEST: 48,
  MARKET_CARD_DELETE_RESPONSE: 49,

  // 카드 리롤
  REROLL_REQUEST: 50,
  REROLL_RESPONSE: 51,

  //황혼 카드 분배
  EVENING_DRAW_NOTIFICATION: 52,

  //게임 서버 스위치
  GAME_SERVER_SWITCH_NOTIFICATION: 53,

  //토큰 유효 검사
  VERIFY_TOKEN_REQUEST: 54,
  VERIFY_TOKEN_RESPONSE: 55,

  //하트 비트
  PING_REQUEST: 56,
  PONG_RESPONSE: 57,
};

export const PACKET_NUMBER = {
  1: 'REGISTER_REQUEST',
  2: 'REGISTER_RESPONSE',
  3: 'LOGIN_REQUEST',
  4: 'LOGIN_RESPONSE',
  5: 'CREATE_ROOM_REQUEST',
  6: 'CREATE_ROOM_RESPONSE',
  7: 'GET_ROOM_LIST_REQUEST',
  8: 'GET_ROOM_LIST_RESPONSE',
  9: 'JOIN_ROOM_REQUEST',
  10: 'JOIN_ROOM_RESPONSE',
  11: 'JOIN_RANDOM_ROOM_REQUEST',
  12: 'JOIN_RANDOM_ROOM_RESPONSE',
  13: 'JOIN_ROOM_NOTIFICATION',
  14: 'LEAVE_ROOM_REQUEST',
  15: 'LEAVE_ROOM_RESPONSE',
  16: 'LEAVE_ROOM_NOTIFICATION',
  17: 'GAME_PREPARE_REQUEST',
  18: 'GAME_PREPARE_RESPONSE',
  19: 'GAME_PREPARE_NOTIFICATION',
  20: 'GAME_START_REQUEST',
  21: 'GAME_START_RESPONSE',
  22: 'GAME_START_NOTIFICATION',
  23: 'POSITION_UPDATE_REQUEST',
  24: 'POSITION_UPDATE_NOTIFICATION',
  25: 'USE_CARD_REQUEST',
  26: 'USE_CARD_RESPONSE',
  27: 'USE_CARD_NOTIFICATION',
  28: 'EQUIP_CARD_NOTIFICATION',
  29: 'CARD_EFFECT_NOTIFICATION',
  30: 'FLEAMARKET_NOTIFICATION',
  31: 'FLEAMARKET_PICK_REQUEST',
  32: 'FLEAMARKET_PICK_RESPONSE',
  33: 'USER_UPDATE_NOTIFICATION',
  34: 'PHASE_UPDATE_NOTIFICATION',
  35: 'REACTION_REQUEST',
  36: 'REACTION_RESPONSE',
  37: 'DESTROY_CARD_REQUEST',
  38: 'DESTROY_CARD_RESPONSE',
  39: 'GAME_END_NOTIFICATION',
  40: 'CARD_SELECT_REQUEST',
  41: 'CARD_SELECT_RESPONSE',
  42: 'PASS_DEBUFF_REQUEST',
  43: 'PASS_DEBUFF_RESPONSE',
  44: 'WARNING_NOTIFICAITON',
  45: 'ANIMATION_NOTIFICATION',
  46: 'EVENING_DRAW_REQUEST',
  47: 'EVENING_DRAW_RESPONSE',
  48: 'MARKET_CARD_DELETE_REQUEST',
  49: 'MARKET_CARD_DELETE_RESPONSE',
  50: 'REROLL_REQUEST',
  51: 'REROLL_RESPONSE',
  52: 'EVENING_DRAW_NOTIFICATION',
  53: 'GAME_SERVER_SWITCH_NOTIFICATION',
  54: 'VERIFY_TOKEN_REQUEST',
  55: 'VERIFY_TOKEN_RESPONSE',
  56: 'PING_REQUEST',
  57: 'PONG_RESPONSE',
};
