// Your array of band names
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmaha];

// Function to remove articles from band names
function removeArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort band names without articles
bandNames.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));

// Get the ul element by its id
let ulElement = document.getElementById('band');

// Clear any existing content
ulElement.innerHTML = '';

// Populate ul with sorted band names
bandNames.forEach(name => {
    let liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
});