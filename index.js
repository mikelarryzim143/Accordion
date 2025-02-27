document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.accordion-question');
    items.forEach(item => {
        item.addEventListener('click', function() {
            // Close all open answers
            const allAnswers = document.querySelectorAll('.accordion-answer');
            allAnswers.forEach(answer => {
                if (answer !== item.nextElementSibling) {
                    answer.style.display = 'none';
                }
            });

            // Toggle the clicked answer
            const answer = item.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});