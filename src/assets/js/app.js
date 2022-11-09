import './device';
import { viewport } from "./check-viewport";

import { cardContentChange } from "./card";

document.addEventListener("DOMContentLoaded", function () {
    viewport();
    cardContentChange();
});