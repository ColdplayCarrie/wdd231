/****TO JOIN****/
document.addEventListener("DOMContentLoaded", function () {
    const timestamp = document.querySelector("#timestamp");

    if (timestamp) {
        const now = new Date();
        timestamp.value = now.toISOString();
    }
});
