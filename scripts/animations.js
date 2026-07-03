// ============================================
// BIRTHDAYVERSE - ANIMATIONS & INTERACTIONS
// ============================================

class AnimationManager {
    constructor() {
        this.setupScrollAnimations();
        this.setupElementAnimations();
    }

    setupScrollAnimations() {
        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    setupElementAnimations() {
        // Add fade-in animation class to sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.style.animation = `fadeIn 0.8s ease-in-out ${index * 0.1}s forwards`;
            section.style.opacity = '0';
        });
    }

    typeWriter(element, text, speed = 50) {
        return new Promise((resolve) => {
            element.innerHTML = '';
            let index = 0;

            const type = () => {
                if (index < text.length) {
                    element.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            };

            type();
        });
    }

    bounceIn(element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'slideUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }, 10);
    }

    glowPulse(element) {
        element.style.animation = 'glow 2s ease-in-out infinite';
    }

    shake(element) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'shake 0.5s ease-in-out';
        }, 10);
    }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

let animationManager;

function initAnimations() {
    animationManager = new AnimationManager();
}
