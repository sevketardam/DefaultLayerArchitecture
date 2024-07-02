function CreateDataTable(element) {
    let table = $(element).DataTable({
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.13.2/i18n/tr.json",
            lengthMenu: "_MENU_",
            search: "",
        },
        ordering: false,
        bDestroy: true,
        autoWidth: false,
        initComplete: function (settings, json) {
            $('.dt-layout-row select.dt-input').addClass('custom-select');
            $('.dt-layout-row input.dt-input').addClass('custom-input');
            $('.dt-search input.dt-input').attr('placeholder', 'Ara');

        }
    })

    return table;
}

