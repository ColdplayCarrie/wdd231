document.addEventListener("DOMContentLoaded", function () {
    const timestamp = document.querySelector("#submission-timestamp");

    if (timestamp) {
        const now = new Date();
        timestamp.value = now.toISOString();
    }
});