<template>
  <div class="alert" :class="{'alert-success': success, 'alert-warning': fail }" role="alert">{{message}}</div>
</template>

<script>
export default {
  name: "message-api",
  delimiters: ["${", "}$"],
  props: {
    message: String,
    success: Boolean,
    fail: Boolean
  }
};
</script>
