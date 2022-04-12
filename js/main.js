$(document).ready(function () {
  $('.btnIngresar').on('click', function (e) {
    e.preventDefault();
  })
  $('.btnNavbarBuscar').on('click', function (e) {
    e.preventDefault();
    var aBuscar = $('#navbarBuscar')[0].value
    console.log(aBuscar)
  })
})