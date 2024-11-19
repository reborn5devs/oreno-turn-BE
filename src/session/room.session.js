import { myRoomId, rooms } from './session';

export const createRoom = (roomData) => {
  rooms.set(roomData.id, roomData);
};

export const deleteRoom = (roomId) => {
  rooms.delete(roomId);
};

export const clearRooms = () => {
  rooms.clear();
};

export const getEmptyRooms = () => {
  return [...rooms.values()].filter(
    (room) => room.maxUserNum > room.users.length,
  );
};

export const getUsersWithoutMe = (token) => {
  const roomId = myRoomId.get(token);
  const room = rooms.get(roomId);
  const users = [...room.users];
  const me = users.get(token);

  return users.filter((user) => user.id != me.id);
};

// message RoomData {
//     int32 id = 1;
//     int64 ownerId = 2;
//     string name = 3;
//     int32 maxUserNum = 4;
//     RoomStateType state = 5; // WAIT 0, PREPARE 1, INAGAME 2
//     repeated UserData users = 6; // 인덱스 기반으로 턴 진행
// }

// message UserData {
//     int64 id = 1;
//     string nickname = 2;
//     CharacterData character = 3;
// }

// enum RoomStateType {
//     WAIT = 0;
//     PREPARE = 1;
//     INGAME = 2;
// }

// message CharacterData {
//     CharacterType characterType = 1;
//     RoleType roleType = 2;
//     int32 hp = 3;
//     int32 weapon = 4;
//     CharacterStateInfoData stateInfo = 5;
//     repeated int32 equips = 6;
//     repeated int32 debuffs = 7;
//     repeated CardData handCards = 8;
//     int32 bbangCount = 9;
//     int32 handCardsCount = 10;
// }
