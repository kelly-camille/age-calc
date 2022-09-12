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

  let passed = document.getElementById("passed2");
  passed.setAttribute("class", "hidden");
  let remaining = document.getElementById("remaining2");
  remaining.setAttribute("class", "hidden");

  if (vAge < expectancyV) {
    remaining.removeAttribute("class");
  } else if (vAge > expectancyV) {
    passed.removeAttribute("class");
  }
}
window.addEventListener("load", function () {
  document.querySelector("form-v").addEventListener("submit", handleVenusForm);
});