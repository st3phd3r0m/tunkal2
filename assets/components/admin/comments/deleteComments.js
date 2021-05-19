import Vue from 'vue';
import MessageApi from './MessageApi.vue';

new Vue({
  el: '#commentsTable',
  delimiters: ['${', '}$'],
  components: {
    MessageApi
  },
  data: {
    commentsToDelete: [],
    messageApi:'',
    successApi: false,
    failApi: false
  },
  methods: {
    onStoreCommentsToDelete: function (event) {
        let checkBox = event.target;
        let object = {
            'id': checkBox.dataset.commentid,
            'token': checkBox.dataset._token
        };
        if (checkBox.checked) {
            this.commentsToDelete.push(object);
        } else {
            this.commentsToDelete = this.commentsToDelete.filter( el => { return (el.id != object.id) && (el.token != object.token); } );
        }
    },
    deleteComments: function(){
        let doneCount = 0;
        for (let comment of this.commentsToDelete) {
            fetch(
                '/admin/api/comments/' + comment.id,
                {
                    method: 'DELETE',
                    mode: 'same-origin',
                    headers: {
                        "Authorization": comment.token,
                        "X-Requested-With": 'XMLHttpRequest'
                    }
                }
            ).then((response) => {
                if (response.status == 200) {
                    $("#comment_" + comment.id).parents("tr").remove();
                    this.messageApi = 'Elément(s) supprimés';
                    this.successApi=true;
                    this.failApi=false;
                } else {
                    this.messageApi = "Une erreur est survenue: " + response.status + " " + response.statusText;
                    this.successApi=false;
                    this.failApi=true;
                }
                doneCount++;
                if (doneCount == this.commentsToDelete.length) {
                    this.tryToRefresh();
                }
            }).catch((error) => {
                this.messageApi = "Une erreur est survenue: " + error.message;
                this.successApi=false;
                this.failApi=true;
            });
        }
    },

    tryToRefresh: function(){
        this.commentsToDelete = [];
        try {
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

  },
})