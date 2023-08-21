import React, { useContext } from 'react'

export default function connectCreator(store) {
  return function connect(mapStateToProps) {
    return function (Component) {
      const DoNotRerenderComponent = React.memo(function DoNotRerenderComponent (props) {
        return <Component {...props} />
      }, (prevProps, nextProps) => {
        return Object.keys(nextProps).every(k => {
          return nextProps[k] === prevProps[k];
        })
      })
      return function HOCConnect(props) {
        const contextState = useContext(store.context);
        const state = mapStateToProps ? mapStateToProps(contextState) : contextState;
        return (
          <DoNotRerenderComponent {...props} {...state} dispatch={store.dispatch} />
        )
      }
    }
  }
}