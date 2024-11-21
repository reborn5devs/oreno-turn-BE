import { getUserById } from '../../session/user.session.js';

// 만기적금 - 은행 npc에게 사용시 핸드카드 두장을 획득한다
export const maturedSavingsHandler = async (socket, cardType, targetUserId) => {
  const user = getUserById(targetUserId);
  const userCharacter = user.character;
  const handCards = userCharacter.handCards;
  const earningCount = 2;

  // 카드더미에서 2장 뽑아 유저에게 준다 - 카드더미에서 2장 줄이고, 종류값에 맞는 카드를 유저 핸드로 넣어준다
  const pickedCards = cardDeck.splice(0, earningCount);
  // 얻은 카드의 타입과 장수를 handCards에 set으로 넣어준다
  pickedCards.forEach((pickedCardType) => {
    let count = handCards.get(pickedCardType);
    count = !!count ? count : 0;
    handCards.set(pickedCardType, ++count);
  });
};