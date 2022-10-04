class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    
    this.addNoteButton = document.querySelector('#add-note-button');
    
    this.addNoteButton.addEventListener('click', () => {
      this.inputEl = document.querySelector('#note-input').value;
      this.model.addNote(this.inputEl);
      this.displayNotes();
    })
  }

  displayNotes() {
    const allNotes = this.model.getNotes();
    allNotes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  // add method addNewNote, remove method/logic from constructor
};

module.exports = NotesView;
