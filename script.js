// Nav Bar Jquery -----------

// $(".top").on("click", function () {
//   $(".top").not("current-destination").removeClass("current-destination");
//   $(this).addClass("current-destination");
// });

// ===================================================================================

// Nav Bar Vanilla Javascript
const clickedButton = document.querySelectorAll(".top");

for (let i = 0; i < clickedButton.length; i++) {
  clickedButton[i].addEventListener("click", function () {
    for (let j = 0; j < clickedButton.length; j++) {
      clickedButton[j].classList.remove("current-destination");
    }
    // $(".top").removeClass("current-destination");
    this.classList.add("current-destination");
  });
}

// position page to the top after refresh ================>
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Add CSS to the navigation bar on scroll event

const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(".navigation-bar ul li a");

window.addEventListener("scroll", function () {
  let scrollAble = Math.ceil(scrollY);
  let eachSectionHeight = screen.height;
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollAble >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((a) => {
    a.classList.remove("current-destination");
    if (a.classList.contains(current)) {
      a.classList.add("current-destination");
    }
  });
});

// Add CSS to the destination =============>

const chosenDestinationNav = document.querySelectorAll(
  ".destination-navigation a"
);
const chosenDestination = document.querySelectorAll(".planet");
const chosenImg = document.querySelector(
  ".destination-description .destination-img"
);
const chosenText = document.querySelector(
  ".destination-description .destination-text"
);

for (let i = 0; i < chosenDestinationNav.length; i++) {
  // Add event listener when clicking on planet names
  chosenDestinationNav[i].addEventListener("click", function () {
    const choice = this.innerHTML;

    for (let j = 0; j < chosenDestinationNav.length; j++) {
      // {Remove the class
      chosenDestinationNav[j].classList.remove("current-destination");
    }
    this.classList.add("current-destination"); // Add it again to the current button}
    // {Add animation to the planet and text
    chosenImg.style.transform = "translateX(-50%)";
    chosenText.style.transform = "translateX(50%)";

    setTimeout(() => {
      chosenImg.style.transform = "translateX(0)";
      chosenImg.style.transition = "transform ease 1.4s";

      chosenText.style.transform = "translateX(0)";
      chosenText.style.transition = "transform ease 1.4s";
    }, 100);
    // {Remove transition when the transition is finished so that when clicked, planets and text don't go smoothly}
    chosenImg.addEventListener("transitionend", () => {
      chosenText.style.transition = "none";
      chosenImg.style.transition = "none";
    });
    // Finish animation}

    // {Change the img source when clicked}
    chosenImg.src = "./assets/destination/image-" + choice + ".png";
    // {change the text source when clicked}
    switch (choice) {
      case "MARS":
        chosenText.innerHTML = `<h2 class="destination-planet">MARS</h2>
        <p class="planet-description">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system.
          It’s two and a half times the size of Everest!
        </p>
        <hr />
        <div class="distance-information">
          <div class="information">
            <p class="information-sub">Avg. distance</p>
            <p class="information-main">225 mil. km</p>
          </div>
          <div class="information">
            <p class="information-sub">Est. travel time</p>
            <p class="information-main">9 months</p>
          </div>
        </div>`;
        break;
      case "EUROPA":
        chosenText.innerHTML = `<h2 class="destination-planet">EUROPA</h2>
        <p class="planet-description">
          The smallest of the four Galilean moons orbiting Jupiter, Europa
          is a winter lover’s dream. With an icy surface, it’s perfect for a
          bit of ice skating, curling, hockey, or simple relaxation in your
          snug wintery cabin.
        </p>
        <hr />
        <div class="distance-information">
          <div class="information">
            <p class="information-sub">Avg. distance</p>
            <p class="information-main">628 mil. km</p>
          </div>
          <div class="information">
            <p class="information-sub">Est. travel time</p>
            <p class="information-main">3 years</p>
          </div>
        </div>`;
        break;
      case "TITAN":
        chosenText.innerHTML = `<h2 class="destination-planet">TITAN</h2>
        <p class="planet-description">
          The only moon known to have a dense atmosphere other than Earth,
          Titan is a home away from home (just a few hundred degrees
          colder!). As a bonus, you get striking views of the Rings of
          Saturn.
        </p>
        <hr />
        <div class="distance-information">
          <div class="information">
            <p class="information-sub">Avg. distance</p>
            <p class="information-main">1.6 bil. km</p>
          </div>
          <div class="information">
            <p class="information-sub">Est. travel time</p>
            <p class="information-main">7 years</p>
          </div>
        </div>`;
        break;
      case "MOON":
        chosenText.innerHTML = `<h2 class="destination-planet">MOON</h2>
        <p class="planet-description">
          See our planet as you’ve never seen it before. A perfect relaxing
          trip away to help regain perspective and come back refreshed.
          While you’re there, take in some history by visiting the Luna 2
          and Apollo 11 landing sites.
        </p>
        <hr />
        <div class="distance-information">
          <div class="information">
            <p class="information-sub">Avg. distance</p>
            <p class="information-main">384,400 km</p>
          </div>
          <div class="information">
            <p class="information-sub">Est. travel time</p>
            <p class="information-main">3 days</p>
          </div>
        </div>`;
        break;
    }
  });
}
// =============================================================================================
// Add CSS to the Crew Section

