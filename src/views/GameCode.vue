<template>
  <div class="container mx-auto px-8">
    <div class="mt-4 md:mt-8 text-center">
      <div class="flex flex-col items-center mb-5 md:mb-8">
        <img src="../assets/handvictor-8.png" class="w-max" />
        <img src="../assets/Title.png" class="w-1/2 md:w-1/4 mt-4" />
      </div>

      <div class="my-2">
        <h1 class="sub-heading text-color tracking-widest">
          GAME CODE: <span class="color-pink">5426</span>
        </h1>
      </div>

      <div>
        <h1 class="sub-heading-3 small-text text-color tracking-widest py-1">
          Share with your friends to play!
        </h1>
      </div>

      <div>
        <h1 class="sub-heading-3 small-text text-color tracking-widest py-1">
          You can start when everyone has arrived.
        </h1>
      </div>

      <div>
        <h1 class="sub-heading text-color tracking-widest pt-10">CURRENT PLAYERS</h1>
      </div>
      <div>
        <div class="players-div py-5 mx-auto">
          <div class="grid grid-cols-3 gap-4">
            <div class="cols-1 justify-self-center">
              <div class="player-img">
                <img src="../assets/img-1.png" class="" />
              </div>
              <div class="py-2 text-white players-text">Player 1</div>
            </div>
            <div class="cols-1 justify-self-center">
              <div class="player-img">
                <img src="../assets/img-2.png" class="" />
              </div>
              <div class="py-2 text-white players-text">Player 2</div>
            </div>
            <div class="cols-1 justify-self-center">
              <div class="player-img">
                <img src="../assets/img-3.png" class="" />
              </div>
              <div class="py-2 text-white players-text">Player 3</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-5">
        <router-link  :to="{ name: 'EnterCode' }" >
        <button
          type="button"
          class="text-white bg-btn-primary border-4 p-3 border-white main-btn font-normal w-full md:w-auto"
        >
          START!
        </button>
      </router-link>
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
