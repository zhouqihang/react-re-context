import { connect } from "../re-context";

function TodoList(props) {
  function changeStatus(id) {
    props.dispatch({
      type: 'change_status',
      payload: {
        id
      }
    })
  }
  return (
    <ol>
      {
        props.todos.map((todo) => (<li key={todo.id}>{todo.content} - <button type="button" onClick={() => changeStatus(todo.id)}>change status</button></li>))
      }
    </ol>
  )
}

export default connect((state) => {
  return {
    todos: state.filter.filter === 'all' ? state.todo.list : state.todo.list.filter((item) => item.status === state.filter.filter)
  }
})(TodoList);