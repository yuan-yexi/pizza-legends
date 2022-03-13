class Sprite {
    constructor(config) {
        // set up the image
        this.image = new Image(); // create image in memory
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        // shadow for sprites
        this.shadow = new Image(); // create html el for shadow
        this.useShadow = true;
        if (this.useShadow) {
            this.shadow.src = "/images/characters/shadow.png"; // point image src to shadow sprite
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }
        
        // configure animation & inital state
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimation = 0;

        // reference the gameObject class so we can use it in Sprite class
        this.gameObject = config.gameObject;
    }

    // class methods
    draw(ctx) {
        // place sprite onto game board
        // coord inherited from gameObject
        const x = this.gameObject.x - 8;
        const y = this.gameObject.y - 8;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)
        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
        )
    }
}
