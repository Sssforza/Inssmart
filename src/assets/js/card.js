// card content change
export function cardContentChange() {
    if (document.querySelector(".cardTabs_js")) {
        var tabs = document.querySelectorAll(".cardTabs_js");
        var content = document.querySelectorAll(".cardContent_js");
        var choice;

        tabs.forEach((item) => {
            item.addEventListener("click", () => {
                tabs.forEach((i) => {
                    i.classList.remove('active');
                });
                item.classList.add('active');

                choice = item.getAttribute('data-choice');

                content.forEach((elem) => {
                    if (elem.getAttribute('data-tabContent') === choice) {
                        content.forEach((i) => {
                            i.classList.add('hide');
                        });
                        elem.classList.remove('hide');
                    }
                });
            });
        });
    }
}