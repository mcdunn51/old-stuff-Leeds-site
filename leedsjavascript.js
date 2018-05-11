var shiftWindow = function() {
  window.setTimeout(function() {
    scrollBy(0, -55);
  }, 0)
};
if (location.hash) shiftWindow();
document.querySelectorAll('.dropdown-link').forEach(function(link) {
  link.addEventListener("click", shiftWindow);
});