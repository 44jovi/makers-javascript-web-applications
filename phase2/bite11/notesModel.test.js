const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('#getNotes returns empty array', () => {
    model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })
  
  it('#addNote adds note to allNotes array', () => {
    model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })
  
  it('#reset empties allNotes array', () => {
    model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
});
