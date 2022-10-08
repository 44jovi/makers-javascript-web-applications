const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

console.log('The notes app is running');
console.log(new Date());

// view.displayNotesFromApi();

api.loadNotes((data) => {
  // This callback executes if data fetched correctly
  model.setNotes(data);
  view.displayNotes();
}, () => {
  // This callback executes if data fetch fails
  view.displayError();
});
