function onFeedbackSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const alertBox = document.getElementById('feedback-success');
    if (alertBox) {
        alertBox.classList.remove('d-none');
    }
    form.reset();
}

const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', onFeedbackSubmit);
}
