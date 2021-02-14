<template>
<div class="new-game-component">
  <div class="small-logo">
    <img src="assets/logo.svg">
  </div>
  <div class="wizard-step battle-size">
    <h1>Pick Opponent</h1>

    <div class="list">
      <div class="item">
        <input type="radio" id="item-1" name="items" class="visually-hidden">
        <label for="item-1">
          <span class="selection"></span>
          <span class="text">George</span>
        </label>
      </div>
      <div class="item">
        <input type="radio" id="item-2" name="items" class="visually-hidden">
        <label for="item-2">
          <span class="selection"></span>
          <span class="text">Kyle</span>
        </label>
      </div>
      <div class="item">
        <input type="radio" id="item-3" name="items" class="visually-hidden">
        <label for="item-3">
          <span class="selection"></span>
          <span class="text">Kyle</span>
          <a
            class="image-expand lightbox"
            data-src="../../assets/maps/RetrievalMission.png"
            aria-hidden="true"
            rel="lightbox"
          >
            
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33334 5.33329H14.6667V2.66663H5.33334C3.86667 2.66663 2.66667 3.86663 2.66667 5.33329V14.6666H5.33334V5.33329ZM13.3333 17.3333L8.00001 24H24L20 18.6666L17.2933 22.28L13.3333 17.3333ZM22.6667 11.3333C22.6667 10.2266 21.7733 9.33329 20.6667 9.33329C19.56 9.33329 18.6667 10.2266 18.6667 11.3333C18.6667 12.44 19.56 13.3333 20.6667 13.3333C21.7733 13.3333 22.6667 12.44 22.6667 11.3333ZM26.6667 2.66663H17.3333V5.33329H26.6667V14.6666H29.3333V5.33329C29.3333 3.86663 28.1333 2.66663 26.6667 2.66663ZM26.6667 26.6666H17.3333V29.3333H26.6667C28.1333 29.3333 29.3333 28.1333 29.3333 26.6666V17.3333H26.6667V26.6666ZM5.33334 17.3333H2.66667V26.6666C2.66667 28.1333 3.86667 29.3333 5.33334 29.3333H14.6667V26.6666H5.33334V17.3333Z"/>
            </svg>
          </a>
        </label>
      </div>
    </div>
  </div>

  <button class="big black ui button wizard-step-button">Next</button>
  

  
</div>
</template>


<style lang="scss" scoped>
.new-game-component {
	padding-bottom: 10px;
    display:flex;
    flex-direction: column;
    background-color: #C4C4C4;

	.small-logo {
		height: 50px;
		text-align: center;
        background-color: #fff;

		img { height: 100%; }
	}

	.wizard-step {
		
		height: calc(100vh - 160px);
		padding: 10px;
	}

	.wizard-step-button {
		height: 50px;
        width: 90%;
        align-self: center;
	}

	h1 { font-family: 'Roboto Condensed', sans-serif; }
}

.wizard-step {
	.item {
		background: #fff;
		margin-bottom: 8px;
		font-weight: bold;
		font-size: 1.2rem;

		input:checked + label {
			color: white;
			background: #000;
		}

		input:checked + label .selection {
			background-color: #A32121;
		}
	}

	label {
		display: flex;
		align-items: center;
		padding: 0 10px;
		height: 45px;
		transition: background-color 0.2s ease-in-out;

		.text {
			padding: 0 10px;
			transition: color 0.2s ease-in-out;
      flex: 1;
      text-align: left;
		}

		.selection {
			width: 30px;
			height: 30px;
			background-color: #C4C4C4;
			transition: background-color 0.2s ease-in-out;
		}
	}

    input:checked + label .image-expand {
        svg {
            fill: #F2F2F2;
        }
    }

	.image-expand {

        svg {
            transition: all 0.2s ease-in-out;
            fill: #525252;
        }
    }
}
</style>
