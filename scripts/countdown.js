// ============================================
// BIRTHDAYVERSE - COUNTDOWN TIMER
// ============================================

class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = new Date(targetDate).getTime();
        this.updateCountdown();
        this.interval = setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        if (distance < 0) {
            clearInterval(this.interval);
            this.onCountdownComplete();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM
        this.updateElement('days', days);
        this.updateElement('hours', hours);
        this.updateElement('minutes', minutes);
        this.updateElement('seconds', seconds);
    }

    updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            const formattedValue = String(value).padStart(2, '0');
            element.textContent = formattedValue;
            
            // Add animation on change
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'pulse 0.5s ease-in-out';
            }, 10);
        }
    }

    onCountdownComplete() {
        console.log('Countdown complete! Starting celebration...');
        // Trigger celebration start
        document.getElementById('countdownScreen').classList.add('hidden');
        document.getElementById('celebrationScreen').classList.remove('hidden');
    }
}

function startCountdown(targetDate) {
    new CountdownTimer(targetDate);
}
