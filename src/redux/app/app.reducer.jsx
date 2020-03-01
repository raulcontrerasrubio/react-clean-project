import {APP_LOADED} from './app.types';

const initialState = {
  appHasLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED: {
      return {
        ...state,
        appHasLoaded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
