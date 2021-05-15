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
    selectFieldValue:'',
    updatedFile: "",
    updated: false,
  },
  mounted() {
    this.selectFieldValue = this.$el.dataset.linkurl;
  },
  methods: {
    onGetLinkType: function (event) {
        this.type = event.target.value;
    },
    onClickChild (value) {
      this.selectFieldValue = value;
    },
    updateFile: function(event) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        this.updatedFile = e.target.result;
        this.updated = true;
      };
    },
  },
})