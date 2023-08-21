const init = {
  list: []
}

let incrementId = 0;

export default function (state = init, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        list: [...state.list, {...action.payload.value, id: ++incrementId}]
      }
    case 'change_status':
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, status: item.status === 'waiting' ? 'finished' : 'waiting' }
          }
          return item;
        })
      }
    default:
      return state;
  }
}