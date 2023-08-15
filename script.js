// // 
const band=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal]
function strip (word) {
    let regex = new RegExp('^(a |the |an )', 'i')
    return word.replace(regex, '').trim()
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1)


/** 
 * add ul list in HTML
 **/
document.querySelector('#bands').innerHTML = 
    sortedBands.map(item => `<li>${item}</li>`).join('')

// //your code here
// const bands = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// // Define the strip function to remove common words from band names
// function strip(word) {
// const regex = /^(a |the |an )/i;
// return word.replace(regex, '').trim();
// }

// // Sort the bands array using the strip function to ignore common words
// const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

// // Update the DOM with the sorted band names
// const bandList = document.getElementById('bands');
// sortedBands.forEach(band => {
// const listItem = document.createElement('li');
// listItem.textContent = band;
// bandList.appendChild(listItem);
// });

