const hrparallax = (distance, speed) => {
  const motorbike = document.getElementById('motorbike')
  motorbike.style.transform = "translateX("+ -distance*speed + "px)";
}

document.addEventListener('scroll', function() {
  hrparallax(window.scrollY, -0.6);
});
