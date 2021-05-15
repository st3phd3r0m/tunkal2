import Vue from 'vue';
import CommentList from './CommentList.vue';
import CommentButton from './CommentButton.vue'

new Vue({
  el: '#comments',
  delimiters: ['${', '}$'],
  components: {
    CommentList,
    CommentButton
  },
  data: {
    slug: '',
    numberofpages: null,
    page: 0,
    data: []
  },
  mounted() {
    this.slug = this.$el.dataset.slug;
    this.numberofpages = Number(this.$el.dataset.numberofpages);
  },
  methods: {
    onCallComments: function () {
        this.page++;
        if(this.page<= this.numberofpages){
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
                    this.data = object.data;
                }
            );
        }
    },
    zeroPage: function () {
        this.page=0;
        this.data=[];
    }
  },
})

