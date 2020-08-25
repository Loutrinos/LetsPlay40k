const NewGameComponent = {
	data: () => ({}),
	mounted: () => {
		$(".checkbox").checkbox();
	},
	template: `
		<div class="new-game-component">
			<div class="ui five tiny ordered unstackable steps">
				<div class="step completed">Opponent</div>
				<div class="step active">Size</div>
				<div class="step">Mission</div>
				<div class="step">Secondaries</div>
				<div class="step">Rolls</div>
			</div>
			<h1>Pick Opponent</h1>

			
		</div>
	`
};

export { NewGameComponent };