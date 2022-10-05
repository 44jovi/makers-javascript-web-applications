class NotesApi {
  loadNotes() {
    fetch('http://localhost:3000/notes')
      .then((response) => {
        return response.json();
      })
  };
};

module.exports = NotesApi;
