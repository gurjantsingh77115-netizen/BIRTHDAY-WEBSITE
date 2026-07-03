// ============================================
// BIRTHDAYVERSE - BIRTHDAY CAKE
// ============================================

class BirthdayCake {
    constructor() {
        this.canvas = document.getElementById('cakeCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.blowBtn = document.getElementById('blowCandleBtn');
        this.candles = [];
        this.candlesBlown = 0;

        this.setupCanvas();
        this.drawCake();
        this.blowBtn.addEventListener('click', () => this.blowCandles());
    }

    setupCanvas() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    drawCake() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        // Draw cake layers
        this.drawCakeLayers(centerX, centerY);
        
        // Draw candles
        this.createCandles(centerX, centerY);
        this.drawCandles();
    }

    drawCakeLayers(centerX, centerY) {
        // Bottom layer
        this.ctx.fillStyle = '#FF69B4';
        this.ctx.beginPath();
        this.ctx.ellipse(centerX, centerY, 100, 40, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        // Middle layer
        this.ctx.fillStyle = '#FF1493';
        this.ctx.beginPath();
        this.ctx.ellipse(centerX, centerY - 60, 80, 35, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Top layer
        this.ctx.fillStyle = '#FF69B4';
        this.ctx.beginPath();
        this.ctx.ellipse(centerX, centerY - 110, 60, 30, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
    }

    createCandles(centerX, centerY) {
        const candleCount = 5;
        const spacing = 20;
        const startX = centerX - (candleCount * spacing) / 2;

        for (let i = 0; i < candleCount; i++) {
            this.candles.push({
                x: startX + i * spacing,
                y: centerY - 140,
                height: 30,
                isBlown: false,
                flameOpacity: 1
            });
        }
    }

    drawCandles() {
        this.candles.forEach(candle => {
            // Candle
            this.ctx.fillStyle = '#FFD700';
            this.ctx.fillRect(candle.x - 4, candle.y, 8, candle.height);

            // Flame
            if (!candle.isBlown) {
                this.drawFlame(candle);
            }
        });
    }

    drawFlame(candle) {
        const flickerOffset = Math.sin(Date.now() * 0.01) * 5;
        const flameX = candle.x + flickerOffset;
        const flameY = candle.y - 10;

        this.ctx.fillStyle = `rgba(255, 165, 0, ${candle.flameOpacity})`;
        this.ctx.beginPath();
        this.ctx.ellipse(flameX, flameY, 8, 15, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Inner flame
        this.ctx.fillStyle = `rgba(255, 255, 0, ${candle.flameOpacity * 0.7})`;
        this.ctx.beginPath();
        this.ctx.ellipse(flameX, flameY + 5, 4, 8, 0, 0, Math.PI * 2);
        this.ctx.fill();
    }

    blowCandles() {
        this.candles.forEach((candle, index) => {
            setTimeout(() => {
                candle.isBlown = true;
                this.candlesBlown++;

                // Trigger celebration when all candles are blown
                if (this.candlesBlown === this.candles.length) {
                    this.triggerCelebration();
                }
            }, index * 100);
        });

        this.animateBlowing();
    }

    animateBlowing() {
        const animationFrames = 20;
        let frame = 0;

        const animate = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawCakeLayers(this.canvas.width / 2, this.canvas.height / 2);
            this.drawCandles();

            frame++;
            if (frame < animationFrames) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    triggerCelebration() {
        console.log('All candles blown! Starting celebration fireworks...');
        // Trigger fireworks and confetti
        if (window.fireworksManager) {
            fireworksManager.launch();
        }
        if (window.confettiManager) {
            confettiManager.start();
        }
    }
}

let cakeManager;

function initCake() {
    cakeManager = new BirthdayCake();
}
