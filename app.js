// import functions
import { isEven, isOdd } from './is-even.js';
// reference needed DOM elements
const input = document.getElementById ('input');
const oddImage = document.getElementById ('odd');
const evenImage = document.getElementById ('even');
const button = document.getElementById ('button');


function showCorrectImage(result) {

    const value = Number(result);
    const evenResult = isEven(value);
    

// if the value is even - display even Image
    if (evenResult) {
        evenImage.classList.toggle('hidden');
        setTimeout(()=>{
            evenImage.classList.toggle('hidden');
        }, 2000);
    } else { 
        oddImage.classList.toggle('hidden');
        setTimeout(()=>{
          oddImage.classList.toggle('hidden');
      }, 2000);

    }

// if the vaule is odd - display odd image
}
button.addEventListener('click', ()=>{
    const val = input.value;
    showCorrectImage(val);
});

// test('time to test a function', (expect) => {
    
//   const expected = true;
  
 
//   const actual = isOdd(55); // use your function here

  
//   expect.equal(actual, expected);
// });


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
