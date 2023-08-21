import React from 'react';

type reducer = <S>(state: S, action: object) => S;

interface IObjectReducers {
  [key: string]: Function
}
interface ICombinedReducers<S = object> {
  reducer: reducer;
  initState: S;
}

interface Store<S> {
  context: React.Context<S>,
  reducers: reducer,
  dispatch: React.Dispatch<unknown>,
  initState: S
}

interface ProviderProps {
  store: Store<any>;
  children?: React.ReactNode;
}

declare const Provider: React.FunctionComponent<ProviderProps>;

declare function createStore<S>(reducers: ICombinedReducers<S>): Store<S>;

declare function combineReducers<S>(reducers: IObjectReducers, typeKey?: string): ICombinedReducers<S>;

declare function connect<S = {}, P = {}, R = S>(mapStateToProps?: (state: S) => R): (Component: React.FunctionComponent<P & R>) => React.FunctionComponent<Omit<P, 'dispatch'>>

declare function useDispatch<A>(): React.Dispatch<A>;

declare function useStore<S = {}>(): S;
declare function useStore<S = {}, R = unknown>(filter: (state: S) => R): R;

declare interface PropsWithDispatch<A = {}> {
  dispatch: React.Dispatch<A>
}