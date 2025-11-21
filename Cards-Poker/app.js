const cards = document.getElementsByClassName('card')

for (const card of cards) {
    let contenido;

    card.addEventListener('mouseenter', function() {
        
        contenido = card.innerHTML;
        card.classList.add('diego');
        
        card.innerHTML = `<div class="izquierda">
                <p>♥ <span>♣</span> ♦ <span>♠</span></p>
            </div>
            <div class="medio">
                <p>Diego's Cards</p>
            </div>
            <div class="derecha reverso">
                <p>♥ <span>♣</span> ♦ <span>♠</span></p>
            </div>`;
    });

    card.addEventListener('mouseleave', () => {
        
        card.innerHTML = contenido;
        card.classList.remove('diego');
        contenido = ''
    });
};