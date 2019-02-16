import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

initialState = {
  primaryColor: '#13b5ea',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      }
    default:
      return state;
  };
};
