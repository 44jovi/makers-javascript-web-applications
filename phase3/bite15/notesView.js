class NotesView {

  constructor(model, api) {
    this.model = model;
    this.api = api;

    this.mainContainerEl = document.querySelector('#main-container');  

    this.addNoteButton = document.querySelector('#add-note-button');
    this.addNoteButton.addEventListener('click', () => {
      this.addNewNote();
      this.displayNotes();
    })
  }

  displayNotes() {
    const prevNotes = document.querySelectorAll('.note');
    prevNotes.forEach((note) => {
      note.remove();
    })
    
    const allNotes = this.model.getNotes();
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

    console.log('User input value: ' + this.inputEl);
    
    this.api.createNote(this.inputEl);
    this.model.addNote(this.inputEl);
    
    console.log('Added note to page and server: ', this.inputEl);
  }

  displayNotesFromApi(cb) {
    this.api.loadNotes((notes) => {
      console.log('Executing displayNotesFromApi()');
      console.log(notes);
      console.log('Data received from API and converted to JSON');
      this.model.setNotes(notes);
      this.displayNotes();

      cb();
    });
  }
};

module.exports = NotesView;
