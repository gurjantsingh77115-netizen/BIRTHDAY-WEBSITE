// ============================================
// BIRTHDAYVERSE - FIREWORKS ANIMATION
// ============================================

class Fireworks {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.launchBtn = document.getElementById('launchFireworksBtn');

        this.setupCanvas();
        if (this.launchBtn) {
            this.launchBtn.addEventListener('click', () => this.launch());
        }
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

    launch() {
        const colors = ['#FF1493', '#00D4FF', '#FFD700', '#C084FC'];
        const shapes = ['circle', 'heart', 'star'];

        for (let i = 0; i < CONFIG.animations.fireworksCount; i++) {
            this.createExplosion(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height * 0.6,
                colors[Math.floor(Math.random() * colors.length)],
                shapes[Math.floor(Math.random() * shapes.length)]
            );
        }
    }

    createExplosion(x, y, color, shape) {
        const particleCount = 50;
        const speed = 5;

        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = (Math.random() * speed) + speed / 2;

            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                life: 1,
                color: color,
                shape: shape,
                size: Math.random() * 4 + 2
            });
        }
    }

    updateParticles() {
        this.particles = this.particles.filter(p => p.life > 0);

        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // gravity
            p.life -= 0.02;
        });
    }

    drawParticles() {
        this.particles.forEach(p => {
            this.ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
            
            if (p.shape === 'circle') {
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fill();
            } else if (p.shape === 'star') {
                this.drawStar(p.x, p.y, 5, p.size, p.size * 0.5);
            } else if (p.shape === 'heart') {
                this.drawHeart(p.x, p.y, p.size);
            }
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

    drawHeart(x, y, size) {
        const h = size;
        const w = size;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + w * 0.3);
        this.ctx.bezierCurveTo(x, y, x - w / 2, y - h / 2, x - w / 2, y - h * 0.25);
        this.ctx.bezierCurveTo(x - w / 2, y - h * 0.75, x, y, x, y - h / 3);
        this.ctx.bezierCurveTo(x, y, x + w / 2, y - h * 0.75, x + w / 2, y - h * 0.25);
        this.ctx.bezierCurveTo(x + w / 2, y - h / 2, x, y, x, y + w * 0.3);
        this.ctx.fill();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawParticles();

        requestAnimationFrame(() => this.animate());
    }
}

let fireworksManager;

function initFireworks() {
    fireworksManager = new Fireworks('fireworksCanvas');
}
