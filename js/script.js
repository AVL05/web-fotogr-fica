document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    
    function loadGallery(category = 'all') {
        gallery.innerHTML = '';
        
        const filteredPhotos = category === 'all' 
            ? fotosData 
            : fotosData.filter(photo => photo.category === category);
        
        if (filteredPhotos.length === 0) {
            gallery.innerHTML = '<p class="no-photos">No hay fotos en esta categoría</p>';
            return;
        }

        filteredPhotos.forEach(photo => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                <div class="overlay">
                    <h3>${photo.title}</h3>
                </div>
            `;
            gallery.appendChild(galleryItem);
        });
    }

    // Inicializar galería
    loadGallery();
    
    // Manejar clicks en los filtros
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            loadGallery(category);
        });
    });
    
});