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
    notes.forEach((note) => {
      this.allNotes.push(note);
    });
  }

  reset() {
    this.allNotes = [];
  }
}

module.exports = NotesModel;
