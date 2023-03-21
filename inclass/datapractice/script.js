const creatCollectionHTML = data =>
const collection = document.getElementById('collection');

data.forEach(item => {
console.log(item);
const listItemHTML =
    <li>
        <p class="item-title">$(item.name)</p>
        <p class="item-year">$(item.year)</p>
        <p class="item-description">$(item.description)</p>
        <img src="$(item-image)"
        <p class="item-title">$(item.name)</p>
    </li>
});

fetch('collection.json')
// first check if request is approved/OK or if somthing bd happened
// returj the document in JSON format
.then(response => response.json())
.then(data => (
    createCollectionHTML(data):
))