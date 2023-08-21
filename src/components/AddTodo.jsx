import { useState } from "react";
import { useDispatch } from "../re-context";

function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch();
  function handleClick() {
    if (!text) return;
    dispatch({
      type: 'add',
      payload: {
        value: { content: text, status: 'waiting' }
      }
    })
    setText('')
  }
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="input todo content here" />
      <button type="button" onClick={handleClick}>add todo</button>
    </>
  )
}

export default AddTodo;