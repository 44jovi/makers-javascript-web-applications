const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads data', () => {
    
    const api = new NotesApi();

    fetch.mockResponseOnce(JSON.stringify({
      notes: ['This note is coming from the server']
    }));

    api.loadNotes('123', (returnedDataFromApi) => {
      expect(returnedDataFromApi.notes).toBe(['This note is coming from the server']);
    });

  });
});
