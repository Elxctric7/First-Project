let toasTimer;
function showNotification() {
    const toast= document.getElementById('toast');
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideNotification, 3500);
}

function hideNotification() {
    const toast = document.getElementById('toast');
    toast.classList.remove('show');
}