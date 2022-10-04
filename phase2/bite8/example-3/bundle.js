(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl1 = document.querySelector("#show-message-button");
          this.buttonEl1.addEventListener("click", () => {
            this.displayMessage();
          });
          this.buttonEl2 = document.querySelector("#hide-message-button");
          this.buttonEl2.addEventListener("click", () => {
            this.hideMessage();
          });
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayMessage() {
          const message = document.createElement("div");
          message.textContent = "This message is displayed by JavaScript!";
          message.setAttribute("id", "message");
          this.mainContainerEl.append(message);
          console.log("Button clicked - #show-message-button");
        }
        hideMessage() {
          document.querySelector("#message").remove();
          console.log("Button clicked - #hide-message-button");
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
