function removeError(errors) {
    for (var i = 0; i < errors.length; i++) {
        errors[i].classList.remove('error');
    }
}
function checkFields(fields) {
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            fields[i].parentNode.classList.add('error');
        }
    }
}

// form add characteristic
export function addCharacteristic() {
    if (document.querySelector('.cardCharacteristic_js')) {
        var form = document.querySelectorAll('.cardCharacteristic_js');
        var fields;
        var errors;

        form.forEach((item) => {
            item.addEventListener('submit', function (event) {
                event.preventDefault();
                fields = item.querySelectorAll('.fileds_js');
                errors = item.querySelectorAll('.error');
                removeError(errors);
                checkFields(fields);
            });
        });
    }
}