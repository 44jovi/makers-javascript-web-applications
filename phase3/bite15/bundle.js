(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

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
        setNotes(notes) {
          notes.forEach((note) => {
            this.allNotes.push(note);
          });
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
      var NotesApi2 = require_notesApi();
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
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
        displayNotesFromApi(cb) {
          this.api.loadNotes((notes) => {
            console.log("Executing displayNotesFromApi()");
            console.log(notes);
            console.log("Data received from API and converted to JSON");
            this.model.setNotes(notes);
            this.displayNotes();
            cb();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesApi = require_notesApi();
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  console.log("The notes app is running");
  console.log(new Date());
  view.displayNotesFromApi();
})();
