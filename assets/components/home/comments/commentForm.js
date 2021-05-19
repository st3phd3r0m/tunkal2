import Vue from 'vue';

new Vue({
  el: 'form',
  delimiters: ['${', '}$'],
  data: {
    _token: '',
    formConstraints: null,
    disabled: true,
    errormessages: {
      commentsPseudo: '',
      commentsContent: '',
      commentsNosiar: ''
    },
    messageapi:'',
    classCommentSent: ''
  },
  mounted() {
    let form = this.$el;
    let formData = new FormData(form);
    this._token = formData.get('comments[_token]');

    let formConstraints = [];
    for (let key of formData.keys()) {
      let el = document.querySelector('[name="' + key + '"]');
      if (null != el.dataset.constraints) {
        formConstraints[key] = JSON.parse(el.dataset.constraints);
      }
    }
    this.formConstraints = formConstraints;
  },
  methods: {
    onCheckFields: function () {
      let form = this.$el;
      let formData = new FormData(form);
      for (let fieldName in this.formConstraints) {
        this.errormessages[this.normalizeFieldName(fieldName)] = '';
        for (let constraint of this.formConstraints[fieldName]) {
          this.errormessages[this.normalizeFieldName(fieldName)] += this[constraint.name + 'Check'](constraint.constraintWidget, formData.get(fieldName));
        }
      }
      this.disabled = this.toggleButton();
    },
    normalizeFieldName: function (fieldName) {
      fieldName = fieldName.replace("]", '');
      fieldName = fieldName.split('[');
      fieldName[1] = fieldName[1].charAt(0).toUpperCase() + fieldName[1].slice(1);
      fieldName = fieldName.join('');
      return fieldName;
    },
    notBlankCheck: function (constraintWidget, value) {
      if (value == '') {
        return constraintWidget.message + '; ';
      }
      return '';
    },
    lengthCheck: function (constraintWidget, value) {
      if (value.length < constraintWidget.min) {
        return constraintWidget.minMessage.replace('{{ limit }}', constraintWidget.min) + '; ';
      }
      if (value.length > constraintWidget.max) {
        return constraintWidget.minMessage.replace('{{ limit }}', constraintWidget.max) + '; ';
      }
      return '';
    },
    regexCheck: function (constraintWidget, value) {
      let regex = new RegExp(constraintWidget.pattern.slice(1, -1));
      if (!regex.test(value)) {
        return constraintWidget.message + '; ';
      }
      return '';
    },
    blankCheck: function (constraintWidget, value) {
      if (value != '') {
        return constraintWidget.message + '; ';
      }
      return '';
    },
    toggleButton: function () {
      for (let fieldName in this.errormessages) {
        if (this.errormessages[fieldName] != '') {
          return true;
        }
      }
      return false;
    },
    onSendComment: function(event){
      event.preventDefault();
      this.onAjaxCall();
    },
    onAjaxCall: function () {
      let form = this.$el;
      let slug = form.dataset.slug;
      let formData = new FormData(form);

      let dataToSend = {};
      for (let field of formData.entries()) {
        dataToSend[field[0].replace('comments[', '').replace(']', '')] = field[1];
      }

      fetch(
        '/api/comments/post/' + slug,
        {
          method: 'POST',
          mode: 'same-origin',
          headers: {
            "Authorization": this._token,
            "Content-type": 'application/json',
            "X-Requested-With": 'XMLHttpRequest'
          },
          body: JSON.stringify(dataToSend)
        }
      ).then(
        response => {
          if (response.status == 201) {
            form.reset();
            this.messageapi = 'Commentaire enregistré';
            this.classCommentSent = "success";
          } else {
            this.messageapi = 'Un problème est surnenu. Le commentaire n\'a pas été enregistré.';
            this.classCommentSent = "form-error-message";
          }
          this.disabled = true;
          setTimeout(
            this.resetApiMessage
          , 2000);
        },
      );
    },
    resetApiMessage: function(){
      this.messageapi = '';
      this.classCommentSent = '';
    }
  },
})

