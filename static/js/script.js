document.addEventListener('DOMContentLoaded', () => {
    // Character data
    const characterData = {
        'jose-arcadio': {
            name: 'José Arcadio Buendía',
            description: 'The founder of Macondo and patriarch of the Buendía family. A man of great curiosity and scientific spirit, whose quest for knowledge leads him to various experiments and discoveries.'
        },
        'ursula': {
            name: 'Úrsula Iguarán',
            description: 'The matriarch of the Buendía family. A strong and practical woman who lives for over a century, witnessing the rise and fall of Macondo and her family.'
        }
        // Add more character data as needed
    };

    // Get the container and sections
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
    let isScrolling = false;

    // Function to scroll to a specific section
    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;
        
        currentSection = index;
        const section = sections[index];
        container.scrollTo({
            left: section.offsetLeft,
            behavior: 'smooth'
        });
    }

    // Handle mouse wheel events
    window.addEventListener('wheel', (e) => {
        e.preventDefault(); // Prevent default vertical scrolling
        
        if (isScrolling) return;
        isScrolling = true;

        if (e.deltaY > 0) {
            // Scrolling down
            scrollToSection(currentSection + 1);
        } else {
            // Scrolling up
            scrollToSection(currentSection - 1);
        }

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    });

    // Handle touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left
            scrollToSection(currentSection + 1);
        } else if (touchEndX > touchStartX) {
            // Swipe right
            scrollToSection(currentSection - 1);
        }
    }

    // Handle character visibility on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.character').forEach(character => {
        observer.observe(character);
    });

    // Modal functionality
    const modal = document.getElementById('characterModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.character').forEach(character => {
        character.addEventListener('click', () => {
            const characterId = character.getAttribute('data-character');
            const data = characterData[characterId];
            
            modalTitle.textContent = data.name;
            modalDescription.textContent = data.description;
            modal.style.display = 'block';
            modal.classList.add('show');
        });
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Prevent default scroll behavior
    document.body.style.overflow = 'hidden';
}); 