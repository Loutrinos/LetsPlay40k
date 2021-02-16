<template>
  <div id="app">
    <div class="main-content">
        <router-view></router-view>
    </div>
    <div class="ui four item bottom fixed inverted labeled icon mini menu">
        <router-link to="/" class="item">
            <i class="home icon"></i>
            Home
        </router-link>
        <router-link to="/new-game" class="item">
            <i class="plus square outline icon"></i>
            New Game
        </router-link>
        <a class="item">
            <i class="eye icon"></i>
            Spectate
        </a>
        <a class="item">
            <i class="archive icon"></i>
            Archive
        </a>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
	height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-content{
	width: 100%;
	height: calc(100% - 57px); // bottom fixed menu height
	
}

.ui.menu .item.router-link-exact-active {
	background-color: rgba(255,255,255,.08);
}

.visually-hidden {
	visibility: hidden;
	display: none;
}
</style>
