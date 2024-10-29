


const cardInners = document.querySelectorAll('.card-inner');

// Add mouseenter and mouseleave event listeners
cardInners.forEach(cardInner => {
    cardInner.addEventListener('mouseenter', () => {
        cardInner.style.transform = 'rotateY(180deg)';
    });
    
    cardInner.addEventListener('mouseleave', () => {
        cardInner.style.transform = 'rotateY(0deg)';
    });
});