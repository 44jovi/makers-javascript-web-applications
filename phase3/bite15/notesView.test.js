/**
 * @jest-environment jsdom
 */

// const { doesNotMatch } = require('assert');
const fs = require('fs'); // to read non-JS files
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

jest.setTimeout(10000);
 
describe('NotesView class', () => {
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
  
  it('#displayNotesFromApi - returns notes from API class', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new NotesModel();

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
});
