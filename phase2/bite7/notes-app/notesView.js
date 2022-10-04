class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    const allNotes = this.model.getNotes();
    allNotes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      // can also use .setAttribute()
      // noteEl.setAttribute("class", "note");
      this.mainContainerEl.append(noteEl);
    })    
  }

};

module.exports = NotesView;
