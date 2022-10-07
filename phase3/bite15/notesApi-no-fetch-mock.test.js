const NotesApi = require('./notesApi');

// see other test file for testing with mocked fetch()

describe('NotesApi class - without fetch() mocking', () => {
  it('#createNote adds a note to the server', (done) => {
    
    const api = new NotesApi();

    api.createNote('New remote note');

    const test = () => {
      api.loadNotes((returnedData) => {
      console.log('Test running');
      console.log(returnedData);
      expect(returnedData.slice(-1)).toEqual(['New remote note']);
      done();
    })}

    setTimeout(test, 1000);
  });
});
