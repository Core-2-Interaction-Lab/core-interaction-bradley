///////////////////////////////////////////////////////////////
// Function to render your items
const renderItems = (mydata) => {
    // The `ul` where the items will be inserted
    const mydataList = document.getElementById('mydata')


    // Loop through each item in mydata array
    mydata.forEach(item => {
        const listItem = document.createElement('li') // Make the `li`


        // This can get annoying, so we can use “template literals” instead
        const itemDetails =
            `
			<p>#${item.uniqueid}</p>
            <p><time>${formatDate(item.dateofbite)}</time></p>
					<div class="breed">${item.breed}</div>
			`
        listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

        // You can build logic from your data, too
        if (!item.spayneuter) { // If this is `false`
            listItem.classList.add('alert') // Add this class to the whole `li`
        }

        mydataList.appendChild(listItem) // Then add the whole `li` into the `ul`
    })

    ///////////////////////////////////////////////////////////////
// Fetch gets your JSON file…
fetch('assets/allbites.json')
// fetch('assets/1weekbites.json')
.then(response => response.json())
.then(mydata => {
    // And passes the data to the function, above!
    renderItems(mydata.reverse()) // In reverse order
})