class NotesApi {

  constructor() {
    this.url = 'http://localhost:3000'    
  }

  loadNotes(cb1, cb2) {
    fetch(this.url + '/notes')
      .then((response) => response.json())
      .then((data) => {
        cb1(data);
      })
      .catch((error) => {
        cb2(error);
      });
  };  
  
  createNote(note) {
    fetch((this.url + '/notes'), {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({"content": note})
    })
      .then((response) => response.json())
      .then((data) => {
          console.log('Success - new note added: ', data);
      })
      .catch((error) => {
          console.log('Error - failed to add new note', error);
      })
  }
};
  
module.exports = NotesApi;
  
// original loadNotes() without callback parameter
// fetch('http://localhost:3000/notes')
//   .then((response) => {
//     return response.json();
//   })
  