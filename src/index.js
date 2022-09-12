import './css/styles.css';
import { Planet } from './../src/planet';

function handleMercuryForm(event) {
  event.preventDefault();
  const PersonAge = parseInt(document.getElementById('earth-age').value);
  const mercury = new Planet("Mercury", .24, PersonAge, 80);
  document.getElementById("age").innerText = PersonAge;
  const mAge = mercury.ageConversion();
  document.getElementById("mercury_age").innerText = mAge;
  const yearsPassed = mercury.yearsCalc();
  document.getElementById("yp-calc").innerText = yearsPassed;
  const deathYears = mercury.deathCalc();
  document.getElementById("yl-calc").innerText = deathYears;
  const expectancyM = mercury.lifeConversion();

  let passed = document.getElementById("passed");
  passed.setAttribute("class", "hidden");
  let remaining = document.getElementById("remaining");
  remaining.setAttribute("class", "hidden");

  if (mAge < expectancyM) {
    remaining.removeAttribute("class");
  } else if (mAge > expectancyM) {
    passed.removeAttribute("class");
  }
}

window.addEventListener("load", function () {
  document.getElementById("m").addEventListener("submit", handleMercuryForm);
});

function handleVenusForm(event) {
  event.preventDefault();
  const PersonAge = parseInt(document.getElementById('earth-age2').value);
  const venus = new Planet("Venus", .62, PersonAge, 80);
  document.getElementById("age2").innerText = PersonAge;
  const vAge = venus.ageConversion();
  document.getElementById("venus_age").innerText = vAge;
  const yearsPassed = venus.yearsCalc();
  document.getElementById("v_p-calc").innerText = yearsPassed;
  const deathYears = venus.deathCalc();
  document.getElementById("v_l-calc").innerText = deathYears;
  const expectancyV = venus.lifeConversion();

  let v_passed = document.getElementById("v_passed");
  v_passed.setAttribute("class", "hidden");
  let v_remaining = document.getElementById("v_remaining");
  v_remaining.setAttribute("class", "hidden");

  if (vAge < expectancyV) {
    v_remaining.removeAttribute("class");
  } else if (vAge > expectancyV) {
    v_passed.removeAttribute("class");
  }
}
window.addEventListener("load", function () {
  document.getElementById("v").addEventListener("submit", handleVenusForm);
});


function handleMarsForm(event) {
  event.preventDefault();
  const PersonAge = parseInt(document.getElementById('earth-age3').value);
  const mars = new Planet("Mars", 1.88, PersonAge, 80);
  document.getElementById("age3").innerText = PersonAge;
  const marsAge = mars.ageConversion();
  document.getElementById("mars_age").innerText = marsAge;
  const yearsPassed = mars.yearsCalc();
  document.getElementById("mars_p-calc").innerText = yearsPassed;
  const deathYears = mars.deathCalc();
  document.getElementById("mars_l-calc").innerText = deathYears;
  const expectancyMars = mars.lifeConversion();

  let mars_passed = document.getElementById("mars_passed");
  mars_passed.setAttribute("class", "hidden");
  let mars_remaining = document.getElementById("mars_remaining");
  mars_remaining.setAttribute("class", "hidden");

  if (marsAge < expectancyMars) {
    mars_remaining.removeAttribute("class");
  } else if (marsAge > expectancyMars) {
    mars_passed.removeAttribute("class");
  }
}
window.addEventListener("load", function () {
  document.getElementById("mars").addEventListener("submit", handleMarsForm);
});

function handleJupiterForm(event) {
  event.preventDefault();
  const PersonAge = parseInt(document.getElementById('earth-age4').value);
  const jupiter = new Planet("Jupiter", 11.84, PersonAge, 80);
  document.getElementById("age4").innerText = PersonAge;
  const jAge = jupiter.ageConversion();
  document.getElementById("j_age").innerText = jAge;
  const yearsPassed = jupiter.yearsCalc();
  document.getElementById("j_p-calc").innerText = yearsPassed;
  const deathYears = jupiter.deathCalc();
  document.getElementById("j_l-calc").innerText = deathYears;
  const expectancyJ = jupiter.lifeConversion();

  let j_passed = document.getElementById("j_passed");
  j_passed.setAttribute("class", "hidden");
  let j_remaining = document.getElementById("j_remaining");
  j_remaining.setAttribute("class", "hidden");

  if (jAge < expectancyJ) {
    j_remaining.removeAttribute("class");
  } else if (jAge > expectancyJ) {
    j_passed.removeAttribute("class");
  }
}
window.addEventListener("load", function () {
  document.getElementById("j").addEventListener("submit", handleJupiterForm);
});



