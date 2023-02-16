<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 z-50 overflow-auto bg-black bg-opacity-75"
    @click="toggleModal"
  >
    <div class="relative mx-auto my-0 max-w-3xl h-screen p-10">
      <img :src="require(`../../assets/${src}`)" class="modal-img border-2 border-pink" />
    </div>
  </div>
 
  <!-- asdasdasdsad -->
</template>

<script>
export default {
  props: {
    src: String,
  },
  mounted(){
  },
  data() {
    return {
      toggleValue: false,
    };
  },
  methods: {
    toggleModal() {
      this.$emit("toggle", this.toggleValue);
    },
    openImageModal(){
        document.body.style.overflow = "hidden"
    }
  },
  watch:{
    "src" : {
        handler(){
            this.openImageModal();
        }
    }
  }
};
</script>

<style scoped></style>
