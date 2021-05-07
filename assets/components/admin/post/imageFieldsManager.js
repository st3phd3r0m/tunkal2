import Vue from 'vue';
import ImageField from './ImageField.vue';

new Vue({
  el: '#imageFields',
  delimiters: ['${', '}$'],
  components: {
    ImageField
  },
  data: {
    counter: [],
    images: null
  },
  mounted() {
    this.counter = [...Array(Number(this.$el.dataset.counter)).keys()];
    this.images = JSON.parse(this.$el.dataset.images);
  },
  methods: {
    addImageField: function (event) {
      event.preventDefault();
      this.counter = ++this.$el.dataset.counter;
    },
  },
})

