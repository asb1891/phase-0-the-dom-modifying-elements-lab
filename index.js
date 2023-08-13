// 1. Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// 2. Create a new <h1> element
const newHeader = document.createElement('h1');

// 3. Set the id attribute of the new <h1> element
newHeader.id = 'victory';

// 4. Set the text content of the new <h1> element
const yourName = 'Andrew'; // Replace 'Your Name' with your actual name
newHeader.textContent = `${yourName} is the champion`;

// 5. Append the new <h1> element to the document body
document.body.appendChild(newHeader);
