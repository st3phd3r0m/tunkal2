import Vue from 'vue';

let ImageField = Vue.component('image-field', {
  delimiters: ['${', '}$'],
  props: {
    fieldid: Number, 
    image: String,
  },
  data(){
    return{
      toShow: true,
      updatedFile: '',
      updated: false
    }
  },
  methods: {
    removeImageField: function (event){
      event.preventDefault();
      this.toShow = false;
    },
    updateFile: function (event){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        this.updatedFile = e.target.result;
        this.updated = true;
      };
    },
  },
  template: '#image-field-template'
})

new Vue({ 
  el: '#imageFields',
  delimiters: ['${', '}$'],
  components:{
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

