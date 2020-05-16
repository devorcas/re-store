
export default class BookstoreService {
  getBooks() {
    return [
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
    ];
  }
}