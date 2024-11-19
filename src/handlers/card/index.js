import { CARD_TYPES } from '../../constants/cardTypes.js';

const handlers = {
  [CARD_TYPES.NONE]: {
    handler: async (u, t) => {}, // 사용하게될 함수명
  },
  [CARD_TYPES.BBANG]: {
    handler: async () => {}, // 사용하게될 함수명
  },
};

export const getHandlerByCardType = (cardType) => {
  if (!handlers[cardType]) {
    throw Error();
  }
  return handlers[cardType].handler;
};