import { createContext, useContext } from "react";
import ProviderComponent from "./Provider";
import createConnect from './Connect';

const store = {
  context: null,
  reducers: null,
  dispatch: null,
  initState: {}
}

export function createStore(reducers) {
  if (store.context) return store;
  const Context = createContext({});
  store.context = Context;
  store.reducers = reducers.reducers;
  store.initState = reducers.initState;
  return store;
}

export function combineReducers(reducers, typeKey = 'type') {
  function reactReducers(state, action = {}) {
    let dotIdx = -1;
    if (action[typeKey] && (dotIdx = action[typeKey].indexOf('.')) !== -1) {
      const reducerKey = action[typeKey].substr(0, dotIdx);
      const actionType = action[typeKey].substr(dotIdx + 1);
      const reducer = reducers[reducerKey];
      if (reducer) {
        return Object.assign(
          {},
          state,
          {
            [reducerKey]: reducer(state[reducerKey], {...action, [typeKey]: actionType})
          }
        )
      }
    }
    return Object.assign(
      {},
      state,
      Object.keys(reducers)
        .reduce((res, k) => {
          res[k] = reducers[k](state[k], action);
          return res;
        }, {})
    )
  }
  return {
    reducers: reactReducers,
    initState: reactReducers({})
  }
}

export const connect = createConnect(store);

export const Provider = ProviderComponent;

export function useStore(filter) {
  const state = useContext(store.context);
  if (typeof filter === 'function') {
    return filter(state);
  }
  return state;
}

export function useDispatch() {
  return store.dispatch;
}