// ============================================
// BIRTHDAYVERSE - MAIN APPLICATION
// ============================================

class BirthdayApp {
    constructor() {
        this.currentScreen = 'welcome';
        this.screens = {
            welcome: document.getElementById('welcomeScreen'),
            countdown: document.getElementById('countdownScreen'),
            celebration: document.getElementById('celebrationScreen'),
            ending: document.getElementById('endingScreen')
        };

        this.init();
    }

    init() {
        this.setupUI();
        this.attachEventListeners();
        this.displayWelcome();
        this.displayBirthdayLetter();
        this.displayQuotes();
        this.displayTimeline();
    }

    setupUI() {
        // Set celebrant name
        document.getElementById('celebrantName').textContent = `Happy Birthday, ${CONFIG.celebrant.name}!`;
        document.getElementById('celebrantMessage').textContent = CONFIG.celebrant.message;
    }

    attachEventListeners() {
        // Welcome screen buttons
        document.getElementById('enterBtn').addEventListener('click', () => this.enterCelebration());
        document.getElementById('musicToggleBtn').addEventListener('click', () => {
            if (musicManager) {
                musicManager.togglePlayPause();
            }
        });

        // Share buttons
        document.getElementById('shareWhatsApp').addEventListener('click', () => this.shareVia('whatsapp'));
        document.getElementById('shareInstagram').addEventListener('click', () => this.shareVia('instagram'));
        document.getElementById('shareTelegram').addEventListener('click', () => this.shareVia('telegram'));
        document.getElementById('shareFacebook').addEventListener('click', () => this.shareVia('facebook'));
        document.getElementById('copyLink').addEventListener('click', () => this.copyLink());

        // Quote button
        document.getElementById('nextQuoteBtn').addEventListener('click', () => this.displayQuotes());

        // Restart button
        document.getElementById('restartBtn').addEventListener('click', () => this.restart());

        // Gift box
        document.getElementById('giftBox3D').addEventListener('click', () => this.openGiftBox());
    }

    enterCelebration() {
        this.hideScreen('welcome');
        this.showScreen('celebration');
        
        // Start music
        if (musicManager) {
            musicManager.play();
        }

        // Trigger initial animations
        this.triggerCelebrationEffects();
    }

    triggerCelebrationEffects() {
        // Auto-trigger some celebration effects
        setTimeout(() => {
            if (confettiManager) {
                confettiManager.start();
            }
        }, 500);
    }

    displayWelcome() {
        const welcomeContent = document.querySelector('.welcome-content');
        if (welcomeContent) {
            gsap.from(welcomeContent, {
                duration: 1,
                opacity: 0,
                y: 30,
                ease: 'power2.out'
            });
        }
    }

    displayBirthdayLetter() {
        const letterContent = document.getElementById('letterContent');
        if (letterContent) {
            if (animationManager) {
                animationManager.typeWriter(letterContent, CONFIG.letter, 30);
            } else {
                letterContent.textContent = CONFIG.letter;
            }
        }
    }

    displayQuotes() {
        const quoteText = document.getElementById('quoteText');
        if (quoteText) {
            const randomQuote = CONFIG.quotes[Math.floor(Math.random() * CONFIG.quotes.length)];
            
            gsap.to(quoteText, {
                duration: 0.3,
                opacity: 0,
                onComplete: () => {
                    quoteText.textContent = randomQuote;
                    gsap.to(quoteText, {
                        duration: 0.3,
                        opacity: 1
                    });
                }
            });
        }
    }

    displayTimeline() {
        const timelineContainer = document.getElementById('timelineContainer');
        if (timelineContainer) {
            timelineContainer.innerHTML = '';
            CONFIG.timelineEvents.forEach((event, index) => {
                const item = document.createElement('div');
                item.className = 'timeline-item';
                item.style.animationDelay = `${index * 0.1}s`;
                item.innerHTML = `
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${event.date}</div>
                        <div class="timeline-title">${event.title}</div>
                        <div class="timeline-description">${event.description}</div>
                    </div>
                `;
                timelineContainer.appendChild(item);
            });
        }
    }

    openGiftBox() {
        const giftBox = document.getElementById('giftBox3D');
        const giftMessage = document.getElementById('giftMessage');
        const giftMessageText = document.getElementById('giftMessageText');

        if (giftBox && giftMessage) {
            giftBox.style.pointerEvents = 'none';
            
            // Animate gift box opening
            gsap.to(giftBox, {
                duration: 0.6,
                rotateY: 180,
                transformPerspective: 1000,
                ease: 'back.out'
            });

            setTimeout(() => {
                giftMessageText.textContent = CONFIG.giftMessage;
                giftMessage.classList.remove('hidden');
                
                gsap.from(giftMessage, {
                    duration: 0.8,
                    opacity: 0,
                    scale: 0.8,
                    ease: 'back.out'
                });

                // Trigger confetti
                if (confettiManager) {
                    confettiManager.start();
                }
            }, 600);
        }
    }

    shareVia(platform) {
        const text = `🎉 Join me in celebrating! Check out my birthday celebration at ${window.location.href}`;
        const encodedText = encodeURIComponent(text);
        const encodedUrl = encodeURIComponent(window.location.href);

        const urls = {
            whatsapp: `https://wa.me/?text=${encodedText}`,
            instagram: `https://instagram.com`,
            telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        };

        if (urls[platform]) {
            window.open(urls[platform], '_blank');
        }
    }

    copyLink() {
        const link = window.location.href;
        navigator.clipboard.writeText(link).then(() => {
            // Show success feedback
            const btn = document.getElementById('copyLink');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
            }, 2000);
        });
    }

    hideScreen(screenName) {
        if (this.screens[screenName]) {
            this.screens[screenName].classList.add('hidden');
        }
    }

    showScreen(screenName) {
        if (this.screens[screenName]) {
            this.screens[screenName].classList.remove('hidden');
            this.currentScreen = screenName;
        }
    }

    restart() {
        location.reload();
    }
}

let birthdayApp;

// ============================================
// INITIALIZATION FUNCTION
// ============================================

function initApp() {
    console.log('Initializing BirthdayVerse...');
    
    // Initialize all modules
    initBackground();
    initMusic();
    initAnimations();
    initGallery();
    initCake();
    initFireworks();
    initConfetti();
    
    // Initialize main app
    birthdayApp = new BirthdayApp();
    
    console.log('✨ BirthdayVerse Ready! Welcome to the celebration! ✨');
}

// Make initApp globally available
window.initApp = initApp;
