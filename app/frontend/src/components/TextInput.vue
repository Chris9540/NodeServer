<template>
  <div class="text-input-group">
    <input
      class="text-input"
      required
      autocomplete="false"
      v-bind="$attrs"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <span class="text-input-highlight"></span>
    <span class="text-input-bar"></span>
    <label class="text-input-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  inheritAttrs: false,
  props: ["label", "value"],
};
</script>

<style lang="scss">
$textColor: #fff;
$defaultColor: #aaa;
$activeColor: #ddd;

.text-input-group {
  position: relative;
  margin-top: 30px;
  width: 300px;
}

.text-input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 285px;
  border: none;
  border-bottom: 1px solid $defaultColor;
  color: $textColor;
  &:focus {
    outline: none;
  }
}
.text-input[type="text"] {
  text-transform: capitalize;
}

.text-input-label {
  color: $defaultColor;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.text-input {
  &:focus ~ .text-input-label,
  &:valid ~ .text-input-label {
    top: -20px;
    font-size: 14px;
    color: $activeColor;
  }
}

.text-input-bar {
  position: relative;
  display: block;
  width: 300px;

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: $activeColor;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
}

.text-input:focus ~ .text-input-bar {
  &:before,
  &:after {
    width: 50%;
  }
}

.text-input-highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.text-input:focus ~ .text-input-highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

@-webkit-keyframes inputHighlighter {
  from {
    background: $activeColor;
  }

  to {
    width: 0;
    background: transparent;
  }
}

@-moz-keyframes inputHighlighter {
  from {
    background: $activeColor;
  }

  to {
    width: 0;
    background: transparent;
  }
}

@keyframes inputHighlighter {
  from {
    background: $activeColor;
  }

  to {
    width: 0;
    background: transparent;
  }
}
</style>
