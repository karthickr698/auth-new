import AsyncStorage from '@react-native-async-storage/async-storage';

let initialState = {
  token: AsyncStorage.getItem('token-meem'),
  isAuthenticated: AsyncStorage.getItem('token-meem') ? true : false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'user/set':
      AsyncStorage.setItem('token-meem', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
      };

    case 'user/logout':
      console.log('kogout');
      AsyncStorage.removeItem('token-meem');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };

    case 'user/update':
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
}
