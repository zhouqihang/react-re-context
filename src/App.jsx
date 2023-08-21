import { Provider, createStore } from './re-context';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoTab from './components/TodoTab';
import reducers from './reducers';

const store = createStore(reducers)

export default function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoTab />
      <TodoList />
    </Provider>
  )
}