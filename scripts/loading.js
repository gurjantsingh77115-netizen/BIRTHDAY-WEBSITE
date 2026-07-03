// ============================================
// BIRTHDAYVERSE - LOADING SCREEN
// ============================================

class LoadingManager {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.progressFill = document.querySelector('.progress-fill');
        this.init();
    }

    init() {
        // Start loading animation
        this.animateLoading();
        
        // Hide loading screen after duration
        setTimeout(() => {
            this.hideLoadingScreen();
        }, CONFIG.timing.loadingDuration);
    }

    animateLoading() {
        // Progress bar is animated via CSS
        // You can add additional loading logic here
        console.log('Loading assets...');
    }

    hideLoadingScreen() {
        this.loadingScreen.classList.add('hidden');
        document.getElementById('mainContainer').classList.remove('hidden');
        
        // Initialize main application
        setTimeout(() => {
            initApp();
        }, 300);
    }
}

// Initialize loading screen when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LoadingManager();
    });
} else {
    new LoadingManager();
}
