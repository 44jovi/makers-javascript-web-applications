/**
 * @jest-environment jsdom
 */

// const { doesNotMatch } = require('assert');
const fs = require('fs'); // to read non-JS files
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');

require('jest-fetch-mock').enableMocks()

const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

jest.mock('./notesApi');

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  model = new NotesModel();
  NotesApi.mockClear();
});

describe('NotesView class', () => {
  it('#displayNotes displays all notes', () => {
    const view = new NotesView(model);

    model.addNote('Note 1');
    model.addNote('Note 2');
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Note 1');
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual('Note 2');
  });
   
  it('displays notes added by user via button', () => {
    const api = new NotesApi;
    const view = new NotesView(model, api);

    const inputEl = document.querySelector('#note-input');
    const buttonEl = document.querySelector('#add-note-button');
    
    inputEl.value = ('Note One');
    buttonEl.click();
    inputEl.value = ('Note Two');     
    buttonEl.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Note One');
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual('Note Two');
    //assert user input text box is empty after button click
    expect(document.querySelector('#note-input').value).toEqual('');
  });
  
  it('#displayNotesFromApi - returns notes from API class', (done) => {
    
    // manual mock
    const fakeApi = {
      loadNotes: (callback) => {
        callback(
          ['Fake note 1', 'Fake note 2']
        );
      }
    };

    const view = new NotesView(model, fakeApi);
    
    view.displayNotesFromApi(() => {
      expect(document.querySelectorAll('div.note').length).toEqual(2);
      expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Fake note 1');
      expect(document.querySelectorAll('div.note')[1].textContent).toEqual('Fake note 2');
      done();
    });
  });
  
  it('NotesApi#createNote is called when user clicks submit button', () => {
    const mockApi = new NotesApi();
    mockApi.createNote.mockImplementation(() => '');

    const view = new NotesView(model, mockApi);
    
    const inputEl = document.querySelector('#note-input');
    const buttonEl = document.querySelector('#add-note-button');

    inputEl.value = ('User submitted note');
    buttonEl.click(); // calls view.addNewNote();

    expect(mockApi.createNote).toHaveBeenCalledTimes(1);
    expect(mockApi.createNote).toHaveBeenCalledWith('User submitted note');
  });

  it('#displayError - error message if NotesApi#loadNotes() fails', () => {
    const mockApi = new NotesApi();
    const view = new NotesView(model, mockApi);

    view.displayError();

    expect(document.querySelectorAll('div.error').length).toEqual(1);
    expect(document.querySelectorAll('.error')[0].textContent).toEqual('Server error');
  });
});
