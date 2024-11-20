import User from '../../classes/models/user.class.js';
import { PACKET_TYPE } from '../../constants/header.js';
import { getUsersWithoutMe } from '../../session/room.session.js';
import { users } from '../../session/session.js';
import {
  multiCast,
  sendResponsePacket,
} from '../../utils/response/createResponse.js';
import sendResponsePacket from '../../utils/response/createResponse.js';
import { getFailCode } from '../../utils/response/failCode.js';

//게임이 시작되는 순간부터 인터벌로 상시호출? 이라고 하기엔 리퀘가 있네..
//유저의 위치 통기화

// message C2SPositionUpdateRequest {
//     double x = 1;
//     double y = 2;
// } //23

// message S2CPositionUpdateResponse {
//     bool success = 1;
//     GlobalFailCode failCode = 2;
// }

// 방에 있는 모두에게 
// message S2CPositionUpdateNotification {
//     repeated CharacterPositionData characterPositions = 1;
// }//24

export const positionUpdateHandler = async({socket, payload})=>{

    console.log("포지션 변경 어서오고");
    
    const { x, y } = payload;
    const failCode = getFailCode();
    const message = {
      suceess: false,
      failCode: failCode.UNKNOWN_ERROR,
    };

    try{
        const user = user.get(socket.token);

        /*검증 구간
        */ 

        // 위치 동기화
        user.x = x;
        user.y = y;


        // 노티 만들기
        const notification = {
            characterPositions : characterPositions,
            success: true,
        }

        //방 전체 슛
        const usersInRoomWithoutMe = getUsersWithoutMe(socket.roomId, user.id);
        multiCast(
            usersInRoomWithoutMe,
            PACKET_TYPE.POSITION_UPDATE_NOTIFICATION,
            notification,
          );
    }
    catch(error){
        console.log('위치 동기화 알수없는 에러');
    }
    //이거 리스폰스 없음.
}

  

    