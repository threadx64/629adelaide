function goHome(event) {
  scrollIntoView(document.getElementById("home"));
}

function goToNews(event) {
  scrollIntoView(document.getElementById("news"));
}

function goToHelp(event) {
  scrollIntoView(document.getElementById("help"));
}

function goToContact(event) {
  // #contact has margin-top: 0
  scrollIntoView(document.getElementById("contact"), -50);
}

function goToQA(event) {
  scrollIntoView(document.getElementById("qa"));
}

function scrollIntoView(element, deltaY = 0) {
  const navbarHeight = 80; // from CSS
  const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight + deltaY;
  window.scrollTo({top: y, behavior: 'smooth'});
}