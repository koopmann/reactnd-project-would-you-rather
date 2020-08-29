import { LOG_IN, SIGN_OUT } from "../actions/constants";

const authreducer = (state = null, action) => {
  switch (action.type) {
    case LOG_IN:
      const { authedUser } = action;
      return authedUser;
    case SIGN_OUT:
      return null;

    default:
      return state;
  }
};

export default authreducer;
