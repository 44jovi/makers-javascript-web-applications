const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

// beforeEach(() => {
//   fetch.resetMocks();
// });

describe('NotesApi class', () => {
  it('calls fetch and loads data', (done) => {
    const api = new NotesApi();

    fetch.mockResponseOnce(JSON.stringify({
      content: ['Fake note!']
    }));

    api.loadNotes((returnedData) => {
      console.log('Running api.loadNotes()')
      console.log(returnedData);
      expect(returnedData.content).toEqual(['Fake note!']);
      done();
    });
  });

  it('#createNote adds a note to the server', (done) => {
    // for now use real API to confirm note added
    fetchMock.dontMock();

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
