class MessageView {
  constructor() {
    this.buttonEl1 = document.querySelector('#show-message-button');
    
    this.buttonEl1.addEventListener('click', () => {
       this.displayMessage();
    });

    this.buttonEl2 = document.querySelector('#hide-message-button');

    this.buttonEl2.addEventListener('click', () => {
      this.hideMessage();
    });

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayMessage() {
    // assign user's input to 'message' constant
    const message = document.querySelector('#message-input').value;
    const messageEl = document.createElement('div')
    
    messageEl.innerText = (message);
    messageEl.setAttribute('id', 'message');
    this.mainContainerEl.append(messageEl);
    
    console.log('Button clicked - #show-message-button');
  }

  hideMessage() {
    document.querySelector('#message').remove();

    console.log('Button clicked - #hide-message-button');
    // // original solution 
    // // but this removes all elements with id 'message'
    // // and then prevents displayMessage() adding more messages
    // this.mainContainerEl.remove(message);
  }
}

module.exports = MessageView;
