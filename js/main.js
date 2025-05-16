document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.toggle('active');
                if (navMenu.classList.contains('active')) {
                    navMenu.style.display = 'flex';
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '100%';
                    navMenu.style.left = '0';
                    navMenu.style.right = '0';
                    navMenu.style.backgroundColor = 'var(--primary)';
                    navMenu.style.padding = '1rem';
                    navMenu.style.zIndex = '100';
                } else {
                    navMenu.style.display = '';
                }
            }
        });
    }
    
    // Filtros na página de livros
    const filterInputs = document.querySelectorAll('.filter-input');
    
    filterInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Aqui seria implementada a lógica de filtragem
            console.log('Filtro alterado:', input.id, input.value);
        });
    });
    
    // Efeito de hover nos cards
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});
