// SoundManager.js
// Uses Web Audio API to synthesize sci-fi UI sounds without external assets.

class SoundManager {
    constructor() {
        this.audioCtx = null;
        this.isMuted = false;
        this.isUnlocked = false;

        // Try to initialize immediately, but it might be suspended
        try {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }

        this.unlock = this.unlock.bind(this);
        if (typeof window !== 'undefined') {
            window.addEventListener('click', this.unlock, { once: true });
            window.addEventListener('keydown', this.unlock, { once: true });
        }
    }

    unlock() {
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume().then(() => {
                this.isUnlocked = true;
            });
        } else {
            this.isUnlocked = true;
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }

    play(type) {
        if (this.isMuted || !this.audioCtx) return;

        // Ensure context is running
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        switch (type) {
            case 'hover':
                this.playHoverSound();
                break;
            case 'click':
                this.playClickSound();
                break;
            case 'boot':
                this.playBootSound();
                break;
            default:
                break;
        }
    }

    playHoverSound() {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        // High pitched, short blip
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, this.audioCtx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.05);
    }

    playClickSound() {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        // Tech-y "click"
        osc.type = 'square';
        osc.frequency.setValueAtTime(200, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.audioCtx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.1);
    }

    playBootSound() {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        // Power-up swelling sound
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, this.audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(1200, this.audioCtx.currentTime + 1.5);

        gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.1, this.audioCtx.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1.5);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + 1.5);
    }
}

export const soundManager = new SoundManager();
