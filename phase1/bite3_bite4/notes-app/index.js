// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const NotesModel = require('./notesModel');

const model = new NotesModel();

console.log('The notes app is running');
console.log(new Date());

console.log(model.getNotes());
model.addNote('hi there');
console.log(model.getNotes());
model.reset();
console.log(model.getNotes());
