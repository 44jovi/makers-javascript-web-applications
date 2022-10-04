const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
const view = new NotesView(model);

console.log('The notes app is running');
console.log(new Date());

// view.displayNotes();

// model.addNote('qwerty');
