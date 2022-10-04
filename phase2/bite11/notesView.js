class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    
    this.addNoteButton = document.querySelector('#add-note-button');
    
    this.addNoteButton.addEventListener('click', () => {
      this.addNewNote();
      this.displayNotes();
    })
  }

  displayNotes() {
    const allNotes = this.model.getNotes();
    const prevNotes = document.querySelectorAll('.note');

    prevNotes.forEach((note) => {
      note.remove();
    })
  
    allNotes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })

    document.querySelector('#note-input').value = '';
  }

  addNewNote() {
    this.inputEl = document.querySelector('#note-input').value;
    this.model.addNote(this.inputEl);
  }
};

module.exports = NotesView;
