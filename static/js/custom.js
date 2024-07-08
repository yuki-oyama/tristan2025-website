document.addEventListener('DOMContentLoaded', function () {
  var dropdownItems = document.querySelectorAll('.nav-item.dropdown');
  dropdownItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      item.querySelector('.dropdown-menu').style.display = 'block';
    });
    item.addEventListener('mouseleave', function () {
      item.querySelector('.dropdown-menu').style.display = 'none';
    });
  });
});
