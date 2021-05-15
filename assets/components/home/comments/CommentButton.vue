<template>
  <div>
    <p v-if="numberofpages==0">0 commentaire pour cet article.</p>
    <p v-if="numberofpages>0 && page==0" v-on:click="onClickCommentButton">Voir les commentaires <i class="fas fa-caret-down"></i></p>
    <p v-if="numberofpages>0 && page<numberofpages && page>0" v-on:click="onClickCommentButton">Voir les autres commentaires <i class="fas fa-caret-down"></i></p>
    <p v-if="numberofpages>0 && page==numberofpages" v-on:click="onClickZero">Fermer les commentaires <i class="fas fa-caret-up"></i></p>    
  </div>
</template>

<script>
export default {
  name: "comment-button",
  delimiters: ["${", "}$"],
  props: {
    numberofpages: Number,
    page: Number,
  },
  methods: {
    onClickCommentButton: function() {
      this.$emit('clicked');
    },
    onClickZero: function() {
      this.$emit('clickedzero');
    },
  },
};
</script>
