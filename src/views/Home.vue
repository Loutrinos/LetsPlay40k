<template>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home-component {
	background-color: #D6D6D6;

	&:before {
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		border: 160px solid transparent;
		border-top-color: white;
		left: calc(50% - 160px);
		z-index: 1;
	}

	.main-logo {
		z-index: 2;
		position: relative;
		height: 150px;

		& img {
			width: 150px;
			display: block;
			margin: 0 auto;
		}
	}

	h1 {
		text-align: center;
		font-size: 3rem;
		margin: 10px 0;
	}

	.login-form {
		width: 80%;
		max-width: 400px;
		margin: 30px auto 0;
	}
}
</style>
