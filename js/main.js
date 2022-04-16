$(document).ready(function () {
  $('.btnIngresar').on('click', function (e) {
    e.preventDefault();
  })
  $('.btnNavbarBuscar').on('click', function (e) {
    e.preventDefault();
    var aBuscar = $('#navbarBuscar')[0].value
    console.log(aBuscar)
  })

  // Parametros lenguaje tablas
  let parametrosLanguageDataTable = {
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
  }

  // Parametros logica tabla precios
  let parametrosLogicDataTablePrice = {
    "scrollY": "412px",
    "paging": true,
    "responsive": true
  }

  // Parametros logica tabla categoria
  let parametrosLogicDataTableCategory = {
    "scrollY": "277px",
    "paging": true,
    "responsive": true
  }

  // Paginación tabla de precios
  var tablePrice = $("#priceTable").DataTable({ language: parametrosLanguageDataTable, parametrosLogicDataTablePrice });

  // Paginación tabla de categorias
  var tableCategory = $("#categoryTable").DataTable({ language: parametrosLanguageDataTable, parametrosLogicDataTableCategory });

  let path = window.location.pathname;

  // Mostrar y ocultar columnas
  $('a.toggle-vis').on('click', function (e) {
    e.preventDefault();

    let dataColumn = function (table) {
      // Get the column API object
      let column = table.column($(this).attr('data-column'));

      // Toggle the visibility
      column.visible(!column.visible());
    }

    if (path == '/admin_app/categorias.html') {
      dataColumn(tableCategory)

    } else if (path == '/admin_app/index.html') {
      dataColumn(tablePrice)
    }
  });

  // Delete btn in categorias.html
  $('#eliminar').on('click', function (e) {
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'btn btn-danger',
        confirmButton: 'btn btn-success'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Seguro que desea eliminar este registro?',
      text: "Esta acción no se podrá deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'Recuerda que este proyecto se especiliza en el aprendizaje de Bootstrap 5, por tanto, este registro no se elimnará. Para aparecer se hace necesario una llamada ajax',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Registro no eliminado',
          'error'
        )
      }
    })
  })

  // Save modal btn in categorias.html
  $('#saveModal').on('click', function (e) {
    e.preventDefault();
    Swal.fire(
      'Guardado',
      'Recuerda que este proyecto se especiliza en el aprendizaje de Bootstrap 5, por tanto, este registro no aparecerá. Para aparecer se hace necesario una llamada ajax',
      'success'
    )
  })

  // Cancel modal btn in categorias.html
  $('#cancelModal').on('click', function (e) {
    e.preventDefault();
    Swal.fire(
      'Cancelado',
      'Categoría no añadida',
      'error'
    )
  })
})