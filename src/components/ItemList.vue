<template>
    <div class="item" v-bind:class="{ 'with-text': isChild }">
        <input
          type="radio"
          v-bind:id="'item-' + counter"
          name="items"
          class="visually-hidden"
        />
        <label v-bind:for="'item-' + counter">
          <span class="selection" v-if="!innerComponent"></span>
          <span class="text"><span v-if="innerComponent" class="value">0/4 </span>{{ title }}</span>
          <p v-if="subtitle" v-html="subtitle"></p>
          <a class="image-expand" v-if="image">
              <i class="far fa-image"></i>
            </a>
        </label>
        <div class="accordion" v-if="!innerComponent && content" v-html="content"></div>
        <div class="accordion" v-if="innerComponent"><slot></slot></div>
      </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ItemList extends Vue {
  @Prop() private counter!: number;
  @Prop() private title!: string;
  @Prop() private subtitle!: string;
  @Prop() private content!: string;
  @Prop() private image!: string;
  @Prop() private innerComponent!: boolean;
  @Prop() private isChild!: boolean;
}
</script>

<style lang="scss" scoped>
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
      background-color: #a32121;
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
      background-color: #c4c4c4;
      transition: background-color 0.2s ease-in-out;
    }
  }

  input:checked + label .image-expand {
    color: #f2f2f2;
  }

  .accordion {
    display: none;
    text-align: left;
    padding: 10px;
    font-weight: normal;
    color: black;

    h2 {
      font-size: 1.2rem;
    }
    p,
    li {
      font-size: 1rem;
    }
    ul {
      padding: 0 20px;
    }
  }

  input:checked + label + .accordion {
    display: block;
  }

  .image-expand {
    font-size: 2rem;
    transition: all 0.2s ease-in-out;
    color: #525252;
  }
</style>