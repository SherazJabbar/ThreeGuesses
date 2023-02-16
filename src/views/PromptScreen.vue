<template>
  <span
    class="sub-heading-3 p-8 hidden md:flex flex-col relative w-max text-color tracking-widest"
  >
    <span>Time Left</span>
    <span class="text-center">01:52</span>
  </span>
  <div class="container mt-2 md:mt-0 mx-auto px-8">
    <div class="text-center">
      <div class="grid lg:grid-cols-2 items-end justify-center">
        <div class="sm:grid-cols-1 md:grid-cols-1">
          <h1
            class="sub-heading medium-text-2 text-color text-center xl:text-right movie-title-text"
          >
            MOVIE TITLE
          </h1>
          <h1
            class="sub-heading medium-text-2 color-pink text-center xl:text-right title-name-text"
          >
            BACK TO THE FUTURE
          </h1>
          <div class="flex justify-center lg:justify-end">
            <div class="border-2 border-pink my-4 video-div relative">
              <video
                ref="videoPlayer"
                class="absolute top-0 left-0 right-0 bottom-0 mx-auto h-full object-center object-cover"
                controls
              >
                <source src="../assets/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                v-if="showPlayIcon"
                class="absolute inset-0 flex items-center justify-center"
              >
                <button class="rounded-full" @click="playVideo">
                  <img class="w-12 h-12" src="../assets/play-btn.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:grid-cols-1 md:grid-cols-1 excluded-words-area">
          <h1 class="sub-heading-2 color-red">EXCLUDED WORDS</h1>
          <div class="flex justify-center">
            <div
              class="border-2 border-red h-excluded-words my-2 md:my-5 w-full lg:w-3/4"
              ref="scrollDiv"
            >
              <div class="flex lg:flex-col gap-y-4 my-3">
                <div class="px-4 sub-heading-2 text-color">Car</div>
                <div class="px-4 sub-heading-2 text-color">Future</div>
                <div class="px-4 sub-heading-2 text-color">Scientist</div>
                <div class="px-4 sub-heading-2 text-color">Past</div>
                <div class="px-4 sub-heading-2 text-color">Mother</div>
                <div class="px-4 sub-heading-2 text-color">Fire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto text-center mt-2 md:mt-8 mb-2 px-8">
    <h1 class="sub-heading medium-text text-color tracking-widest">
      <div class="flex flex-col lg:block">
        ENTER PROMPT
        <span class="color-blueseil small-text sm:mt-2 lg:mt-0"
          >(1 prompt left)</span
        >
      </div>
    </h1>

    <div>
      <textarea
        type="text"
        class="bg-transparent w-3/4 input-field my-4"
      ></textarea>
    </div>

    <div>
      <button
        type="button"
        class="text-white bg-btn-primary border-3 p-3 border-white main-btn w-full md:w-auto"
      >
        GENERATE IMAGES
      </button>
    </div>

    <!-- IF CONDITION FOR PROMPT ERROR -->
    <!-- <div class="mt-14 lg:mt-8">
      <h1 class="sub-heading-3 text-error tracking-widest my-8">
        Prompt must not include any excluded word!
      </h1>
    </div> -->
    <!-- IF CONDITION ENDS HERE -->
  </div>

  <div class="grid grid-cols-12 items-end px-5 my-5">
    <div class="col-span-6 lg:col-span-2 lg:mt-0">
      <div class="flex lg:flex-col mt-4 lg:mt-0 gap-x-4 gap-y-4">
        <div class="next-option-img overflow-hidden">
          <img
            src="../assets/option-img-1.png"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="next-option-img">
          <img
            src="../assets/option-img-2.png"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-8 order-first lg:order-none">
      <div class="my-4 hidden md:block">
        <h1 class="sub-heading-2 text-color text-center">CHOOSE ONE</h1>
      </div>
      <div class="flex justify-center gap-x-4">
        <!-- <div class="game-img overflow-hidden" @click="showModal()">
          <img src="../assets/game-img-1.png" class="w-full h-full object-cover" />
        </div> -->
        <div v-for="(img, index) in imageData" :key="index">
          <div
            :id="img.id"
            class="game-img overflow-hidden"
            @click="showModal(img.link, img.id)"
          >
            <img
              :src="require(`../assets/${img.link}`)"
              class="w-full h-full object-cover"
            />
          </div>
          <div :id="`button-${img.id}`" class="block md:hidden my-2 invisible">
            <button
              type="button"
              class="color-pink border-pink border-3 p-1 normal-text w-full"
            >
              CHOOSE
            </button>
          </div>
        </div>
        <!-- <div class="game-img overflow-hidden" @click="showModal()">
          <img :src="require('../assets/game-img-3.png')" class="w-full h-full object-cover" />
        </div> -->
      </div>
    </div>
    <div
      class="col-span-6 lg:col-span-2 mt-4 lg:mt-0 justify-self-end block md:hidden"
    >
      <span
        class="normal-text px-8 flex flex-col relative w-max text-color tracking-widest"
      >
        <span>Time Left</span>
        <span class="text-center">01:52</span>
      </span>
    </div>

    <!-- Modal -->
    <!-- <div
      v-if="showImageModal"
      class="fixed top-0 left-0 bottom-0 right-0 z-50 overflow-auto bg-black bg-opacity-75"
      @click="toggleModal"
    >
      <div class="relative mx-auto my-0 max-w-3xl h-screen p-10">
        <img src="../assets/game-img-2.png" class="modal-img border-2 border-pink" />
      </div>
    </div> -->

    <ImageModal
      v-if="showImageModal"
      @toggle="toggleModal"
      :src="currentImageLink"
    />
  </div>
</template>

<script>
import ImageModal from "../views/components/imageModal.vue";

export default {
  //   mounted() {
  //   if (this.$refs.scrollDiv.offsetWidth >= 360) {
  //     this.$refs.scrollDiv.style.scrollbarWidth = "1px";
  //   }
  // },

  data() {
    return {
      showImageModal: false,
      showPlayIcon: true,
      imageData: [
        { id: 1, link: "game-img-1.png" },
        { id: 2, link: "game-img-2.png" },
        { id: 3, link: "game-img-3.png" },
      ],
      currentImageLink: "",
      previousImageID: "",
      previousButtonID: "",
    };
  },
  methods: {
    playVideo() {
      const videoPlayer = this.$refs.videoPlayer;
      videoPlayer.play();
      videoPlayer.addEventListener("playing", () => {
        this.showPlayIcon = false;
      });
    },
    showModal(imgLink, id) {
      if (this.previousImageID && this.previousButtonID) {
        let imageElement = document.getElementById(this.previousImageID);
        imageElement.classList.remove("clicked-img");
        let buttonElement = document.getElementById(
          this.previousButtonID
        );
        buttonElement.classList.add("invisible");
      }
      let imageElement = document.getElementById(id);
      imageElement.className += " clicked-img";
      this.previousImageID = id;
      let buttonElement = document.getElementById(`button-${id}`);
      buttonElement.classList.remove("invisible");
      this.previousButtonID = `button-${id}`;

      this.showImageModal = true;
      this.currentImageLink = imgLink;
    },
    toggleModal(value) {
      this.showImageModal = value;
    },
  },
  components: {
    ImageModal,
  },
};
</script>

<style></style>
