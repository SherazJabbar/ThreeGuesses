<template>
  <div class="container mx-auto px-8">
    <div class="mt-4 md:mt-16 text-center">
      <div class="flex flex-col items-center mb-5 md:mb-14">
        <img src="../assets/handvictor-8.png" class="w-max" />
        <img src="../assets/Title.png" class="w-max mt-4" />
      </div>

      <div class="text-center">
        <h1 class="sub-heading text-color tracking-widest">
          WELCOME, <span class="color-blueseil">DOUG</span>!
        </h1>
      </div>

      <div class="text-center pt-3">
        <div class="my-5">
          <router-link  :to="{ name: 'GameCode' }" >
            <button
              type="button"
              class="text-white bg-btn-primary border-4 p-3 border-white main-btn font-normal w-full md:w-auto"
            >
              CREATE GAME
            </button>
          </router-link>
        </div>

        <div class="my-5">
          <button
            type="button"
            class="text-white bg-btn-primary border-4 p-3 border-white main-btn font-normal w-full md:w-auto"
          >
            JOIN GAME
          </button>
        </div>
      </div>
      <div class="text-center mt-10">
        <span
          class="sub-heading-2 color-pink tracking-wide py-5 cursor-pointer"
        >
          HOW TO PLAY?
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped></style>
