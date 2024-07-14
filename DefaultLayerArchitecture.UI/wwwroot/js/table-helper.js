const TableToast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

let table;

function CreateDataTable(element, addButton = {text:"",modalId:""}) {
    let table = $(element).DataTable({
        language: {
            //"url": "//cdn.datatables.net/plug-ins/1.13.2/i18n/tr.json",
            lengthMenu: "_MENU_",
            search: "",
            emptyTable: "Tabloda herhangi bir veri mevcut değil",
            paginate: {
                first: "İlk",
                last: "Son",
                next: "Sonraki",
                previous: "Önceki"
            },
        },
        bDestroy: true,
        autoWidth: false,
        info: false,
        initComplete: function (settings, json) {
            $('.dataTables_length select').addClass('form-select');
            if (addButton) {
                $('.dataTables_filter input').closest(".dataTables_filter").append(`<button class="btn btn-success" data-bs-toggle="modal" data-bs-target="${addButton.modalId}">${addButton.text}</button>`)
            }
            $('.dataTables_filter input').addClass('form-control');
            $('.dataTables_filter input').attr('placeholder', 'Ara');

        }
    })

    return table;
}


function removeDataTableRow(rowId) {
    var rowIndex = getRowIndexByDataId(rowId)
    table.row(rowIndex).remove().draw(false);
}

function addDataTableRow(data, dataId) {
    var rowNode = table.row
        .add(data)
        .draw()
        .node();

    $(rowNode).attr('data-id', dataId);

    return rowNode;
}

let globalDataId;

function updateDataTableRow(data) {

    var rowIndex = getRowIndexByDataId(globalDataId)

    var rowNode = table.row(rowIndex)
        .data(data)
        .draw()
        .node();

    return rowNode;
}

function getRowIndexByDataId(dataId) {
    var rowIndex = -1;

    table.rows().every(function (index) {
        var rowData = this.data();
        if ($(this.node()).attr('data-id') == dataId) {
            rowIndex = index;
            return false;
        }
    });

    return rowIndex;
}