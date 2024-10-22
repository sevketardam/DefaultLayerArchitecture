var buttonOldContent;

function formButtonLoader(button) {
    var button = $(button)
    buttonOldContent = button.html();
    button.attr("disabled", true);
    button.addClass("buttonload");
    button.html(`<div class="spinner-border"></div> Yükleniyor`);
}

function formButtonLoaderReturn(button) {
    var button = $(button)
    button.attr("disabled", false);
    button.removeClass("buttonload");
    button.html(buttonOldContent);
}

var buttonOldContent2;

function formButtonLoaderSpecial(button, text = "") {
    if ($(".buttonload").length == 0) {

        text != "" ? "&nbsp;" + text : ""
        var button = $(button)
        buttonOldContent2 = button.html();
        button.attr("disabled", true);
        button.addClass("buttonload");
        button.html(`<div class="spinner-border"></div>  ${text}`);
        $(button).closest(".modal").find(".btn-close").attr("disabled", true)
        return true;
    } else {
        $(button).addClass("error-icon")
        setTimeout(function () {
            $(button).removeClass("error-icon")
        }, 600)
        return false;
    }
}

function formButtonLoaderSpecialReturn(button) {
    var button = $(button)
    button.attr("disabled", false);
    button.removeClass("buttonload");
    button.html(buttonOldContent2);
    $(button).closest(".modal").find(".btn-close").attr("disabled", false)
}

let iconOldContent;

function TableIconLoader(icon, text = "") {
    if ($(".iconload").length == 0) {

        var icon = $(icon)
        iconOldContent = icon.html();
        icon.addClass("iconload");
        icon.html(`<div class="spinner-border"></div>&nbsp;${text}`);
        return true;
    } else {
        $(icon).addClass("error-icon")
        setTimeout(function () {
            $(icon).removeClass("error-icon")
        }, 600)
        return false;
    }
}

function TableIconLoaderReturn(icon) {
    var icon = $(icon)
    icon.removeClass("iconload");
    icon.html(iconOldContent);
}


let formSubmitOldContent;
let formSubmitForm;

function FormSubmitLoader(submitBtn, form, loadText = "") {
    if ($(".submitted-form").length == 0) {
        loadText != "" ? "&nbsp;" + loadText : ""

        $(form).find("[disabled]").addClass("not-return")

        var button = $(submitBtn)

        formSubmitOldContent = button.html();

        button.closest("div").find("button").attr("disabled", true)
        button.attr("disabled", true);
        button.addClass("button-load");
        button.html(`<div class="spinner-border"></div> ${loadText}`);
        $(form).addClass("submitted-form")
        $(form).find("input, textarea, select, button").attr("disabled", true)
        $(form).closest(".modal").find(".btn-close").attr("disabled", true)

        return true;
    } else {
        return false;
    }
}

function FormSubmitLoaderReturn(submitBtn, form) {
    $(form).find("input:not(.not-return), textarea:not(.not-return), select:not(.not-return), button:not(.not-return)").attr("disabled", false);
    $(form).closest(".modal").find(".btn-close").attr("disabled", false)
    $(form).removeClass("submitted-form")
    $(form).find(".not-return").removeClass(".not-return")

    var button = $(submitBtn)
    button.closest("div").find("button").attr("disabled", false)
    button.attr("disabled", false);
    button.removeClass("buttonload");
    button.html(formSubmitOldContent);
}

function FormSelectboxLoader(selectbox) {
    $(selectbox).html(`<option delete-item="1">Yukleniyor...</option>`)
    $(selectbox).attr("disabled", true)
}

function FormSelectboxLoaderReturn(selectbox) {
    $(selectbox).find("option[delete-item='1']").remove()
    $(selectbox).attr("disabled", false)
}

$('.show-password-btn').on("click", function () {
    let dataType = $(this).attr("data-type")
    if (dataType == "0") {
        $(this).html(`<i class="fa-solid fa-eye"></i>`)
        $(this).attr("data-type", "1")
        $(this).closest(".password-input-box").find("input").attr("type", "text")
    } else {
        $(this).html(`<i class="fa-solid fa-eye-slash"></i>`)
        $(this).attr("data-type", "0")
        $(this).closest(".password-input-box").find("input").attr("type", "password")
    }
})


function randomPsw() {
    var character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@@#$%&*()";
    var lengthPsw = 8;
    var randomPsw = '';
    for (var i = 0; i < lengthPsw; i++) {
        var numPws = Math.floor(Math.random() * character.length);
        randomPsw += character.substring(numPws, numPws + 1);
    }
    return randomPsw;
}


$('.generate-password').on("click", function () {

    let randomPassword = randomPsw();
    let passwordInput = $(this).closest(".password-input-box").find("input")
    $(passwordInput).val(randomPassword)

    let passwordInputName = $(passwordInput).attr("name")
    let passwordInputAgainInput = $(this).closest("form").find("input[name='" + passwordInputName + "Again" + "']")
    $(passwordInputAgainInput).val(randomPassword)

})

function GetFormData(formElement) {
    var formData = new FormData();
    $(formElement).find("select,input,textarea").each(function (index, element) {

        var name = $(element).attr('name')
        var value = $(element).val()
        var type = $(element).attr("type")
        if ($(element).is("select") && $(element).prop('multiple')) {
            var selectedOptions = $(element).find('option:selected');
            selectedOptions.each(function (i, option) {
                formData.append(name, $(option).val());
            });

        } else if (type == "radio") {
            if ($(element).is(":checked")) {
                if (formData.has(name)) {
                    formData.set(name, value);
                } else {
                    formData.append(name, value);
                }
            }
        }
        else if (type == "checkbox") {
            formData.append(name, $(element).is(":checked"));
        } else if (type == "file") {
            formData.append(name, $(element).prop("files")[0]);
        } else {
            formData.append(name, value);
        }
    });

    return formData;
}

$(".modal-tab-box .modal-tab-link").on("click", function () {
    var thisModal = $(this).closest(".modal")

    $(thisModal).find(".modal-tab-link").removeClass("active")
    $(this).addClass("active")
    var tabId = $(this).attr("tab-link")
    $(thisModal).find(".tab-body").addClass("d-none")
    $(thisModal).find(".tab-body[tab-id='" + tabId + "']").removeClass("d-none")
})


$(document).ajaxError(function (event, jqXHR, settings, thrownError) {
    if (settings.handleErrors && settings.handleErrors.indexOf(jqXHR.status) !== -1) {
        return;
    }
    switch (jqXHR.status) {
        case 403:
            Swal.fire({
                title: 'Hata',
                html: "Yetkiniz yok",
                icon: 'error',
                confirmButtonText: 'Tamam'
            }).then(() => {
                location.reload();
            })
            break;
        case 404:
            Swal.fire({
                title: 'Hata',
                html: "İçerik bulunamadı",
                icon: 'error',
                confirmButtonText: 'Tamam'
            }).then(() => {
                location.reload();
            })
            break;
        case 422:
            Swal.fire({
                title: 'Hata',
                html: "Format Yanlış",
                icon: 'error',
                confirmButtonText: 'Tamam'
            }).then(() => {
                location.reload();
            })
            break;
        default:
            Swal.fire({
                title: 'Hata',
                html: "Bir şeyler ters gitti",
                icon: 'error',
                confirmButtonText: 'Tamam'
            }).then(() => {
                location.reload();
            })
    }
});