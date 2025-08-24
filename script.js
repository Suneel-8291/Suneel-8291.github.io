function showMoreAbout() {
    document.getElementById('moreAbout').style.display = 'block';
}

function highlightCard(card) {
    card.style.boxShadow = '0 4px 16px rgba(0,140,210,0.3)';
    card.style.transform = 'scale(1.05)';
}

function unhighlightCard(card) {
    card.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
    card.style.transform = 'scale(1)';
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formResponse').style.display = 'block';
}
