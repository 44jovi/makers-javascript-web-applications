/**
 * @jest-environment jsdom
 */

const fs = require('fs'); // to read non-JS files

const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

jest.mock('./notesApi');

// // if doing multiple tests with jest-mocked NotesApi
// beforeEach(() => {
//   NotesApi.mockClear();
// });

describe('NotesView class', () => {
  it('#displayNotesFromApi - returns notes from API class', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const jestMockedkApi = new NotesApi();
    const view = new NotesView(model, jestMockedkApi);

    jestMockedkApi.loadNotes.mockImplementation(() => {
      model.setNotes(['Fake note 1']);
      view.displayNotes();
    });

    // this then runs the jestMockedApi's version of loadNotes():
    view.displayNotesFromApi();
    
    expect(jestMockedkApi.loadNotes).toHaveBeenCalledTimes(1);
    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelector('div.note').textContent).toEqual('Fake note 1');
    done();
  });
});
