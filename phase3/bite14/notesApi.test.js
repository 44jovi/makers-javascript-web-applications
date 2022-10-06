const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads data', (done) => {
    
    const api = new NotesApi();

    fetch.mockResponseOnce(JSON.stringify({
      notes: ['Fake note!']
    }));

    api.loadNotes((returnedData) => {
      console.log('Running api.loadNotes()')
      console.log(returnedData);
      expect(returnedData.notes).toEqual(['Fake note!']);
      done();
    });
  });
});
