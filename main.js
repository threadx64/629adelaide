function goHome(event) {
  scrollIntoView(document.getElementById("home"));
}

function goToConcerns(event) {
  scrollIntoView(document.getElementById("concerns"));
}

function goToHelp(event) {
  scrollIntoView(document.getElementById("help"));
}

function goToQA(event) {
  scrollIntoView(document.getElementById("qa"));
}

function scrollIntoView(element) {
  const navbarHeight = 50; // from CSS
  const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  window.scrollTo({top: y, behavior: 'smooth'});
}