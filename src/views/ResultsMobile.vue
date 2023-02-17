<template>
  <div class="small-screen-table">
    <div class="container mx-auto px-8 text-center">
      <div class="mt-4 md:mt-16">
        <div>
          <h1 class="sub-heading text-color tracking-widest">LEADERBOARD</h1>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <table class="table-auto w-full text-center">
              <thead class="text-white font-bold">
                <tr>
                  <th class="px-4 column-width">&nbsp;</th>
                  <th class="px-4 column-width score-mobile">
                    <div class="text-center">
                      <h1 class="normal-text small-text color-blueseil">
                        <span>Score</span>
                      </h1>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody class="text-white font-medium">
                <tr>
                  <td class="px-4 column-width overflow-wrap-anywhere">
                    <div class="justify-self-center flex flex-col items-center">
                      <div class="result-player-img m-4">
                        <img src="../assets/img-1.png" class="h-full" />
                      </div>
                      <div class="text-center">
                        <h1 class="normal-text small-text color-blueseil">
                          <span>Player 1</span>
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-4 color-blueseil column-width score-mobile overflow-wrap-anywhere"
                  >
                    100
                  </td>
                </tr>
                <tr>
                  <td class="px-4 column-width overflow-wrap-anywhere">
                    <div class="justify-self-center flex flex-col items-center">
                      <div class="result-player-img m-4">
                        <img src="../assets/img-1.png" class="h-full" />
                      </div>
                      <div class="text-center">
                        <h1 class="normal-text small-text color-blueseil">
                          <span>Player 1</span>
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-4 color-blueseil column-width score-mobile overflow-wrap-anywhere"
                  >
                    100
                  </td>
                </tr>
                <tr>
                  <td class="px-4 column-width overflow-wrap-anywhere">
                    <div class="justify-self-center flex flex-col items-center">
                      <div class="result-player-img m-4">
                        <img src="../assets/img-2.png" class="h-full" />
                      </div>
                      <div class="text-center">
                        <h1 class="normal-text small-text text-color">
                          <span>Player 1</span>
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-4 color-blueseil column-width score-mobile overflow-wrap-anywhere"
                  >
                    100
                  </td>
                </tr>
                <tr>
                  <td class="px-4 column-width overflow-wrap-anywhere">
                    <div class="justify-self-center flex flex-col items-center">
                      <div class="result-player-img m-4">
                        <img src="../assets/img-3.png" class="h-full" />
                      </div>
                      <div class="text-center">
                        <h1 class="normal-text small-text text-color">
                          <span>Player 1</span>
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-4 color-blueseil column-width score-mobile overflow-wrap-anywhere"
                  >
                    100
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <table class="table-auto w-full text-center">
              <thead>
                <tr>
                  <th class="px-4 column-width">
                    <div class="relative">
                      <div
                        class="justify-self-center flex flex-col items-center carousel-content-width"
                      >
                        <div class="flex">
                          <img src="../assets/left-arrow.svg" class="header-arrow" />
                          <div class="result-player-img m-4">
                            <img src="../assets/img-4\.png" class="h-full" />
                          </div>
                          <img
                            src="../assets/left-arrow.svg"
                            class="rotate-180 header-arrow arrow-color"
                          />
                        </div>
                        <div class="text-center h-12">
                          <h1 class="normal-text small-text color-pink overflow-hidden">
                            <span>Back to the Future</span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr>
                  <td
                    class="px-4 column-width overflow-wrap-anywhere carousel-content-width"
                  >
                    <div
                      class="justify-self-center flex flex-col items-center carousel-content-width"
                    >
                     
                      <div class="text-center">
                        <h1 class="normal-text small-text color-pink">
                          <span> Back to the Future</span>
                        </h1>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-4 column-width overflow-wrap-anywhere carousel-content-width"
                  >
                    <div
                      class="justify-self-center flex flex-col items-center carousel-content-width"
                    >
                    
                      <div class="text-center">
                        <h1 class="normal-text small-text text-color">
                          <span> Super MArio</span>
                        </h1>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-4 column-width overflow-wrap-anywhere carousel-content-width"
                  >
                    <div class="justify-self-center flex flex-col items-center">
                    
                      <div class="text-center">
                        <h1 class="normal-text small-text text-color">
                          <span>Cinderalla</span>
                        </h1>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 column-width overflow-wrap-anywhere">
                    <div class="justify-self-center flex flex-col items-center">
                    
                      <div class="text-center">
                        <h1 class="normal-text small-text text-color">
                          <span>-</span>
                        </h1>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="my-5">
        <button
          type="button"
          class="text-white bg-btn-primary border-4 p-3 border-white main-btn font-normal w-full md:w-auto"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   new Swiper(".swiper-container", {
  //     direction: "vertical",
  //     navigation: {
  //       prevEl: ".swiper-button-prev",
  //       nextEl: ".swiper-button-next",
  //     },
  //   });
  // },
  // methods: {
  //   nextSlide() {
  //     const swiper = this.$el.swiper;
  //     if (swiper) {
  //       swiper.slideNext();
  //     }
  //   },
  // },
};
</script>

<style>
.small-screen-table thead {
  height: 130px;
  text-align: -webkit-center !important;
}

.small-screen-table tr {
  height: 130px;
}
.small-screen-table td {
  min-height: 115px;
  /* vertical-align: bottom; */
}
</style>
