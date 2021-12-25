$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
var stats = "#stats";
$(window).on('resize scroll', function() {
  if ($(stats).isInViewport()) {
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    const obj = document.getElementById('value');
    animateValue(obj, 124567, 244982, 2000);
    const obj1 = document.getElementById('value1');
    animateValue(obj1, 1234567, 2488938, 2000);
    const obj2 = document.getElementById('value2');
    animateValue(obj2, 1234, 1335, 2000);
    stats = "abcd";
  }
});
var target = document.querySelectorAll(".feature-content");
var icon = document.querySelectorAll(".fas");
target[0].addEventListener("mouseenter", function() {
  document.querySelector(".icon-1").classList.add("abc");
});
target[0].addEventListener("mouseleave", function() {
  document.querySelector(".icon-1").classList.remove("abc");
});
target[1].addEventListener("mouseenter", function() {
  document.querySelector(".icon-2").classList.add("abc");
});
target[1].addEventListener("mouseleave", function() {
  document.querySelector(".icon-2").classList.remove("abc");
});
target[2].addEventListener("mouseenter", function() {
  document.querySelector(".icon-3").classList.add("abc");
});
target[2].addEventListener("mouseleave", function() {
  document.querySelector(".icon-3").classList.remove("abc");
});
target[3].addEventListener("mouseenter", function() {
  document.querySelector(".icon-4").classList.add("abc");
});
target[3].addEventListener("mouseleave", function() {
  document.querySelector(".icon-4").classList.remove("abc");
});
target[4].addEventListener("mouseenter", function() {
  document.querySelector(".icon-5").classList.add("abc");
});
target[4].addEventListener("mouseleave", function() {
  document.querySelector(".icon-5").classList.remove("abc");
});
target[5].addEventListener("mouseenter", function() {
  document.querySelector(".icon-6").classList.add("abc");
});
target[5].addEventListener("mouseleave", function() {
  document.querySelector(".icon-6").classList.remove("abc");
});
