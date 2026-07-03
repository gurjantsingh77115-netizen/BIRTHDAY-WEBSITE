// ============================================
// BIRTHDAYVERSE - MUSIC CONTROLS
// ============================================

class MusicManager {
    constructor() {
        this.audio = document.getElementById('backgroundMusic');
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.muteBtn = document.getElementById('muteBtn');
        
        this.isPlaying = false;
        this.isMuted = false;
        this.previousVolume = CONFIG.audio.volume;

        this.init();
    }

    init() {
        // Set initial volume
        this.audio.volume = CONFIG.audio.volume;
        this.volumeSlider.value = CONFIG.audio.volume * 100;

        // Event listeners
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        this.muteBtn.addEventListener('click', () => this.toggleMute());

        // Update button when audio ends
        this.audio.addEventListener('ended', () => {
            this.updatePlayButton();
        });
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.audio.play();
        this.isPlaying = true;
        this.updatePlayButton();
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayButton();
    }

    setVolume(value) {
        const volume = value / 100;
        this.audio.volume = volume;
        this.previousVolume = volume;
        this.updateMuteIcon();
    }

    toggleMute() {
        if (this.isMuted) {
            this.audio.volume = this.previousVolume;
            this.volumeSlider.value = this.previousVolume * 100;
            this.isMuted = false;
        } else {
            this.previousVolume = this.audio.volume;
            this.audio.volume = 0;
            this.volumeSlider.value = 0;
            this.isMuted = true;
        }
        this.updateMuteIcon();
    }

    updatePlayButton() {
        const icon = this.playPauseBtn.querySelector('i');
        icon.className = this.isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }

    updateMuteIcon() {
        const icon = this.muteBtn.querySelector('i');
        icon.className = this.isMuted || this.audio.volume === 0 
            ? 'fas fa-volume-mute' 
            : this.audio.volume < 0.5 
            ? 'fas fa-volume-down' 
            : 'fas fa-volume-up';
    }
}

let musicManager;

function initMusic() {
    musicManager = new MusicManager();
}
