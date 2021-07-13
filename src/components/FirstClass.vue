<template>
  <div class="border-bottom">
    First class vue lecture no. 1-10
    <br>
    {{ name1 }}
    {{class}}
    <b v-html="channel"></b>
    <br />
    <b v-html="hack"></b>
    <h2 :id="headingId" :class="headingId">Heading</h2>
    <input :disabled="isDisabled" placeholder="name" />
    <h2 :class="underline">hello</h2>
    <h2 :class="isPromoted && 'promoted'">promoted movies</h2>
    <h2 :class="[isPromoted && 'promoted', isSold ? 'sold' : 'new']">
      Array conditional movies
    </h2>
    <h2
      :class="{
        promoted: isPromoted,
        new: !isSold,
        sold: isSold,
      }"
    >
      object Condition movue
    </h2>
    <div
      :style="{
        color: highLight,
        'font-size': headerSize + 'rem',
        padding: '10px',
      }"
    >
      style binding inline
    </div>
    <div :style="fontStyle">style binding external</div>
  </div>
</template>

<script>
export default {
  name: "FirstClass",
  data() {
    return {
      name1: "shubhendra",
      class: "4",
      channel: "<b>Sunny</b>",
      hack: `<a href="#" onClick="alert('you have been hacked!')">win a prize!<a/>`,
      headingId: "heading",
      isDisabled: false,
      underline: "underline bold italic",
      isPromoted: false,
      isSold: true,
      highLight: "orange",
      headerSize: 2,
      fontStyle: {
        color: "orange",
        "font-size": 2 + "rem",
        padding: "10px",
      },
    };
  },
};
</script>

<style>
.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.bold {
  font-weight: 900;
}
.new {
  color: green;
}
.sold {
  color: red;
}

</style>
