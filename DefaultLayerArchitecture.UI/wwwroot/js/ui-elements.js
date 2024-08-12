function CreateDateRangePicker(element) {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $(element + ' span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
    cb(start, end);

    return $(element).daterangepicker({
        startDate: start,
        endDate: end,
        timePicker24Hour: true,
        ranges: {
            'Bugün': [moment(), moment()],
            'Dün': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Son 7 Gün': [moment().subtract(6, 'days'), moment()],
            'Son 30 Gün': [moment().subtract(29, 'days'), moment()],
            'Bu Ay': [moment().startOf('month'), moment().endOf('month')],
            'Geçen Ay': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        locale: {
            format: "DD/MM/YYYY",
            separator: " - ",
            applyLabel: "Uygula",
            cancelLabel: "Vazgeç",
            fromLabel: "Dan",
            toLabel: "a",
            customRangeLabel: "Özel",
            daysOfWeek: [
                "Pt",
                "Sl",
                "Çr",
                "Pr",
                "Cm",
                "Ct",
                "Pz"
            ],
            monthNames: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık"
            ],
            firstDay: 1
        }
    }, cb);

}

function CreatePayPieChart(element, payed = 0, unpayed = 0, cutout = "90%", options = { display: true, position: "bottom", padding: 60, align: "end" }) {
    var data = {
        labels: ['Gelir', 'Gider'],
        datasets: [{
            label: 'Fiyat',
            data: [payed, unpayed],
            backgroundColor: [
                'rgba(40, 167, 69)',
                'rgba(255, 99, 132)',
            ]
        }]
    };

    var config = {
        type: 'pie',
        data: data,
        options: {
            cutout,
            plugins: {
                legend: {
                    display: options.display,
                    position: options.position,
                    align: options.align,
                    labels: {
                        usePointStyle: true,
                        padding: options.padding
                    }
                }
            }
        }
    };

    var ctx = document.querySelector(element);
    return new Chart(ctx, config)
}

function CreateAttendancePieChart(element, poll = 0, notPoll = 0, notSpecified = 0, options = { display: false, position: "bottom", padding: 60, align: "end" }) {
    var data = {
        labels: ['Var', 'Yok', 'Belirtilmedi'],
        datasets: [{
            data: [poll, notPoll, notSpecified],
            backgroundColor: [
                'rgba(40, 167, 69)',
                'rgba(255, 99, 132)',
                'rgba(231, 233, 235)',
            ]
        }]
    };

    var config = {
        type: 'pie',
        data: data,
        options: {
            cutout: "60%",
            plugins: {
                legend: {
                    display: options.display,
                    position: options.position,
                    align: options.align,
                    labels: {
                        usePointStyle: true,
                        padding: options.padding
                    }
                }
            }
        }
    };

    var ctx = document.querySelector(element);
    return new Chart(ctx, config)
}