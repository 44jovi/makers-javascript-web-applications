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

  // index.js
  var NotesModel = require_notesModel();
  var model = new NotesModel();
  console.log("The notes app is running");
  console.log(new Date());
  console.log(model.getNotes());
  model.addNote("hi there");
  console.log(model.getNotes());
  model.reset();
  console.log(model.getNotes());
})();
