const HomeComponent = {
	data: () => ({}),
	template: `
		<div class="home-component">
			<div class="main-logo">
				<img src="assets/logo.svg">
			</div>

			<h1>Lets Play<br/>40k</h1>

			<div class="ui grey inverted segment login-form">
				<form class="ui inverted form">
					<div class="field">
						<label>Username</label>
						<input type="text" name="username" placeholder="Enter your username">
					</div>
					<button class="fluid ui red button" type="submit">Login</button>
				</form>
			</div>
		</div>
	`
};

export { HomeComponent };