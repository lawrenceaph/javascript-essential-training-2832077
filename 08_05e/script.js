/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    (() => {
      console.log("this.volume in arrow function:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));


const mech1 = {

  name: "ubermech",
  color: "gray",
  guns: 50,
  lasers: 10,
  powerlevel: 100,
  newpowerlevel: function (newpowerlevel) {
     this.powerlevel = newpowerlevel;
     return(console.log("the new mech power level is:", this.powerlevel));
  } 
};

console.log("Mech1 Power Level:", mech1.powerlevel);
const mechdatasheet = document.getElementById("mechdata");
const imagis = document.getElementById("imageo");

function showMechProperties () {
mechdatasheet.innerHTML=
  `
  <p class="container has-text-centered">Mech Properties:</p>

  <p class="has-text-centered">Super color : ${mech1.color}

  </p>
  `;
  mechdatasheet.style.display = 'block'
  imagis.style.display = 'block'
};

function hideMechProperties () {
mechdatasheet.style.display = 'none';
imagis.style.display = 'none';
}

const button1 = document.getElementById("uberbutton");
const button2 = document.getElementById("uberbutton2");
button1.addEventListener('click', () => {
  showMechProperties()
  button1.style.display = 'none'
  button2.style.display = 'flex'
  

});

button2.addEventListener('click', () => {
  hideMechProperties()
  button2.style.display = 'none'
  button1.style.display = 'flex'
})