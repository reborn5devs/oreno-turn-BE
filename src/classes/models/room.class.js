import IntervalManager from '../managers/interval.manager.js';
import { makeCardDeck } from '../../handlers/card/index.js';
import Card from './card.class.js';
import { phaseUpdateNotificationHandler } from '../../handlers/sync/phase.update.handler.js';

class Room {
  constructor(
    id,
    ownerId,
    name = '같이 할 사람',
    maxUserNum,
    state = 0,
    users,
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.name = name;
    this.maxUserNum = maxUserNum < 1 ? 1 : maxUserNum;
    this.state = state;
    this.users = users;
    this.intervalManager = new IntervalManager();
    this.phaseType = 1; // DAY:1, NIGHT:3
    this.gameDeck = makeCardDeck(); // 무작위로 섞인 카드들이 존재함 (기존기획)
    this.positionUpdateSwitch = false;
    this.isMarketOpen = false;
    this.isPushed = true;
  }

  distributeCards() {
    // 첫 카드 분배
    const cardsPerUser = 5; // 처음에 주는 카드 개수 5개 // 리롤
    this.users.forEach((user) => {
      user.character.handCardsCount = 0;

      const pickedCards = this.gameDeck.splice(0, cardsPerUser);
      pickedCards.forEach((card) => {
        user.character.addCardByType(card);
//       for (let i = 0; i < cardsPerUser; i++) {
//         const cardType = this.gameDeck.pop();
//         if (cardType) {
//           const card = new Card(cardType, 1);
//           cards.push(card);
//         }
//       }

//       cards.forEach((card) => {
//         user.character.addCard(card);
      });
      
      user.character.handCardsCount = user.character.handCards.size;
    });
  }

  // distributeCards() {
  //   // 첫 카드 분배
  //   console.log('카드덱 보기', this.gameDeck);
  //   const cardsPerUser = 5; // 처음에 주는 카드 개수 5개 // 리롤
  //   this.users.forEach((user) => {
  //     user.character.handCardsCount = 0;
  //     const cards = [];

  //     for (let i = 0; i < cardsPerUser; i++) {
  //       const cardType = this.gameDeck.pop();
  //       console.log('뽑은카드', cardType);
  //       if (cardType) {
  //         const card = new Card(cardType, 1);
  //         cards.push(card);
  //       }
  //     }

  //     cards.forEach((card) => {
  //       user.character.addCard(card);
  //     });
  //   });
  // }

  addUser(userData) {
    this.users.push(userData);
  }

  removeUserById(userId) {
    const index = this.users.findIndex((user) => user.id === userId);
    if (index != -1) {
      return this.users.splice(index, 1)[0];
    } else {
      return false;
    }
  }
  getIntervalManager() {
    return this.intervalManager;
  }
  positionUpdateOn() {
    this.positionUpdateOn = true;
  } //포지션 업데이트 노티 받기 위한 스위치 온

  button(socket) {
    if (this.isPushed) {
      this.startCustomInterval();
      this.isPushed = false;
    }
  }

  startCustomInterval() {
    const intervals = [18000, 6000, 18000];
    let currentIndex = 0;
    const room = this;
    function runInterval() {
      // 다음 인터벌 설정
      currentIndex = (currentIndex + 1) % intervals.length;
      const nextState = intervals[currentIndex];
      phaseUpdateNotificationHandler(room, nextState);
      setTimeout(runInterval, nextState);
    }
    setTimeout(runInterval, intervals[currentIndex]);
  }

}

export default Room;