const chosenDot = document.querySelectorAll(".crew-navigation .dot");
const chosenCrew = document.querySelector(".crew-description");

chosenDot.forEach((dot) => {
  dot.addEventListener("click", () => {
    for (let i = 0; i < chosenDot.length; i++) {
      chosenDot[i].classList.remove("current-dot");
    }
    dot.classList.add("current-dot");
    let arrayFromDot = dot.className.split(" ");
    changeTextAndImg(arrayFromDot);
  });
});
function changeTextAndImg(arrayFromDot) {
  switch (arrayFromDot[1]) {
    case "dot-one":
      chosenCrew.innerHTML = `<div class="crew-text">
      <p class="crew-sub-header">FLIGHT ENGINEER</p>
      <h2 class="crew-header">ANOUSHEH ANSARI</h2>
      <p class="crew-paragraph">
        Anousheh Ansari is an Iranian American engineer and co-founder of
        Prodea Systems. Ansari was the fourth self-funded space tourist,
        the first self-funded woman to fly to the ISS, and the first
        Iranian in space.
      </p>
    </div>
    <img
      src="./assets/crew/image-anousheh-ansari.png"
      alt="Anousheh Ansari photo"
      class="crew-img anou"
    />`;
      break;
    case "dot-two":
      chosenCrew.innerHTML = `<div class="crew-text">
      <p class="crew-sub-header">COMMANDER</p>
      <h2 class="crew-header">DOUGLAS HURLEY</h2>
      <p class="crew-paragraph">
        Douglas Gerald Hurley is an American engineer, former Marine Corps
        pilot and former NASA astronaut. He launched into space for the
        third time as commander of Crew Dragon Demo-2.
      </p>
    </div>
    <img
      src="./assets/crew/image-douglas-hurley.png"
      alt="Anousheh Ansari photo"
      class="crew-img douglas"
    />`;
      break;
    case "dot-three":
      chosenCrew.innerHTML = `<div class="crew-text">
      <p class="crew-sub-header">SPECIALIST</p>
      <h2 class="crew-header">MARK SHUTTLEWORTH</h2>
      <p class="crew-paragraph">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the
        company behind the Linux-based Ubuntu operating system.
        Shuttleworth became the first South African to travel to space as
        a space tourist.
      </p>
    </div>
    <img
      src="./assets/crew/image-mark-shuttleworth.png"
      alt="Anousheh Ansari photo"
      class="crew-img mark"
    />`;
      break;
    case "dot-four":
      chosenCrew.innerHTML = `<div class="crew-text">
      <p class="crew-sub-header">PILOT</p>
      <h2 class="crew-header">VICTOR GLOVER</h2>
      <p class="crew-paragraph">
        Pilot on the first operational flight of the SpaceX Crew Dragon to
        the International Space Station. Glover is a commander in the U.S.
        Navy where he pilots an F/A-18.He was a crew member of Expedition
        64, and served as a station systems flight engineer.
      </p>
    </div>
    <img
      src="./assets/crew/image-victor-glover.png"
      alt="Anousheh Ansari photo"
      class="crew-img victor"
    />`;
      break;
  }
  const crewText = document.querySelector(".crew-text");
  crewText.classList.add("text-animation");
  const crewImg = document.querySelector(".crew-img");
  crewImg.classList.add("img-animation");
}

