// ============================================
// BIRTHDAYVERSE - PHOTO GALLERY
// ============================================

class PhotoGallery {
    constructor() {
        this.galleryGrid = document.getElementById('galleryGrid');
        this.prevBtn = document.getElementById('prevGalleryBtn');
        this.nextBtn = document.getElementById('nextGalleryBtn');
        this.currentIndex = 0;
        this.photos = CONFIG.photoGallery;

        this.init();
    }

    init() {
        if (this.photos.length === 0) {
            this.showEmptyState();
            return;
        }

        this.renderGallery();
        this.attachEventListeners();
    }

    renderGallery() {
        this.galleryGrid.innerHTML = '';
        
        this.photos.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `<img src="${photo}" alt="Memory ${index + 1}" loading="lazy">`;
            item.addEventListener('click', () => this.openLightbox(index));
            this.galleryGrid.appendChild(item);
        });
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevPhoto());
        this.nextBtn.addEventListener('click', () => this.nextPhoto());
    }

    nextPhoto() {
        this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    }

    prevPhoto() {
        this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    }

    openLightbox(index) {
        // Placeholder for lightbox functionality
        console.log('Opening lightbox for image:', index);
        // Could integrate a lightbox library like GLightbox
    }

    showEmptyState() {
        this.galleryGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p style="color: rgba(255, 255, 255, 0.6); font-size: 1.1rem;">
                    📸 Add your photos in CONFIG.photoGallery to display them here!
                </p>
            </div>
        `;
    }
}

let photoGallery;

function initGallery() {
    photoGallery = new PhotoGallery();
}
