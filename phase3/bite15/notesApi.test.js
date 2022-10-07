const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

beforeEach(() => {
  fetch.resetMocks();
});

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
});
