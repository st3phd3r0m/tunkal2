<template>
  <div v-show="showlist">
    <div class="comment" v-for="comment in comments" :key="comment.id">
      <p><span class="pseudo">{{ comment.pseudo }}</span>, le <span class="sent_at">{{ comment.created_at }}</span> :</p>
      <p class="comment_content">{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-list",
  delimiters: ["${", "}$"],
  props: {
    comments: Array,
    showlist: Boolean
  }
};
</script>
