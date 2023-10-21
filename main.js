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
  scrollIntoView(document.getElementById("contact"));
}

function goToQA(event) {
  scrollIntoView(document.getElementById("qa"));
}

function scrollIntoView(element) {
  const navbarHeight = 80; // from CSS
  const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  window.scrollTo({top: y, behavior: 'smooth'});
}