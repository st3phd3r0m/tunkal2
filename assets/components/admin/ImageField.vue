<template> 
	<li v-if="toShow" class="list-group-item">
		<div :id="'posts_images_'+fieldid" class="row align-items-center p-2">
			<fieldset class="form-group col-6">
				<div class="custom-file">
					<input type="file" :id="'posts_images_'+fieldid+'_imageFile_file'" :name="'posts[images]['+fieldid+'][imageFile][file]'" class="custom-file-input"  v-on:change="updateFile" />
					<label :for="'posts_images_'+fieldid+'_imageFile_file'" class="custom-file-label">
					</label>
				</div>
			</fieldset>
			<div class="col-3">
				<img class="w-50" v-if="updated" :src="updatedFile" alt="">
				<img class="w-50" v-else :src="'/media/cache/min300/images/'+image" alt="">
			</div>
			<div class="col-3">
				<a href="#" v-on:click="removeImageField">
					<i class="fas fa-minus"></i>
					Enlever cette image
				</a>
			</div>
		</div>
	</li>
</template>

<script>
export default {
  name: "image-field",
  delimiters: ["${", "}$"],
  props: {
    fieldid: Number,
    image: String,
  },
  data() {
    return {
      toShow: true,
      updatedFile: "",
      updated: false,
    };
  },
  methods: {
    removeImageField: function(event) {
      event.preventDefault();
      this.toShow = false;
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
};
</script>
