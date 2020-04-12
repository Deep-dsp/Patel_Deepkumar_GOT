(()=>{

  //variable stack here - > the elements you want to
  // interac with

let sigilButtons = document.querySelectorAll(".sigilContainer"),
    lightbox = document.querySelector(".lightbox"),
    closeButton = lightbox.querySelector(".close-button"),
    video = lightbox.querySelector(".stopVideo"),
    currentHouseName = document.querySelector("h1"),
    houseDescription = document.querySelector(".house-info"),
    imageContainer = document.querySelector("#houseImages");

let houseName = '', newSource = '';

const houseData = [

    ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

    ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.`],

    ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

    ["Greyjoy",`House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. `]
  ];

function animateBanners()
{
  // clicking on the shield should trigger an animation
  // figure out how far the banners should move with some simple math
  let offsetWidth = 600;
  let multiplier = this.dataset.offset;
  let newPosition = offsetWidth * multiplier;

//  debugger;
// change the style.left property to match the new position - where it needs to move to
  imageContainer.style.right = `${newPosition}px`;

  houseName = this.className.split(" ")[1];
  newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);
}

function changeText()
{
  currentHouseName.textContent = `House ${houseData[this.dataset.offset][0]}`;
  houseDescription.textContent = `${houseData[this.dataset.offset][1]}`;
}
// sigilButtons.forEach(button => button.addEventListener("click", changeText));

// Adding dynamic content after completing transitions
imageContainer.addEventListener("transitionend", changeText);

sigilButtons.forEach(button => button.addEventListener("click", animateBanners));
//
//  add some event handling for the lightbox close button
// closeButton.addEventListener("click", hideLightBox);

})();
