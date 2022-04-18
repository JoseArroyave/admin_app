$(document).ready(function () {
  var redirigir = function () {
    Swal.fire(
      'Muchas gracias!',
      'En un momento serás redirigido',
      'success'
    )
    setTimeout(function () {
      window.location.href = '/index.html'
    }, 2000)
  }

  $('.btnIngresar').on('click', function (e) {
    e.preventDefault();
    var emailIngreso = $('#emailIngreso')[0].value
    console.log(emailIngreso)
    var passwordIngreso = $('#passwordIngreso')[0].value
    console.log(passwordIngreso)
    if (emailIngreso == '' || passwordIngreso == '') {
      Swal.fire(
        'Error!',
        'No puedes enviar campos vacíos',
        'error'
      )
    } else {
      redirigir()
    }
  })

  $('.btnIngresarInvitado').on('click', function (e) {
    e.preventDefault();
    redirigir()
  })

  $('.btnNavbarBuscar').on('click', function (e) {
    e.preventDefault();
    var aBuscar = $('#navbarBuscar')[0].value
    console.log(aBuscar)
  })

  var path = window.location.pathname

  // Paginación 
  if (path == '/admin_app/index.html') {
    var tableId = '#priceTable'
  } else if (path == '/admin_app/') {
    var tableId = '#priceTable'
  } else if (path == '/admin_app/categorias.html') {
    var tableId = "#categoryTable"
  } else if (path == '/admin_app/inventario.html') {
    var tableId = "#lastProductsTable"
  }

  // Paginacion según table id
  var table = $(tableId).DataTable({
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
    "paging": true,
    "responsive": true
  })

  // Mostrar y ocultar columnas
  $('a.toggle-vis').on('click', function (e) {
    e.preventDefault();

    // Get the column API object
    let column = table.column($(this).attr('data-column'));

    // Toggle the visibility
    column.visible(!column.visible());
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