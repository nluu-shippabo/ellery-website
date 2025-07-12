document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thank-you').classList.remove('hidden');
    this.reset();
});
