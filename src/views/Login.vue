<template>
  <div class="container mx-auto px-8">
    <div class="mt-4 md:mt-16 text-center">
      <div class="flex flex-col items-center mb-5 md:mb-14">
        <img src="../assets/handvictor-8.png" class="w-max" />
        <img src="../assets/Title.png" class="w-max mt-4" />
      </div>

      <div>
        <h1 class="sub-heading text-color tracking-widest">LOGIN TO START</h1>
      </div>

      <!-- IF CONDITION FOR LOGIN ERROR -->
      <!-- <div>
        <h1 class="sub-heading text-error tracking-widest">WRONG INFO!</h1>
      </div> -->
      <!-- IF CONDITION ENDS HERE -->

      <div class="pt-3">
        <div class="my-5">
          <input
            type="text"
            placeholder="Username"
            class="bg-transparent input-field"
            v-model="form.username"
          />
        </div>

        <div class="my-5">
          <input
            type="text"
            placeholder="Password"
            class="bg-transparent input-field"
            v-model="form.password"
          />
        </div>

        <div class="my-5">
          <router-link  :to="{ name: 'StartGame' }">
            <button
              type="button"
              class="text-white bg-btn-primary border-4 p-3 border-white main-btn font-normal w-full md:w-auto"
            >
              START!
            </button>
          </router-link>
        </div>
      </div>
      <div class="my-4 md:my-10">
        <span
          class="sub-heading-3 text-color tracking-wide py-5 cursor-pointer hover:font-bold active:font-normal"
          >Forgot password?
        </span>
      </div>

      <div>
        <h1 class="sub-heading-2 text-color tracking-wide py-5">OR</h1>
      </div>

      <div class="mb-10">
        <span
          class="sub-heading-2 text-color tracking-wide py-5 cursor-pointer hover:font-bold active:font-normal"
        >
          Login with
          <span>
            <span class="color-blue sub-heading-2 text-color tracking-wide"
              >G</span
            ><span class="color-red">o</span><span class="color-yellow">o</span
            ><span class="color-blue">g</span><span class="color-green">l</span
            ><span class="color-red">e</span>
          </span>
        </span>
      </div>

      <div class="my-4 md:my-10">
        <span
          class="sub-heading-2 text-color tracking-wide py-5 cursor-pointer hover:font-bold active:font-normal"
        >
          Login with <span class="color-blue">Facebook</span>
        </span>
      </div>

      <div class="my-4 md:my-10">
        <span
          class="sub-heading-2 text-color tracking-wide py-5 cursor-pointer hover:font-bold active:font-normal"
        >
          Don't have an account?
          <router-link  :to="{ name: 'CreateAccount' }">
            <span class="color-primary cursor-pointer">SIGN UP</span>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loginSubmission:true,
      form:{
        username:"",
        password:""
      }
    }
  },
  methods:{
    login(){}
  },
  computed(){},
  watch(){},
  components: {},
};
</script>

<style scoped></style>
