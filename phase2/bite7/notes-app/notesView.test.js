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
 });
