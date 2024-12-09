export const packetNames = {
  common: {
    RoomData: 'common.RoomData',
    UserData: 'common.UserData',
    CharacterData: 'common.CharacterData', // 변경됨
    CharacterPositionData: 'common.CharacterPositionData',
    CardData: 'common.CardData', // 변경됨
    GameStateData: 'common.GameStateData',
    CharacterStateInfoData: 'common.CharacterStateInfoData',
    //여기부터 추가
    BuffData: 'common.BuffData',
  },
  enum: {
    GlobalFailCode: 'enum.GlobalFailCode',
    WarningType: 'enum.WarningType',
    WinType: 'enum.WinType',
    CharacterType: 'enum.CharacterType',
    CharacterStateType: 'enum.CharacterStateType',
    CardType: 'enum.CardType',
    RoleType: 'enum.RoleType',
    RoomStateType: 'enum.RoomStateType',
    PhaseType: 'enum.PhaseType',
    ReactionType: 'enum.ReactionType',
    SelectCardType: 'enum.SelectCardType',
    AnimationType: 'enum.AnimationType',
    //여기부터 추가
    BuffType: 'enum.BuffType',
  },
  gamePacket: {
    GamePacket: 'gamePacket.GamePacket',
  },
  reqeust: {
    C2SRegisterRequest: 'request.C2SRegisterRequest',
    C2SLoginRequest: 'request.C2SLoginRequest',
    C2SCreateRoomRequest: 'request.C2SCreateRoomRequest',
    C2SGetRoomListRequest: 'request.C2SGetRoomListRequest',
    C2SJoinRoomRequest: 'request.C2SJoinRoomRequest',
    C2SJoinRandomRoomRequest: 'request.C2SJoinRandomRoomRequest',
    C2SLeaveRoomRequest: 'request.C2SLeaveRoomRequest',
    C2SGamePrepareRequest: 'request.C2SGamePrepareRequest',
    C2SGameStartRequest: 'request.C2SGameStartRequest',
    C2SPositionUpdateRequest: 'request.C2SPositionUpdateRequest',
    C2SUseCardRequest: 'request.C2SUseCardRequest',
    C2SFleaMarketPickRequest: 'request.C2SFleaMarketPickRequest',
    C2SReactionRequest: 'reqeust.C2SReactionRequest',
    C2SDestroyCardRequest: 'request.C2SDestroyCardRequest',
    C2SCardSelectRequest: 'reqeust.C2SCardSelectRequest',
    C2SPassDebuffRequest: 'request.C2SPassDebuffRequest',
    // 여기부터 추가
    C2SEveningPickRequest: 'requst.C2SEveningPickRequest',
    C2SMarketCardDeleteRequest: 'request.C2SMarketCardDeleteRequest',
    C2SRerollRequest: 'request.C2SRerollRequest',
  },
  response: {
    S2CRegisterResponse: 'response.S2CRegisterResponse',
    S2CLoginResponse: 'response.S2CLoginResponse',
    S2CCreateRoomResponse: 'response.S2CCreateRoomResponse',
    S2CGetRoomListResponse: 'respose.S2CGetRoomListResponse',
    S2CJoinRoomResponse: 'response.S2CJoinRoomResponse',
    S2CJoinRandomRoomResponse: 'response.S2CJoinRandomRoomResponse',
    S2CJoinRoomNotification: 'response.S2CJoinRoomNotification',
    S2CLeaveRoomResponse: 'response.S2CLeaveRoomResponse',
    S2CLeaveRoomNotification: 'response.S2CLeaveRoomNotification',
    S2CGamePrepareResponse: 'response.S2CGamePrepareResponse',
    S2CGamePrepareNotification: 'response.S2CGamePrepareNotification',
    S2CGameStartResponse: 'response.S2CGameStartResponse',
    S2CGameStartNotification: 'response.S2CGameStartNotification',
    S2CPositionUpdateResponse: 'response.S2CPositionUpdateResponse',
    S2CPositionUpdateNotification: 'response.S2CPositionUpdateNotification',
    S2CUseCardResponse: 'response.S2CUseCardResponse',
    S2CUseCardNotification: 'response.S2CUseCardNotification',
    S2CEquipCardNotification: 'response.S2CEquipCardNotification',
    S2CCardEffectNotification: 'response.S2CCardEffectNotification',
    S2CFleaMarketNotification: 'response.S2CFleaMarketNotification',
    S2CFleaMarketPickResponse: 'response.S2CFleaMarketPickResponse',
    S2CUserUpdateNotification: 'response.S2CUserUpdateNotification',
    S2CPhaseUpdateNotification: 'response.S2CPhaseUpdateNotification',
    S2CReactionResponse: 'response.S2CReactionResponse',
    S2CDestroyCardResponse: 'response.S2CDestroyCardResponse',
    S2CGameEndNotification: 'response.S2CGameEndNotification',
    S2CCardSelectResponse: 'response.S2CCardSelectResponse',
    S2CPassDebuffResponse: 'response.S2CPassDebuffResponse',
    S2CWarningNotification: 'response.S2CWarningNotification',
    S2CAnimationNotification: 'response.S2CAnimationNotification',
    // 여기부터 추가
    S2CEveningDistributionNotification:
      'response.S2CEveningDistributionNotification',
    S2CEveningPickResponse: 'response.S2CEveningPickResponse',
    S2CMarketCardDeleteResponse: 'response.S2CMarketCardDeleteResponse',
    S2CRerollResponse: 'reponse.S2CRerollResponse',
  },
};
