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
          <a class="image-expand">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33334 5.33329H14.6667V2.66663H5.33334C3.86667 2.66663 2.66667 3.86663 2.66667 5.33329V14.6666H5.33334V5.33329ZM13.3333 17.3333L8.00001 24H24L20 18.6666L17.2933 22.28L13.3333 17.3333ZM22.6667 11.3333C22.6667 10.2266 21.7733 9.33329 20.6667 9.33329C19.56 9.33329 18.6667 10.2266 18.6667 11.3333C18.6667 12.44 19.56 13.3333 20.6667 13.3333C21.7733 13.3333 22.6667 12.44 22.6667 11.3333ZM26.6667 2.66663H17.3333V5.33329H26.6667V14.6666H29.3333V5.33329C29.3333 3.86663 28.1333 2.66663 26.6667 2.66663ZM26.6667 26.6666H17.3333V29.3333H26.6667C28.1333 29.3333 29.3333 28.1333 29.3333 26.6666V17.3333H26.6667V26.6666ZM5.33334 17.3333H2.66667V26.6666C2.66667 28.1333 3.86667 29.3333 5.33334 29.3333H14.6667V26.6666H5.33334V17.3333Z"/>
            </svg>
          </a>
        </label>
      </div>
      <div class="item">
        <input type="radio" id="item-4" name="items" class="visually-hidden">
        <label for="item-4">
          <span class="selection"></span>
          <span class="text">Kyle</span>
          <a class="image-expand">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33334 5.33329H14.6667V2.66663H5.33334C3.86667 2.66663 2.66667 3.86663 2.66667 5.33329V14.6666H5.33334V5.33329ZM13.3333 17.3333L8.00001 24H24L20 18.6666L17.2933 22.28L13.3333 17.3333ZM22.6667 11.3333C22.6667 10.2266 21.7733 9.33329 20.6667 9.33329C19.56 9.33329 18.6667 10.2266 18.6667 11.3333C18.6667 12.44 19.56 13.3333 20.6667 13.3333C21.7733 13.3333 22.6667 12.44 22.6667 11.3333ZM26.6667 2.66663H17.3333V5.33329H26.6667V14.6666H29.3333V5.33329C29.3333 3.86663 28.1333 2.66663 26.6667 2.66663ZM26.6667 26.6666H17.3333V29.3333H26.6667C28.1333 29.3333 29.3333 28.1333 29.3333 26.6666V17.3333H26.6667V26.6666ZM5.33334 17.3333H2.66667V26.6666C2.66667 28.1333 3.86667 29.3333 5.33334 29.3333H14.6667V26.6666H5.33334V17.3333Z"/>
            </svg>
          </a>
        </label>
        <div class="accordion">
          <h2>Primary</h2>
          <p>End of Command Phase, 5VP (15VP max) for:</p>
          <ul>
            <li>Control 1 or more objectives</li>
            <li>Control 2 or more objectives</li>
            <li>Control more objectives than the opponent</li>
          </ul>
          <h2>Secondary</h2>
          <p>
            Minimise Losses (End Game): 
          At the start of the battle, add up the number of units in 
          your army — this is your army’s Strength. If a unit splits 
          to form two or more individual units during the battle, then 
          immediately increase your army’s Strength accordingly 
          (e.g. if one unit in your army splits to form three individual 
          units, your army’s Strength is increased by 2). 
          If a unit merges with another to form a combined unit 
          during the battle, then decrease your army’s strength 
          accordingly (e.g. if two units from your army merge to 
          form one unit, you immediately decrease your army’s 
          strength by 1). At the end of the battle, add up how many 
          units from your army are left on the battlefield, including 
          all units embarked within TRANSPORTS, but excluding all 
          units that have been added to your army during the battle. 
          If the total is 75% or more of your army’s Strength, score 
          15 victory points; if the total is less than 75%, but is 50% 
          or more of your army's Strength, score 10 victory points; 
          if the total is less than 50%, but is 25% or more of your 
          army's Strength, score 5 victory points.
          </p>
        </div>
      </div>

      <div class="item">
        <input type="radio" id="item-5" name="items" class="visually-hidden">
        <label for="item-5">
          <span class="text"><span class="value">0/4</span> Purge the Enemy</span>
        </label>
        <div class="accordion">
          <div class="item with-text">
            <input type="radio" id="item-6" name="items" class="visually-hidden">
            <label for="item-6">
              <span class="selection"></span>
              <span class="text">Assassinate</span>
              <p>Score 3 victory points at the end of the battle for each enemy <strong>CHARACTER</strong> model that is destroyed.</p>
            </label>
          </div>  
          <div class="item with-text">
            <input type="radio" id="item-7" name="items" class="visually-hidden">
            <label for="item-7">
              <span class="selection"></span>
              <span class="text">Bring It Down</span>
              <p>Score 2 victory points at the end of the battle for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 10 or less that is destroyed, and 3 victory points for each enemy <strong>MONSTER</strong> or <strong>VEHICLE</strong> model with a Wounds characteristic of 11 or more that is destroyed.</p>
            </label>
          </div>   
        </div>
      </div>
    </div>
    <div class="modal-image">
      <div class="content">
        <img src="assets/maps/RetrievalMission.png" alt="">
      </div>
    </div>
  </div>

  <button class="big black ui button wizard-step-button">Next</button>
  

  
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    
  } }
  }
})
export default class NewGame extends Vue {}
</script>


<style lang="scss" scoped>
.new-game-component {
	padding-bottom: 60px;
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
		min-height: calc(100vh - 160px);
		padding: 10px;
	}

	.wizard-step-button {
    height: 50px;
    width: 90%;
    align-self: center;
	}

	h1 { 
    font-family: 'Roboto Condensed', sans-serif;
    text-align: left;
  }
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

    &.with-text {
      margin: 0;

      + .with-text {
        margin-top: 10px;
      }

      label {
        height: auto;
        background-color: #e2e2e2;
        padding: 10px;
        flex-wrap: wrap;
      }

      p {
        font-weight: normal;
        padding: 10px 0;
        line-height: 1;
      }
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

  .accordion {
    display: none;
    text-align: left;
    padding: 10px;
    font-weight: normal;
    color: black;
    
    h2 { font-size: 1.2rem; }
    p, li { font-size: 1rem; }
    ul { padding: 0 20px; }
  }

  input:checked + label + .accordion {
    display: block;
  }

	.image-expand {

        svg {
            transition: all 0.2s ease-in-out;
            fill: #525252;
        }
    }
}

.modal-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none; // flex
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.6);

  .content {
    width: 100%;
    background-color: white;


    img {
      width: 100%;
    }
  }
}
</style>
