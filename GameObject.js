class GameObject {
    constructor(config) {
        // the position of the game object
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        // Game Object will create a sprite in its class
        // sprite has its own class with details on which frame to show and other stuff
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/images/characters/people/hero.png",
        });
    }
    // static objects have empty update for now
    update() {

    }
}