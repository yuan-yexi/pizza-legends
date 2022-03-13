class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0; // how far is it to the next cell

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1],
        } // how much to move for each direction
    }

    update(state) {
        this.updatePosition();

        if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            this.movingProgressRemaining = 16
        }
    }

    updatePosition() {
        if (this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction]; // e.g. passing ["y", -1]
            this[property] += change;
            this.movingProgressRemaining -= 1;
        }
    }
}