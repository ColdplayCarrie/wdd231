// Scotland Cards //

import { loadAndDisplayStops } from "./cards.js";

const scotlandSearchTerms = ["scotland", "edinburgh", "glasgow"];

loadAndDisplayStops(scotlandSearchTerms);

// MODAL IN FOOTER //
document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('videoModal');
    const btn = document.getElementById('demoButton');
    const span = document.getElementsByClassName('close-button')[0];
    const confirmBtn = document.getElementById('confirmButton');
    const cancelBtn = document.getElementById('cancelButton');

    const videoURL = 'https://youtu.be/17-PTHI5sc4';

    btn.onclick = function () {
        modal.style.display = 'flex';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    confirmBtn.onclick = function () {
        window.open(videoURL, '_blank');
    }

    cancelBtn.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});