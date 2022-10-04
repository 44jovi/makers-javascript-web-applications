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
    const message = document.createElement('div');
    message.textContent = ('This message is displayed by JavaScript!');
    message.setAttribute('id', 'message');
    this.mainContainerEl.append(message);
    
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