// Add CSS to the Technology Section

const chosenButton = document.querySelectorAll(".number-navigation .btn");
const chosenTechContent = document.querySelector(".technology-content");

for (let i = 0; i < chosenButton.length; i++) {
  chosenButton[i].addEventListener("click", function () {
    for (j = 0; j < chosenButton.length; j++) {
      chosenButton[j].classList.remove("current-btn");
    }
    this.classList.add("current-btn");
    const numberButton = this.innerHTML;
    techAnimation(numberButton);
  });
}
function techAnimation(numberButton) {
  switch (numberButton) {
    case "1":
      chosenTechContent.innerHTML = `<div class="technology-description">
      <p class="technology-sub-header">THE TERMINOLOGY...</p>
      <h2 class="technology-header">LAUNCH VEHICLE</h2>
      <p class="technology-paragraph">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle
        used to carry a payload from Earth's surface to space, usually to
        Earth orbit or beyond. Our WEB-X carrier rocket is the most
        powerful in operation. Standing 150 metres tall, it's quite an
        awe-inspiring sight on the launch pad!
      </p>
    </div>
    <img
      src="./assets/technology/image-launch-vehicle-portrait.jpg"
      alt="launch vehicle photo"
      class="technology-img vehicle"
    />`;
      break;
    case "2":
      chosenTechContent.innerHTML = `<div class="technology-description">
      <p class="technology-sub-header">THE TERMINOLOGY...</p>
      <h2 class="technology-header">SPACEPORT</h2>
      <p class="technology-paragraph">
        A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for
        aircraft. Based in the famous Cape Canaveral, our spaceport is
        ideally situated to take advantage of the Earth’s rotation for
        launch.
      </p>
    </div>
    <img
      src="./assets/technology/image-spaceport-portrait.jpg"
      alt="spaceport photo"
      class="technology-img spaceport"
    />`;
      break;
    case "3":
      chosenTechContent.innerHTML = `<div class="technology-description">
      <p class="technology-sub-header">THE TERMINOLOGY...</p>
      <h2 class="technology-header">SPACE CAPSULE</h2>
      <p class="technology-paragraph">
        A space capsule is an often-crewed spacecraft that uses a
        blunt-body reentry capsule to reenter the Earth's atmosphere
        without wings. Our capsule is where you'll spend your time during
        the flight. It includes a space gym, cinema, and plenty of other
        activities to keep you entertained.
      </p>
    </div>
    <img
      src="./assets/technology/image-space-capsule-portrait.jpg"
      alt="capsule photo"
      class="technology-img capsule"
    />`;
      break;
  }
  const chosenTechImg = document.querySelector(".technology-img");
  chosenTechImg.classList.add("img-animation");
  const chosenTechText = document.querySelector(".technology-description");
  chosenTechText.classList.add("text-animation");
}

// Menu button for mobile design =================================
const menuButton = document.querySelector(".menu-btn");
const navButton = document.querySelectorAll(".btn-style");
const navBar = document.querySelector(".navigation-bar");

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("navigation-animation");
  navButton.forEach((item) => {
    item.dataset.open = item.dataset.open === "true" ? "false" : "true";
  });
});
