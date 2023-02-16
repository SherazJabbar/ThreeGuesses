<template>
  <div class="container mx-auto px-8">
    <div class="mt-4 md:mt-8 text-center">
      <div class="flex flex-col items-center mb-5 md:mb-8">
        <img src="../assets/handvictor-8.png" class="w-max" />
        <img src="../assets/Title.png" class="w-1/2 md:w-1/4 mt-4" />
      </div>

      <div>
        <h1 class="sub-heading text-color tracking-widest">CREATE AN ACCOUNT</h1>
      </div>

      <div class="pt-3">
        <div class="my-5">
          <input type="text" placeholder="Username" class="bg-transparent input-field" />
        </div>

        <div class="my-5">
          <input type="text" placeholder="Email" class="bg-transparent input-field" />
        </div>

        <div class="my-5">
          <input type="text" placeholder="Password" class="bg-transparent input-field" />
        </div>

        <div class="my-5">
          <input
            type="text"
            placeholder="Confirm Password"
            class="bg-transparent input-field"
          />
        </div>

        <div class="my-5">
          <router-link :to="{ name: 'StartGame' }">
            <button
              type="button"
              class="text-white bg-btn-primary border-4 p-3 border-white main-btn font-normal w-full md:w-auto"
            >
              START!
            </button>
          </router-link>
        </div>
      </div>

      <div class="my-4">
        <span
          class="sub-heading-2 flex flex-col md:block text-color tracking-wide py-5 cursor-pointer hover:font-bold active:font-normal"
        >
          Already have an account?
          <router-link :to="{ name: 'Login' }">
            <span class="color-primary cursor-pointer">LOG IN</span>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
