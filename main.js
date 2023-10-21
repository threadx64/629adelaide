class App {
  static scrollTo(elementName, deltaY = 0) {
    const navbarHeight = 80; // from CSS
    const element = document.getElementById(elementName);
    const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight + deltaY;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}