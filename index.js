const icons = document.querySelectorAll('.O');

icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        const answer = document.querySelectorAll('.answer')[index];
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.src = 'icon-plus.svg';
        } else {
            answer.style.display = 'block';
            icon.src = 'icon-minus.svg';
        }
    });
});
