class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'I was dynamically added JavaScript123!';
    // can also use .textContent
    // newParagraph.textContent = 'I was dynamically added JavaScript!';
    this.mainContainerEl.append(newParagraph);
  }

  clearParagraphs() {
    const allParagraphs = document.querySelectorAll('p');

    allParagraphs.forEach((paragraph) => {
      paragraph.remove();
    })
  }
}

module.exports = View;