<template>
  <div class="large-screen-table">
    <div class="container mx-auto px-8 text-center">
      <div class="mt-4 md:mt-16">
        <div>
          <h1 class="sub-heading text-color tracking-widest">LEADERBOARD</h1>
        </div>
        <table class="table-auto w-full mt-8 text-center">
          <thead class="text-white font-bold">
            <tr>
              <th class=" px-4 column-width normal-text">&nbsp;</th>
              <th class=" px-4 column-width normal-text score-mobile">
                <div class="text-center">
                  <h1 class="normal-text small-text color-blueseil">
                    <span>Score</span>
                  </h1>
                </div>
              </th>
              <th class=" px-4 column-width normal-text">
                <div class="justify-self-center flex flex-col items-center">
                  <div class="flex">
                    <img src="../assets/left-arrow.svg" class="header-arrow" />
                    <div class="result-player-img m-4">
                      <img src="../assets/img-3.png" class="h-full" />
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
              </th>
              <th class=" px-4 column-width normal-text">
                <div class="justify-self-center flex flex-col items-center">
                  <div class="result-player-img m-4">
                    <img src="../assets/img-3.png" class="h-full" />
                  </div>
                  <div class="text-center h-12">
                    <h1 class="normal-text small-text color-pink overflow-hidden">
                      <span> Harry Potter</span>
                    </h1>
                  </div>
                </div>
              </th>
              <th class=" px-4 column-width normal-text">
                <div class="justify-self-center flex flex-col items-center">
                  <div class="result-player-img m-4">
                    <img src="../assets/img-3.png" class="h-full" />
                  </div>
                  <div class="text-center h-12">
                    <h1 class="normal-text small-text color-pink overflow-hidden">
                      <span>Cindrella</span>
                    </h1>
                  </div>
                </div>
              </th>
              <th class=" px-4 column-width normal-text">
                <div class="justify-self-center flex flex-col items-center">
                  <div class="result-player-img m-4">
                    <img src="../assets/img-3.png" class="h-full" />
                  </div>
                  <div class="text-center h-12">
                    <h1 class="normal-text small-text color-pink overflow-hidden">
                      <span>Shrek</span>
                    </h1>
                  </div>
                </div>
              </th>
              <th class=" px-4 column-width normal-text score-large">
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
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">
                <div class="justify-self-center flex flex-col items-center">
                  <div class="result-player-img m-4">
                    <img src="../assets/img-3.png" class="h-full" />
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
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere color-pink">
                Back to the Future
              </td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">Normal Guy</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere color-pink">
                Cindrella
              </td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">-</td>
              <td
                class="px-4 color-blueseil column-width score-large overflow-wrap-anywhere"
              >
                100
              </td>
            </tr>
            <tr>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">
                <div class="justify-self-center flex flex-col items-center">
                  <div class="result-player-img m-4">
                    <img src="../assets/img-3.png" class="h-full" />
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
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">Super Mario</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">Harry Potter</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">-</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere color-pink">Shrek</td>
              <td
                class="px-4 color-blueseil column-width score-large overflow-wrap-anywhere"
              >
                120
              </td>
            </tr>
            <tr>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">
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
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">-</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">Sherlock Holmes</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere color-pink">
                Cindrella
              </td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">Bee Movie</td>
              <td
                class="px-4 color-blueseil column-width score-large overflow-wrap-anywhere"
              >
                2
              </td>
            </tr>
            <tr>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">
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
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">Super Man</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">-</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">Bad Man</td>
              <td class=" px-4 column-width normal-text overflow-wrap-anywhere">
                All Quiet on the Western Front
              </td>
              <td
                class="px-4 color-blueseil column-width score-large overflow-wrap-anywhere"
              >
                140
              </td>
            </tr>
          </tbody>
        </table>
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

  <ResultsMobile />
</template>

<script>
import ResultsMobile from "./ResultsMobile.vue";
export default {
  components: {
    ResultsMobile,
  },
};
</script>
