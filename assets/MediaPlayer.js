class MediaPlayer{ 
    constructor(config) {
        this.media = config.element
        this.plugins = config.plugins || [];

        this._initPlugins();
    }

    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },

            set muted(value) {
                this.media.muted = value;
            }
        }

        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }


    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    tooglePlay() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }    
    }

    // 

    mute() {
        this.media.muted = true
    }
    unmute() {
        this.media.muted = false
    }
    toogleMute() {
        this.media.muted? this.unmute() : this.mute();
    }
}

export default MediaPlayer;