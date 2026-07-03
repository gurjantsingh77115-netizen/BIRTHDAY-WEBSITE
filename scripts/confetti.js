// ============================================
// BIRTHDAYVERSE - CONFETTI ANIMATION
// ============================================

class Confetti {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.confetti = [];
        this.isActive = false;

        this.setupCanvas();
        this.animate();
    }

    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start() {
        if (this.isActive) return;
        this.isActive = true;
        this.createConfetti();
    }

    createConfetti() {
        const colors = ['#FF1493', '#00D4FF', '#FFD700', '#C084FC', '#FFFFFF'];
        const types = ['square', 'circle', 'star'];

        for (let i = 0; i < CONFIG.animations.confettiCount; i++) {
            this.confetti.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                vx: (Math.random() - 0.5) * 3,
                vy: Math.random() * 3 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                type: types[Math.floor(Math.random() * types.length)],
                size: Math.random() * 8 + 4,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.2,
                life: 1
            });
        }
    }

    updateConfetti() {
        this.confetti = this.confetti.filter(c => {
            c.y += c.vy;
            c.x += c.vx + Math.sin(c.y * 0.01) * 0.5;
            c.vy += 0.1; // gravity
            c.rotation += c.rotationSpeed;
            c.life -= 0.005;
            return c.life > 0;
        });

        if (this.confetti.length === 0) {
            this.isActive = false;
        }
    }

    drawConfetti() {
        this.confetti.forEach(c => {
            this.ctx.save();
            this.ctx.translate(c.x, c.y);
            this.ctx.rotate(c.rotation);
            this.ctx.fillStyle = c.color + Math.floor(c.life * 255).toString(16).padStart(2, '0');

            if (c.type === 'square') {
                this.ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
            } else if (c.type === 'circle') {
                this.ctx.beginPath();
                this.ctx.arc(0, 0, c.size / 2, 0, Math.PI * 2);
                this.ctx.fill();
            } else if (c.type === 'star') {
                this.drawStar(0, 0, 5, c.size / 2, c.size / 4);
            }

            this.ctx.restore();
        });
    }

    drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            this.ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            this.ctx.lineTo(x, y);
            rot += step;
        }
        this.ctx.lineTo(cx, cy - outerRadius);
        this.ctx.closePath();
        this.ctx.fill();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateConfetti();
        this.drawConfetti();

        requestAnimationFrame(() => this.animate());
    }
}

let confettiManager;

function initConfetti() {
    confettiManager = new Confetti('confettiCanvas');
}
