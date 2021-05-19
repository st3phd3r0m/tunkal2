import Vue from 'vue';
import CommentList from './CommentList.vue';
import CommentButton from './CommentButton.vue'

new Vue({
  el: '#commentsList',
  delimiters: ['${', '}$'],
  components: {
    CommentList,
    CommentButton
  },
  data: {
    slug: '',
    numberofpages: null,
    page: 0,
    data: [],
    showlist: true
  },
  mounted() {
    this.slug = this.$el.dataset.slug;
    this.numberofpages = Number(this.$el.dataset.numberofpages);
  },
  methods: {
    onCallComments: function () {
       
        if(this.data.length>0 && !this.showlist){
          this.showlist=true;
        }
        
        if(this.page< this.numberofpages && this.showlist){
            this.page++;
            fetch(
                '/api/comments/post/' + this.slug + '?page=' + this.page,
                {
                    method: 'GET',
                    mode: 'same-origin',
                    headers: {
                        "X-Requested-With": 'XMLHttpRequest'
                    }
                }
            ).then(
                response => response.text()
            ).then(
                value => {
                    let object = JSON.parse(value);
                    this.data = this.data.concat(object.data);
                    console.log(this.data);
                }
            );
        }
    },
    zeroPage: function () {
        this.showlist=false;
    }
  },
})

