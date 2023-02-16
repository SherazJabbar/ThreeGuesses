<template>
  <span
    class="sub-heading-3 p-8 hidden md:flex flex-col relative w-max text-color tracking-widest"
  >
    <span>Time Left</span>
    <span class="text-center">01:52</span>
  </span>

  <div class="mt-0 mx-auto px-8">
    <div class="grid grid-cols-31 gap-4 items-center md:grid-cols-3">
  <div class="justify-self-end hidden md:block">
    <img src="../assets/handvictor-8.png" class="w-max rotate-90" />
  </div>
  <div class="justify-self-start md:justify-self-center flex flex-row md:flex-col items-center">
    <div class="player-turn-img m-4">
      <img src="../assets/img-3.png" class="h-full" />
    </div>
    <div class="text-center">
      <h1 class="sub-heading-3 small-text text-color">
        <span class="color-blueseil">Player 2</span><span>'s Turn</span>
      </h1>
    </div>
  </div>
  <div class="justify-self-start hidden md:block">
    <img src="../assets/handvictor-8.png" class="w-max -rotate-90" />
  </div>
</div>

  </div>

  <div class="container mt-0 md:mt-8 mx-auto px-8">
    <div class="flex flex-col md:flex-row justify-center items-center gap-y-3 gap-x-8">
        <div class="title-img overflow-hidden">
          <img src="../assets/option-img-2.png" class="w-full h-full object-cover" />
        </div>
        <div class="title-img overflow-hidden">
          <img src="../assets/option-img-1.png" class="w-full h-full object-cover" />
        </div>
        <div class="title-img overflow-hidden">
          <img src="../assets/game-img-3.png" class="w-full h-full object-cover" />
        </div>
        </div>
  </div>

  <div class="container mt-3.5 md:mt-8 mx-auto px-8">
    <div>
        <h1 class="sub-heading medium-text text-color tracking-widest text-center">GUESS THE TITLE</h1>
      </div>

      <div class="text-center">
      <input type="text" class="bg-transparent w-3/4 input-field my-4" />
      <div>
      <button
        type="button"
        class="text-white bg-btn-primary border-3 px-10 py-3 border-white w-auto"
      >
        GO!
      </button>
    </div>

    <div
        class="normal-text block md:hidden py-3 relative text-color tracking-widest float-right"
      >

      <div class="relative  flex flex-col">
        <span>Time Left</span>
        <span class="text-center">01:52</span>
    </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
