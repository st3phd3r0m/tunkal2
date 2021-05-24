import Vue from 'vue';
import MessageApi from './MessageApi.vue';

new Vue({
  el: '#courrielsTable',
  delimiters: ['${', '}$'],
  components: {
    MessageApi
  },
  data: {
    courrielsToDelete: [],
    messageApi:'',
    successApi: false,
    failApi: false
  },
  methods: {
    onStoreCourrielsToDelete: function (event) {
        let checkBox = event.target;
        let object = {
            'id': checkBox.dataset.courrielid,
            'token': checkBox.dataset._token
        };
        if (checkBox.checked) {
            this.courrielsToDelete.push(object);
        } else {
            this.courrielsToDelete = this.courrielsToDelete.filter( el => { return (el.id != object.id) && (el.token != object.token); } );
        }
    },
    deleteCourriels: function(){
        let doneCount = 0;
        for (let courriel of this.courrielsToDelete) {
            fetch(
                '/admin/api/courriels/' + courriel.id,
                {
                    method: 'DELETE',
                    mode: 'same-origin',
                    headers: {
                        "Authorization": courriel.token,
                        "X-Requested-With": 'XMLHttpRequest'
                    }
                }
            ).then((response) => {
                if (response.status == 200) {
                    $("#courriel_" + courriel.id).parents("tr").remove();
                    this.messageApi = 'Elément(s) supprimés';
                    this.successApi=true;
                    this.failApi=false;
                } else {
                    this.messageApi = "Une erreur est survenue: " + response.status + " " + response.statusText;
                    this.successApi=false;
                    this.failApi=true;
                }
                doneCount++;
                if (doneCount == this.courrielsToDelete.length) {
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
        this.courrielsToDelete = [];
        // try {
        //     window.location.reload();
        // } catch (error) {
        //     console.log(error);
        // }
    }

  },
})