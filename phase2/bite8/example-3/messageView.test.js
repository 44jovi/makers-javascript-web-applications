/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl1 = document.querySelector('#show-message-button');
    buttonEl1.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // button: show message
    const buttonEl1 = document.querySelector('#show-message-button');
    buttonEl1.click();
    
    expect(document.querySelector('#message')).not.toBeNull();

    // button: hide message
    const buttonEl2 = document.querySelector('#hide-message-button');
    buttonEl2.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});
