$(document).ready(function () {
  $('.btnIngresar').on('click', function (e) {
    e.preventDefault();
  })
  $('.btnNavbarBuscar').on('click', function (e) {
    e.preventDefault();
    var aBuscar = $('#navbarBuscar')[0].value
    console.log(aBuscar)
  })

  // Paginación tabla de precios
  var table = $("#priceTable").DataTable({
    language: {
      paginate: {
        next: "Siguiente",
        previous: "Anterior",
        last: "Último",
        first: "Primero"
      },
      info: "Mostrando _START_ a _END_ de _TOTAL_ de resultados",
      emptyTable: "No hay registros",
      infoEmpty: "0 registros",
      search: "Buscar"
    },
    "scrollY": "412px",
    "paging": true,
    "responsive": true
  });

  // Mostrar y ocultar columnas
  $('a.toggle-vis').on('click', function (e) {
    e.preventDefault();

    // Get the column API object
    var column = table.column($(this).attr('data-column'));

    // Toggle the visibility
    column.visible(!column.visible());
  });

})