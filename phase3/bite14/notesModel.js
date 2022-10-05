class NotesModel {
  constructor() {
    this.allNotes = [];
  }
  getNotes() {
    return this.allNotes;
  }

  addNote(note) {
    this.allNotes.push(note);
  }

  setNotes(notes) {
    this.allNotes = notes;
  }

  reset() {
    this.allNotes = [];
  }
}

module.exports = NotesModel;
