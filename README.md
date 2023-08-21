# react-re-context

A state manage tool for React.js. It works with `reudcer` and `context` of React.js.

## Useage

### Create reducers

```javascript
import { combineReducers } from 're-context';
const initialTodoState = {
  list: []
}

function todoReducer(state = initialTodoState, action) {
  switch(action.type) {
    case 'add': 
      return {
        ...state,
        list: [...state.list, action.payload.value]
      }
    default:
      return state;
  }
}

const reducers = combineReducers({
  todos: todoReducer
})
```
### Create store

```javascript
import { createStore } from 're-context'
import reducers from './reducers' // created in previous step.

const store = createStore(reducers)
```
### Use Provider

```jsx
import { Provider } from 're-context'

const App = () => {
  return (
    <Provider store={store}>
    </Provider>
  )
}
```

### Use connect

```jsx
import { connect } from 're-context'

const Todo = (props) => {

  function handleClick() {
    props.dispatch({
      type: '...',
      payload: '...'
    })
  }
  return (
    <ol>
      {
        props.todos.list.map(todo => (<li key={todo.id} onClick={handleClick}>{todo.content}</li>))
      }
    </ol>
  )
}

export default connect()(Todo);
```

## Hooks usage

```jsx
import { useStore, useDispatch } from 're-context'

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useStore((state) => {
    return state.todos.list
  })
  function handleClick() {
    dispatch({
      type: '...',
      payload: '...'
    })
  }
  return (
    <ol>
      {
        todos.map(todo => (<li key={todo.id} onClick={handleClick}>{todo.content}</li>))
      }
    </ol>
  )
}

export default Todo;
```

## Build

This repo is not published to `npmjs`, so you need build it yourself.

```shell
$ npm run build && cp ./src/re-context/index.d.ts ./dist
```