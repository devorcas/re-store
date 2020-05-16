
const initialState = {
  books: [
    {
      id: 1,
      title: 'Effective Java',
      author: 'Johua Bloch'
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Ribert Martin'
    }
  ]
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      }
    default :
      return state;
  }
};

export default reducer;