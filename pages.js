
// get each element that holds the message
const elements = Array.from(document.querySelector('.words').children);
// how many milliseconds between typing each word?
const increment = 50;
// track increment
let counter = 0; 

// iterate through each tag within the .words parent
elements.forEach(el => {
  // hide to avoid flash
  el.style.opacity = 0;
  // break down element's text into an array of individual letters
  const letters = el.innerText.split('');
  // now that we've stored the text, we can (temporarily) remove it
  el.innerHTML = '';
  // now that the text is gone, we can allow it to be visible again for typing
  el.style.opacity = 1;
  // iterate through each letter
  letters.forEach(letter => {
    // increment count
    counter++;
    // setTimeout means "do this after X amount of time"
    setTimeout(() => {
      // add the letter
      el.innerHTML += letter;
    // counter mulitpled by increment gives us the delay
    }, counter * increment);
  })
})

// Add an abortable event listener to table
const controller = new AbortController();
const el = document.getElementById("clickable");
el.addEventListener("click", modifyText, { signal: controller.signal } );

// Function to change the content of t2
function modifyText() {
    const t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue === "three") {
      t2.firstChild.nodeValue = "two";
    } else {
      t2.firstChild.nodeValue = "three";
      controller.abort(); // remove listener after value reaches "three"
    }
  }