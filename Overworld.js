class Overworld {
	constructor(config) {
		this.element = config.element; // pass element for overworld
		this.canvas = this.element.querySelector(".game-canvas"); // html canvas
		this.ctx = this.canvas.getContext("2d"); // context of canvas that allows for drawing etc
		this.map = null;
	}
	
	startGameLoop() {
		const step = () => {

			// clear off the canvas after eveyone frame
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			
			// draw lower layer
			this.map.drawLowerImage(this.ctx);

			// draw game objects
			Object.values(this.map.gameObjects).forEach(object => {
				object.update({
					arrow: this.directionInput.direction
				})
				object.sprite.draw(this.ctx)
			})

			// draw upper layer
			this.map.drawUpperImage(this.ctx);

			// requestAnimationFrame is a browser feaure which calls a function whenever a new frame begins
			requestAnimationFrame(() => {
				step(); // having step in here is not creating an infinite loop code fires function with everyone frame
			})
		}
		step();
	}

 	// init invokes the overworld obj
	init() {
		this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
		
		this.directionInput = new DirectionInput();
		this.directionInput.init();
		
		this.startGameLoop();
	}
}