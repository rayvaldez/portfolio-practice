const hrparallax = (image, distance, speed) => {
  const item = document.getElementById(image)
  item.style.transform = "translateX("+ -distance*speed + "px)";
}

const vrparallax = (distance, speed) => {
  const developer = document.getElementById('developer')
  developer.style.transform = "translateY("+ -distance*speed + "px)";
}

document.addEventListener('scroll', function() {
  hrparallax('motorbike', window.scrollY, 2.3);
  hrparallax('camera', window.scrollY, -0.5);
  vrparallax(window.scrollY, 0.2)
});
