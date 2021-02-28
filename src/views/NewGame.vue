<template>
  <div class="new-game-component">
    <div class="small-logo">
      <img src="assets/logo.svg" />
    </div>
    <div class="wizard-step battle-size">
      <h1>Pick Opponent</h1>

      <div class="list">
        <item-list title="George" counter="1"></item-list>
        <item-list title="Kyle" counter="2"></item-list>
        <item-list title="Kyle" counter="3" image="hello"></item-list>
        <item-list title="Kyle" counter="4" image="hello" content="<h2>Primary</h2>
            <p>End of Command Phase, 5VP (15VP max) for:</p>
            <ul>
              <li>Control 1 or more objectives</li>
              <li>Control 2 or more objectives</li>
              <li>Control more objectives than the opponent</li>
            </ul>
            <h2>Secondary</h2>
            <p>
              Minimise Losses (End Game): At the start of the battle, add up the
              number of units in your army — this is your army’s Strength. If a
              unit splits to form two or more individual units during the
              battle, then immediately increase your army’s Strength accordingly
              (e.g. if one unit in your army splits to form three individual
              units, your army’s Strength is increased by 2). If a unit merges
              with another to form a combined unit during the battle, then
              decrease your army’s strength accordingly (e.g. if two units from
              your army merge to form one unit, you immediately decrease your
              army’s strength by 1). At the end of the battle, add up how many
              units from your army are left on the battlefield, including all
              units embarked within TRANSPORTS, but excluding all units that
              have been added to your army during the battle. If the total is
              75% or more of your army’s Strength, score 15 victory points; if
              the total is less than 75%, but is 50% or more of your army's
              Strength, score 10 victory points; if the total is less than 50%,
              but is 25% or more of your army's Strength, score 5 victory
              points.
            </p>"></item-list>
        <item-list title="Purge The Enemy" counter="5" innerComponent="true">
          <item-list isChild="true" title="Assassinate" counter="6" subtitle="Score 3 victory points at the end of the battle for each enemy<strong>CHARACTER</strong> model that is destroyed."></item-list>
          <item-list isChild="true" title="Bring It Down" counter="7" subtitle="Score 2 victory points at the end of the battle for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 10 or less that is destroyed, and 3 victory points for each enemy <strong>MONSTER</strong> or <strong>VEHICLE</strong> model with a Wounds characteristic of 11 or more that is destroyed."></item-list>
        </item-list>
      </div>
    </div>

    <button class="big black ui button wizard-step-button">Next</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemList from "../components/ItemList.vue";

@Component({
  components: {
    ItemList
  }
})
export default class NewGame extends Vue {}
</script>

<style lang="scss" scoped>
.new-game-component {
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;

  .small-logo {
    height: 50px;
    text-align: center;
    background-color: #fff;

    img {
      height: 100%;
    }
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
    font-family: "Roboto Condensed", sans-serif;
    text-align: left;
  }
}
</style>
