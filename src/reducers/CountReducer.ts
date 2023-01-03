import { INIT_COUNT_STATE } from "../status/count";
import { INCREMENT, DECREMENT } from "../action";

export const countReducer = (state = INIT_COUNT_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
