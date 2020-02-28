(()=>{

  //variable stack here - > the elements you want to
  // interac with

let sigilButtons = document.querySelectorAll(".sigilContainer"),
    lightbox = document.querySelector(".lightbox"),
    closeButton = lightbox.querySelector(".close-button"),
    video = lightbox.querySelector(".stopVideo");

// functions go in the middle -> what do we want our app to do?

function showLightBox()
{
  //show light box on a click;
  // debugger;
  lightbox.classList.add("show-lightbox");
  //Video play
  video.play();

}

function hideLightBox()
{
  lightbox.classList.remove("show-lightbox");
  // stop and rewind the lightbox video on close operation
  video.pause();
  video.currentTime = 0;
}

// event hadling for our siginButtons

sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

// add some event handling for the lightbox close button
closeButton.addEventListener("click", hideLightBox);

})();
