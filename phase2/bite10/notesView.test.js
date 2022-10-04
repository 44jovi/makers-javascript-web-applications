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
    inputEl.value = ('Note 1');

    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();
  
     expect(document.querySelectorAll('div.note').length).toEqual(1);
     expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Note 1');
   });
  });
