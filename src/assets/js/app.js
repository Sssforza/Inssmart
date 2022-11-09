import './device';
import { viewport } from "./check-viewport";

import { cardContentChange } from "./card";
import { addCharacteristic } from "./validations";

document.addEventListener("DOMContentLoaded", function () {
    viewport();

    cardContentChange();
    addCharacteristic();
});