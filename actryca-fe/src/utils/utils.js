export const handleScroll = (e, href) => {
  e.preventDefault();
  const targetElement = document.getElementById(href.replace("#", ""));
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      if (window.history.pushState) {
        window.history.pushState(null, null, window.location.pathname);
      } else {
        window.location.hash = "";
      }
    }, 500);
  }
};
