import { useReducer } from "react";
export default function Provider({ store, children }) {
  if (!store || !store.context) {
    throw new Error('The property "store" is required for "Provider" component.')
  }
  const [state, dispatch] = useReducer(store.reducers, store.initState);

  store.dispatch = dispatch;
  const Context = store.context;
  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}