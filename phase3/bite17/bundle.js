(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        constructor() {
          this.url = "http://localhost:3000";
        }
        loadNotes(cb1, cb2) {
          fetch(this.url + "/notes").then((response) => response.json()).then((data) => {
            cb1(data);
          }).catch((error) => {
            cb2(error);
          });
        }
        createNote(note) {
          fetch(this.url + "/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ "content": note })
          }).then((response) => response.json()).then((data) => {
            console.log("Success - new note added: ", data);
          }).catch((error) => {
            console.log("Error - failed to add new note", error);
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
          const prevNotes = document.querySelectorAll(".note");
          prevNotes.forEach((note) => {
            note.remove();
          });
          const allNotes = this.model.getNotes();
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
          console.log("User input value: " + this.inputEl);
          this.api.createNote(this.inputEl);
          this.model.addNote(this.inputEl);
          console.log("Added note to page and server: ", this.inputEl);
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
        displayError() {
          const dispErrMsgEl = document.createElement("div");
          dispErrMsgEl.textContent = "Server error";
          dispErrMsgEl.className = "error";
          this.mainContainerEl.append(dispErrMsgEl);
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
  api.loadNotes((data) => {
    model.setNotes(data);
    view.displayNotes();
  }, () => {
    view.displayError();
  });
})();
