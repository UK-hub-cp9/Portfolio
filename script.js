document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeSwitch = document.getElementById('theme-switch');
    
    // Check if theme preference is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Add smooth scrolling for anchor links
    document.addEventListener('DOMContentLoaded', function() {
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(function(anchor) {
          anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const target = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(target);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      });

      // Add fade-in animation to sections as they come into view
    document.addEventListener('DOMContentLoaded', function() {
        const fadeElements = document.querySelectorAll('.hero, .categories, .about-me, .art-showcase, .blog-preview, .achievements');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    });

    // Category data - Update these links to your Google Drive folders
    const categories = [
        {
            id: 'projects',
            name: '👨‍💻 Projects',
            icon: 'fas fa-code',
            description: 'Software development, coding experiments, and technical creations',
            link: 'https://drive.google.com/drive/folders/1Py85wBAORWKb33RkYdIu_wDNngADOzl8?usp=drive_link',
            class: 'projects'
        },
        {
            id: 'blogs',
            name: '✍️ Blogs / Writings',
            icon: 'fas fa-pen-to-square',
            description: 'Thoughts, tutorials, and long-form articles',
            link: 'https://drive.google.com/drive/folders/YOUR_BLOGS_FOLDER_ID',
            class: 'blogs'
        },
        {
            id: 'art',
            name: '🎨 Art & Sketches',
            icon: 'fas fa-paint-brush',
            description: 'Digital art, sketches, and creative illustrations',
            link: 'https://drive.google.com/drive/folders/YOUR_ART_FOLDER_ID',
            class: 'art'
        },
        {
            id: 'music',
            name: '🎵 Music',
            icon: 'fas fa-music',
            description: 'FL Studio exports, SoundCloud links, and audio experiments',
            link: 'https://drive.google.com/drive/folders/YOUR_MUSIC_FOLDER_ID',
            class: 'music'
        },
        {
            id: 'photography',
            name: '📸 Photography',
            icon: 'fas fa-camera',
            description: 'Photography projects and visual storytelling',
            link: 'https://drive.google.com/drive/folders/YOUR_PHOTOGRAPHY_FOLDER_ID',
            class: 'photography'
        },
        {
            id: 'adventures',
            name: '🧭 Adventures / Travel Logs',
            icon: 'fas fa-map',
            description: 'Travel journals, photos, and location stories',
            link: 'https://drive.google.com/drive/folders/YOUR_ADVENTURES_FOLDER_ID',
            class: 'adventures'
        },
        {
            id: 'ideas',
            name: '💡 Ideas / Discoveries',
            icon: 'fas fa-lightbulb',
            description: 'Random ideas, research, and knowledge collection',
            link: 'https://drive.google.com/drive/folders/YOUR_IDEAS_FOLDER_ID',
            class: 'ideas'
        }
    ];
    
    // Create category cards dynamically
    const categoryGrid = document.getElementById('category-grid');
    
    categories.forEach(category => {
        const card = document.createElement('a');
        card.href = category.link;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = `category-card ${category.class}`;
        card.innerHTML = `
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-description">${category.description}</p>
            <span class="category-link">
                Explore <i class="fas fa-arrow-right"></i>
            </span>
        `;
        categoryGrid.appendChild(card);
    });
    
    // Add loading animation for cards
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});