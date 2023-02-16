<template>
  <div class="container mx-auto px-8">
    <div class="mt-4 md:mt-8 text-center">
      <div class="flex flex-col items-center mb-5 md:mb-8">
        <img src="../assets/handvictor-8.png" class="w-max" />
        <img src="../assets/Title.png" class="w-1/2 md:w-1/4 mt-4" />
      </div>

      <div>
        <h1 class="sub-heading text-color tracking-widest">ENTER GAME CODE</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="xxxx"
          class="bg-transparent input-field my-4"
        />
      </div>

      <div>
        <router-link :to="{name : 'Lobby'}">
          <button
            type="button"
            class="text-white bg-btn-primary border-4 p-3 border-white main-btn font-normal w-full md:w-auto"
          >
            Join Game
          </button>
        </router-link>
      </div>

      <!-- IF CONDITION FOR LOGIN ERROR -->
      <!-- <div>
        <h1 class="sub-heading text-error tracking-widest">WRONG INFO!</h1>
      </div> -->
      <!-- IF CONDITION ENDS HERE -->
    </div>
  </div>
</template>

<script>
import title from "./components/title.vue";
export default {
  components: {
    title,
  },
};
</script>

<style scoped></style>
