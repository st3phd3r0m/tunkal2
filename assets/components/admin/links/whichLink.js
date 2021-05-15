import Vue from 'vue';
import CategoriesPostsFields from './CategoriesPostsFields.vue';

new Vue({
  el: '#linkForm',
  delimiters: ['${', '}$'],
  components: {
    CategoriesPostsFields
  },
  data: {
    type: '',
    selectFieldValue:''
  },
  methods: {
    onGetLinkType: function (event) {
        this.type = event.target.value;
    },
    onClickChild (value) {
      this.selectFieldValue = value;
    }
  },
})