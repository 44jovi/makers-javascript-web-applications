(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.allNotes = [];
        }
        getNotes() {
          return this.allNotes;
        }
        addNote(note) {
          this.allNotes.push(note);
        }
        reset() {
          this.allNotes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addNoteButton = document.querySelector("#add-note-button");
          this.addNoteButton.addEventListener("click", () => {
            this.addNewNote();
            this.displayNotes();
          });
        }
        displayNotes() {
          const allNotes = this.model.getNotes();
          const prevNotes = document.querySelectorAll(".note");
          prevNotes.forEach((note) => {
            note.remove();
          });
          allNotes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.textContent = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
          document.querySelector("#note-input").value = "";
        }
        addNewNote() {
          this.inputEl = document.querySelector("#note-input").value;
          this.model.addNote(this.inputEl);
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var view = new NotesView(model);
  console.log("The notes app is running");
  console.log(new Date());
})();
