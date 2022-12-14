export interface SettingsDT{
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    language:{
      emptyTable: "No hay datos disponibles.",
      info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
      infoEmpty: "No hay información para mostrar.",
      infoFiltered: "(filtrado _MAX_ elementos total)",
      infoPostFix: "",
      decimal: "Decimal",
      thousands: "Miles",
      lengthMenu: "Mostrar _MENU_ elementos",
      loadingRecords: "Cargando...",
      processing: "Procesando...",
      search: "Buscar:",
      searchPlaceholder: "Ej. Carlos",
      zeroRecords: "No se encontraron registros",
      paginate: {
        first: "Primera",
        last: "Última",
        next: "Siguiente",
        previous: "Anterior"
      },
      aria: {
        sortAscending: "Activar para ordenar la tabla en orden ascendente",
        sortDescending: "Activar para ordenar la tabla en orden descendente",
        paginate: {
          first: "Primera",
          last: "Última",
          next: "Siguiente",
          previous: "Anterior"
        }
      },
      url: "URL",
    }
}
