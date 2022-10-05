/**
 * @jest-environment jsdom
 */

const fs = require('fs'); // to read non-JS files
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
 
describe('NotesView', () => {
  it('displays all notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('note 1');
    model.addNote('note 2');
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
   
  it('displays notes added by user via button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    const inputEl = document.querySelector('#note-input');
    const buttonEl = document.querySelector('#add-note-button');
    
    inputEl.value = ('Note 1');
    buttonEl.click();
    inputEl.value = ('Note 2');     
    buttonEl.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Note 1');
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual('Note 2');
    //assert user input text box is empty after button click
    expect(document.querySelector('#note-input').value).toEqual('');
  });
  
  it('#displayNotesFromApi - returns notes from API class', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
 
    const fakeApi = {
      loadNotes: () => ['Note One', 'Note Two']
    }
    const model = new NotesModel();
    const view = new NotesView(model, fakeApi);

    view.displayNotesFromApi();

    expect(fakeApi.loadNotes()).toEqual(['Note One', 'Note Two']);
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Note One');
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual('Note Two');
  });
});
