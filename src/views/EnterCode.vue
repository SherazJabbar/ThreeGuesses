<template>
    <div class="container mx-auto px-8">
      <div class="mt-16 text-center">
        <div class="flex flex-col items-center mb-14">
          <img src="../assets/handvictor-8.png" class="w-max" />
          <img src="../assets/Title.png" class="w-max mt-4" />
        </div>
  
        <div>
          <h1 class="sub-heading text-color tracking-widest">ENTER GAME CODE</h1>
        </div>
  
        <div>
          <input type="text" placeholder="xxxx" class="bg-transparent input-field my-4" />
        </div>
  
        <div>
          <button
            type="button"
            class="text-white bg-btn-primary border-4 p-3 border-white main-btn font-normal w-full md:w-auto"
          >
            Join Game
          </button>
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
  