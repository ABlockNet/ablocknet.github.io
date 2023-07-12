document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.getElementsByClassName('nav-link');
  var animation = document.getElementsByClassName('animation')[0];
  var activeIndex = Array.from(navLinks).findIndex(link => link.classList.contains('active'));

  function setActiveAnimation() {
    var activeLink = navLinks[activeIndex];
    animation.style.width = activeLink.offsetWidth + 'px';
    animation.style.left = activeLink.offsetLeft + 'px';
    animation.classList.add('active');
  }

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var clickedIndex = Array.from(navLinks).indexOf(this);
      activeIndex = clickedIndex;
      setActiveAnimation();
      window.location.href = this.href;
    });

    navLinks[i].addEventListener('mouseover', function() {
      var index = Array.from(navLinks).indexOf(this);
      animation.style.width = this.offsetWidth + 'px';
      animation.style.left = this.offsetLeft + 'px';
      animation.classList.add('active');
    });

    navLinks[i].addEventListener('mouseout', function() {
      animation.classList.remove('active');
    });
  }

  setActiveAnimation();
});
