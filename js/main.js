fullForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Form sent',
        text: 'The form has been sent succesfully',
    }).then((result) => {
        document.location.href="index.html";
    });
});