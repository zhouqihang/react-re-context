const init = {
  filter: 'all'
}

export default function (state = init, action) {
  switch (action.type) {
    case 'all':
      return { ...state, filter: 'all' }
    case 'finished':
      return { ...state, filter: 'finished' }
    case 'waiting':
      return { ...state, filter: 'waiting' }
    default:
      return state;
  }

}