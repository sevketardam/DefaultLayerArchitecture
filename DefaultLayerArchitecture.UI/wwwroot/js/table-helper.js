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

function CreateDataTable(element, addButton = { text, modalId, id }, hasPaging = true, hasOrdering = true) {
    return $(element).DataTable({
        language: {
            lengthMenu: "_MENU_",
            search: "",
            emptyTable: "Tabloda herhangi bir veri mevcut değil",
            zeroRecords: "Tabloda herhangi bir veri bulunamadı",
            paginate: {
                first: "İlk",
                last: "Son",
                next: "Sonraki",
                previous: "Önceki"
            },
        },
        lengthMenu: [[50, 100, 200, 300, 500, -1], [50, 100, 200, 300, 500, "Hepsi"]],
        order: [[0, "desc"]],
        ordering: hasOrdering,
        bDestroy: true,
        autoWidth: false,
        paging: hasPaging,
        info: false,
        initComplete: function (settings, json) {
            $('.dataTables_length select').addClass('form-select');
            if (addButton) {
                if (addButton.id) {
                    $(element).closest(".dataTables_wrapper").find('.dataTables_filter input').closest(".dataTables_filter").append(`<button class="btn btn-success" id='${addButton.id}'>${addButton.text}</button>`)
                } else if (addButton.modalId) {
                    $(element).closest(".dataTables_wrapper").find('.dataTables_filter input').closest(".dataTables_filter").append(`<button class="btn btn-success" data-bs-toggle="modal" data-bs-target="${addButton.modalId}">${addButton.text}</button>`)
                }
            }
            $('.dataTables_filter input').addClass('form-control');
            $('.dataTables_filter input').attr('placeholder', 'Ara');

        }
    });
}


function removeDataTableRow(rowId, anotherTable) {
    var rowIndex = getRowIndexByDataId(rowId, anotherTable)
    if (anotherTable) {
        anotherTable.row(rowIndex).remove().draw(false);
    } else {

        table.row(rowIndex).remove().draw(false);
    }
}

function addDataTableRow(data, dataId, anotherTable) {
    if (anotherTable) {
        var rowNode = anotherTable.row
            .add(data)
            .draw()
            .node();
    } else {
        var rowNode = table.row
            .add(data)
            .draw()
            .node();
    }

    table.order([0, 'asc']).draw();

    $(rowNode).attr('data-id', dataId);

    return rowNode;
}

let globalDataId;

function updateDataTableRow(data, dataId, anotherTable) {
    if (dataId) {

        var rowIndex = getRowIndexByDataId(dataId, anotherTable)
    } else {
        var rowIndex = getRowIndexByDataId(globalDataId, anotherTable)
    }



    if (anotherTable) {

        var rowNode = anotherTable.row(rowIndex)
            .data(data)
            .draw()
            .node();
    } else {

        var rowNode = table.row(rowIndex)
            .data(data)
            .draw()
            .node();

        table.draw()
    }
    return rowNode;
}

function getRowIndexByDataId(dataId, anotherTable) {
    var rowIndex = -1;
    if (anotherTable) {
        anotherTable.rows().every(function (index) {
            if ($(this.node()).attr('data-id') == dataId) {
                rowIndex = index;
                return false;
            }
        });
    } else {
        table.rows().every(function (index) {
            if ($(this.node()).attr('data-id') == dataId) {
                rowIndex = index;
                return false;
            }
        });
    }


    return rowIndex;
}