export class _TableUtils {

    public static renderSearchDT(dtElement:any, dtTrigger:any): void {
      dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        dtTrigger.next();  
        
        //_TableUtils.searchInputDT(dtElement);
      });
      
    }
  
    public static renderDT(dtElement:any, dtTrigger:any): void {
      dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        dtTrigger.next();  
      });
    }
  
    /*public static searchInputDT(dtElement){
      dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('input', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
      });
    }*/
  
    public static searchSelectDT(dtElement:any,numberColumns:any,value:any){
      dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns(numberColumns).every(function () {
          const that = this;
          that
          .search(value ? '^' + value + '$' : '', true, false)
          .draw();
        });
      });
    }
  
    public static getLabelVacio(data:any,type:any){
  
      if(type =="display" && (data == null || data == undefined) )
        return '<div class="text-center"><span class="text-center badge badge-secondary">vacio</span></div>'
      if(type =="display" && data == "")
        return '<div class="text-center"><span class="text-center badge badge-secondary">vacio</span></div>'
      else
        return data;
    }
  
    public static getDefaultConfigurationSinBoton() {
      return {
        rowCallback: function () { },
        columns: [],
        columnDefs: [],
        destroy: true,
        searching: false,
        deferRender: true,
        aLengthMenu: [
          [5, 10, 50, 100, -1],
          ["5 filas", "10 filas", "50 filas", "100 filas", "Todos"]
        ],
        order: [[1, "asc"]],
        fixedHeader: true,
        colReorder: {
          enable: false,
          fixedColumnsLeft: 1
        },
        dom: 'frti',
        autoWidth: false,
        buttons: [
          {
            extend: "pageLength",
            text: "<i class='fa fa-list-ol' style='font-size:1.35em;'></i>",
            titleAttr: "Registros por página",
          },
          {
            extend: "colvis",
            text: "<i class='fa fa-columns ' style='font-size:1.35em;'></i>",
            titleAttr: "Columnas",
          },
          {
            titleAttr: "Habilitar ajustes columnas",
            text: "<i class='fa fa-align-left' style='font-size:1.35em;'></i>",
            action: function (e:any, dt:any, node:any, config:any) {
              dt.colReorder.enable(true);
            }
          },
          {
            titleAttr: "Deshabilitar ajustes columnas",
            text: "<i class='fa fa-align-justify' style='font-size:1.35em;'></i>",
            action: function (e:any, dt:any, node:any, config:any) {
              dt.colReorder.disable();
            }
          },
          {
            extend: "copyHtml5",
            text: "<i class='fa fa-copy' style='font-size:1.35em;'></i>",
            titleAttr: "Copiar contenido",
            exportOptions: {
              //columns: ':visible',
              orthogonal: 'export'
            }
          },
          {
            extend: "csvHtml5",
            text: "<i class='fa fa-file' style='font-size:1.35em;'></i>",
            titleAttr: "Descargar CSV",
            exportOptions: {
              //columns: ':visible',
              charset: 'ISO-8859-1',
              orthogonal: 'export',
              dom: true
            }
          },
          {
            extend: "excelHtml5",
            text: "<i class='fa fa-file-excel-o' style='font-size:1.35em;'></i>",
            titleAttr: "Descargar Excel",
            exportOptions: {
              //columns: ':visible',
              orthogonal: 'export'
            }
          },
          {
            extend: "pdfHtml5",
            text: "<i class='fa fa-file-pdf-o' style='font-size:1.35em;'></i>",
            titleAttr: "Descargar PDF",
            exportOptions: {
              columns: ':visible',
              orthogonal: 'export'
            },
            orientation: 'landscape'
          },
          {
            extend: "print",
            text: "<i class='fa fa-print' style='font-size:1.35em;'></i>",
            titleAttr: "Imprimir",
            className: "btn btn-secondary",
            exportOptions: {
              columns: ':visible',
              orthogonal: 'export'
            },
            customize: function (win:any) {
  
              var last = null;
              var current = null;
              var bod = [];
  
              var css = '@page { size: landscape; }',
                head = win.document.head || win.document.getElementsByTagName('head')[0],
                style = win.document.createElement('style');
  
              style.type = 'text/css';
              style.media = 'print';
  
              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              }
              else {
                style.appendChild(win.document.createTextNode(css));
              }
  
              head.appendChild(style);
            }
          }],
        processing: true,
        responsive: true,
        // responsive: {
        //   details: {
        //       type: 'column',
        //       target: 'td:nth-child(2), th:nth-child(2)'
        //   }
        // },
        language: {
          processing: "Procesando...",
          search: "",
          searchPlaceholder: "Buscar",
          lengthMenu: "Mostrar _MENU_ registros",
          info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
          infoEmpty: "Mostrando ningún elemento.",
          infoFiltered: "(filtrado _MAX_ elementos total)",
          infoPostFix: "",
          loadingRecords: "Cargando registros...",
          zeroRecords: "No se encontraron registros",
          emptyTable: "No hay datos disponibles en la tabla",
          paginate: {
            first: "Primero",
            previous: "Anterior",
            next: "Siguiente",
            last: "Último"
          },
        },
      }
    }
  
    public static getDefaultConfiguration() {
      return {
        rowCallback: function () { },
        withOption: function () { },
        data: [],
        columns: [],
        columnDefs: [],
        destroy: true,
        searching: true,
        deferRender: true,
        orderCellsTop: true,
        fixedHeader: true,
        initComplete: function () { },
        aLengthMenu: [
          [5, 10, 50, 100, -1],
          ["5 filas", "10 filas", "50 filas", "100 filas", "Todos"]
        ],
        order: [[1, "asc"]],
        colReorder: {
          enable: false,
          fixedColumnsLeft: 1
        },
        dom: 'Bfrtip',
        autoWidth: false,
        buttons: [
          {
            extend: "pageLength",
            text: "<i class='fa fa-list-ol' style='font-size:1.35em;'></i>",
            titleAttr: "Registros por página",
          },
          {
            extend: "colvis",
            text: "<i class='fa fa-columns ' style='font-size:1.35em;'></i>",
            titleAttr: "Columnas",
          },
          {
            titleAttr: "Habilitar ajustes columnas",
            text: "<i class='fa fa-align-left' style='font-size:1.35em;'></i>",
            action: function (e:any, dt:any, node:any, config:any) {
              dt.colReorder.enable(true);
            }
          },
          {
            titleAttr: "Deshabilitar ajustes columnas",
            text: "<i class='fa fa-align-justify' style='font-size:1.35em;'></i>",
            action: function (e:any, dt:any, node:any, config:any) {
              dt.colReorder.disable();
            }
          },
          {
            extend: "copyHtml5",
            text: "<i class='fa fa-copy' style='font-size:1.35em;'></i>",
            titleAttr: "Copiar contenido",
            exportOptions: {
              //columns: ':visible',
              orthogonal: 'export'
            }
          },
          {
            extend: "csvHtml5",
            text: "<i class='fa fa-file' style='font-size:1.35em;'></i>",
            titleAttr: "Descargar CSV",
            exportOptions: {
              //columns: ':visible',
              charset: 'ISO-8859-1',
              orthogonal: 'export',
              dom: true
            }
          },
          {
            extend: "excelHtml5",
            text: "<i class='fa fa-file-excel-o' style='font-size:1.35em;'></i>",
            titleAttr: "Descargar Excel",
            exportOptions: {
              //columns: ':visible',
              orthogonal: 'export'
            }
          },
          {
            extend: "pdfHtml5",
            text: "<i class='fa fa-file-pdf-o' style='font-size:1.35em;'></i>",
            titleAttr: "Descargar PDF",
            exportOptions: {
              columns: ':visible',
              orthogonal: 'export'
            },
            orientation: 'landscape'
          },
          {
            extend: "print",
            text: "<i class='fa fa-print' style='font-size:1.35em;'></i>",
            titleAttr: "Imprimir",
            className: "btn btn-secondary",
            exportOptions: {
              columns: ':visible',
              orthogonal: 'export'
            },
            customize: function (win:any) {
  
              var last = null;
              var current = null;
              var bod = [];
  
              var css = '@page { size: landscape; }',
                head = win.document.head || win.document.getElementsByTagName('head')[0],
                style = win.document.createElement('style');
  
              style.type = 'text/css';
              style.media = 'print';
  
              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              }
              else {
                style.appendChild(win.document.createTextNode(css));
              }
  
              head.appendChild(style);
            }
          },
          {
            text: "<i class='fa fa-refresh ' style='font-size:1.35em;'></i>",
            titleAttr: "Recargar",
            action: function () { }
          }
        ],
        processing: true,
        responsive: true,
        // responsive: {
        //   details: {
        //       type: 'column',
        //       target: 'td:nth-child(2), th:nth-child(2)'
        //   }
        // },
        language: {
          processing: "Procesando...",
          search: "",
          searchPlaceholder: "Buscar",
          lengthMenu: "Mostrar _MENU_ registros",
          info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
          infoEmpty: "Mostrando ningún elemento.",
          infoFiltered: "(filtrado _MAX_ elementos total)",
          infoPostFix: "",
          loadingRecords: "Cargando registros...",
          zeroRecords: "No se encontraron registros",
          emptyTable: "No hay datos disponibles en la tabla",
          paginate: {
            first: "Primero",
            previous: "Anterior",
            next: "Siguiente",
            last: "Último"
          },
        },
      }
    }
  
  }
  