import Vue from 'vue';

let ErrorTitle = Vue.component('error-title',
{
    delimiters: ['${', '}$'],
    props: {
      messageTitle: String
    },
    template: '<span class="text-danger"> ${ messageTitle }$ </span>'
})

let ErrorDescription = Vue.component('error-description',
{
    delimiters: ['${', '}$'],
    props: {
      messageDescription: String
    },
    template: '<span class="text-danger"> ${ messageDescription }$ </span>'
})

new Vue({
  el: '#metaTitle',
  delimiters: ['${', '}$'],
  components: {
    ErrorTitle
  },
  data: {
    constraints: [],
    errorTitleMessage: ''
  },
  methods: {
    onCheckLength: function(e){
        let value = e.target.value;
        let constraints = this.constraints;
        if( value.length > constraints.max ){
            this.errorTitleMessage = constraints.maxMessage.replace('{{ limit }}', constraints.max );
        }else if( value.length < constraints.min ){
            this.errorTitleMessage = constraints.minMessage.replace('{{ limit }}', constraints.min );
        }else{
            this.errorTitleMessage ='';
        }
    }
  },
  mounted() {
    this.constraints = JSON.parse(this.$el.dataset.constraints);
  },
})

new Vue({
  el: '#metaDescription',
  delimiters: ['${', '}$'],
  components: {
    ErrorDescription
  },
  data: {
    constraints: [],
    errorDescriptionMessage: ''
  },
  methods: {
    onCheckLength: function(e){
        let value = e.target.value;
        let constraints = this.constraints;
        if( value.length > constraints.max ){
            this.errorDescriptionMessage = constraints.maxMessage.replace('{{ limit }}', constraints.max );
        }else if( value.length < constraints.min ){
            this.errorDescriptionMessage = constraints.minMessage.replace('{{ limit }}', constraints.min );
        }else{
            this.errorDescriptionMessage ='';
        }
    }
  },
  mounted() {
    this.constraints = JSON.parse(this.$el.dataset.constraints);
  },
})