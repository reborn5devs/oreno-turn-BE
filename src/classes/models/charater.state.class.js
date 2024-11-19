class CharacterState {
  constructor(state = 0, nextState = 0, stateTargetUserId = null) {
    this.state = state;
    this.nextState = nextState;
    this.nextStateAt = 2; // state가 nextState로 풀리는 밀리초 타임스탬프. state가 NONE이면 0
    this.stateTargetUserId = stateTargetUserId; // state에 target이 있을 경우
  }
}

export default CharacterState;