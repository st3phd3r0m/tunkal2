<template>
    <div>
        <div class="form-group" v-if="fieldtype=='category'">
            <label for="category">Sélectionnez une catégorie</label>
            <select id="category" name="category" class="form-control" v-on:click="onClickedEvent">
                <option v-for="item in items" :key="item.id" :value="item.slug">{{ item.name }}</option>
            </select>
        </div>
        <div class="form-group" v-if="fieldtype=='post'">
            <label for="post">Sélectionnez un article</label>
            <select id="post" name="post" class="form-control" v-on:click="onClickedEvent">
                <option v-for="item in items" :key="item.id" :value="item.slug">{{ item.title }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: "categories-posts-fields",
    delimiters: ["${", "}$"],
    props:{
        fieldtype: String
    },
    data() {
        return {
            apiurl:[],
            _token: '',
            items: null,
        }
    },
    mounted() {
        this.apiurl = JSON.parse(this.$el.dataset.apiurl);
        this._token = this.$el.dataset._token;
    },
    methods: {
        ajaxCall: function(){
            let _token = this._token;
            let url = this.apiurl[this.fieldtype];
            if(null != url){
                fetch(
                    url,
                    {
                        method: 'GET',
                        mode: 'same-origin',
                        headers: {
                            "X-Requested-With": 'XMLHttpRequest',
                            "Authorization": _token
                        }
                    }
                ).then(
                    response => response.text()
                ).then(
                    value => {
                        let items = JSON.parse(value);
                        if (items.data.length == 0) {
                            //Message utilisateur au cas où la requete ajax retourne un tableau vide 
                            this.items = 'Aucun élément de ce type en bdd';
                        } else {
                            this.items = items.data;
                        }
                    }
                );
            }
        },
        onClickedEvent: function(event){
            let value = event.target.value;
            value = '/'+this.fieldtype+'/'+value;
            this.$emit('clicked', value);
        }
    },
    watch: {
        fieldtype: function() {
            this.ajaxCall();
        }
    }
};
</script>