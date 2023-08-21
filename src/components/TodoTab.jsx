import { useDispatch, useStore } from "../re-context";

function TodoTab() {
  const dispatch = useDispatch()
  const filter = useStore((state) => {
    return state.filter.filter
  });

  function changeStatus(status) {
    dispatch({
      type: 'filter.' + status,
    })
  }
  return (
    <div>
      <a href="javascript: void(0);" className={filter === 'all' ? 'active' : ''} onClick={() => changeStatus('all')}>ALL</a>
      &emsp;
      <a href="javascript: void(0);" className={filter === 'finished' ? 'active' : ''} onClick={() => changeStatus('finished')}>FINISHED</a>
      &emsp;
      <a href="javascript: void(0);" className={filter === 'waiting' ? 'active' : ''} onClick={() => changeStatus('waiting')}>WAITING</a>
    </div>
  )
}

export default TodoTab;