document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, {
        threshold: 0.1
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
