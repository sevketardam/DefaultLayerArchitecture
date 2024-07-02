$(document).ready(function () {

    jQuery.validator.addMethod("phoneTR", function (phone_number, element) {
        return this.optional(element) || /([0-9]){3}[\s]([0-9]){3}[\s]([0-9]){2}[\s]?([0-9]){2}$/g.test(phone_number);
    }, "Ge\u00E7ersiz telefon numaras\u0131");

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value.trim() != "" && value != "";
    }, "Bo\u015F b\u0131rak\u0131lamaz!");

    jQuery.validator.addMethod("noSelect", function (value, element) {
        return value != "null";
    }, "Bo\u015F b\u0131rak\u0131lamaz!");

    jQuery.validator.addMethod("termDate", function (value, element) {
        var termValid = false;
        if ($('.istermcheckbox').val() == "true" && $('#FinishTerm').val() != '') {
            termValid = true;
        }
        return termValid;
    }, "Tarih se\u00E7iniz");
    jQuery.validator.addMethod("iban", function (iban_number, element) {
        const codeLengths = {
            AD: 24, AE: 23, AL: 28, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BI: 28, BR: 29, BY: 28, CH: 21, CR: 22, CY: 28, CZ: 24, DE: 22,
            DK: 18, DO: 28, EE: 20, EG: 29, ES: 24, LC: 32, FI: 18, FO: 18, FR: 27, GB: 22, GE: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21, HU: 28,
            IE: 22, IL: 23, IQ: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28, LI: 21, LT: 20, LU: 20, LV: 21, LY: 25, MC: 27, MD: 24, ME: 22,
            MK: 19, MR: 27, MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29, RO: 24, RS: 22, SA: 24, SC: 31, SD: 18, SE: 24,
            SI: 19, SK: 24, SM: 27, ST: 25, SV: 28, TL: 23, TN: 24, TR: 26, UA: 29, VA: 22, VG: 24, XK: 20,
        };

        const iban = iban_number.toUpperCase().replace(/[^A-Z0-9]/g, "");
        const code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/);
        if (!code || iban.length !== codeLengths[code[1]]) {
            return false;
        }
        const digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, (letter) => {
            return (letter.charCodeAt(0) - 55).toString();
        });

        return mod97(digits) === 1;
    }, "Ge\u00E7ersiz iban");
    jQuery.validator.addMethod("tcIdentity", function (value, element) {
        return this.optional(element) || /^[1-9]{1}[0-9]{9}[02468]{1}$/g.test(value);
    }, "D\u00FCzg\u00FCn bir TC kimlik numaras\u0131 giriniz");
})

function mod97(digital) {
    digital = digital.toString();
    let checksum = digital.slice(0, 2);
    let fragment = "";
    for (let offset = 2; offset < digital.length; offset += 7) {
        fragment = checksum + digital.substring(offset, offset + 7);
        checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;
}