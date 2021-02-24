<template>
  <div class="grid grid-cols-2">
    <div class="bg-blue-400">
      <!-- group start -->
      <div class="pt-44">
        <div class="flex">
          <div class="py-2">
            <div class="border-b text-white w-40 inline-block"></div>
              <p class="text-white float-right py-1 pl-2">Fast</p>
          </div>
        </div>
        <div class="flex">
          <div class="py-2">
            <div class="border-b text-white w-40 inline-block"></div>
              <p class="text-white float-right py-1 pl-2">Flexible</p>
          </div>
        </div>
        <div class="flex">
          <div class="py-2">
            <div class="border-b text-white w-40 inline-block"></div>
              <p class="text-white float-right py-1 pl-2">Easy</p>
          </div>
        </div>
      </div>
      <!-- /group start -->

      <!-- logo -->
      <div class="pt-14">
        <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="190.969" height="190.615" viewBox="0 0 190.969 190.615">
          <g transform="translate(-0.177 94.929) rotate(-45)">
          <g class="a" transform="translate(-0.25 0.5)">
            <rect class="b" width="64" height="64"/>
            <rect class="c" x="0.5" y="0.5" width="63" height="63"/>
          </g>
          <g class="a" transform="translate(0 71.188)">
            <rect class="b" width="64.133" height="64.133"/>
            <rect class="c" x="0.5" y="0.5" width="63.133" height="63.133"/>
          </g>
          <g class="a" transform="translate(70.867 71.188)">
            <rect class="b" width="64.133" height="64.133"/>
            <rect class="c" x="0.5" y="0.5" width="63.133" height="63.133"/>
          </g>
          <g class="a" transform="translate(70.75 0.5)">
            <rect class="b" width="64" height="64"/>
            <rect class="c" x="0.5" y="0.5" width="63" height="63"/>
            </g>
          </g>
        </svg>
        <h1 class="text-center text-4xl text-white">Company Name</h1>
      </div>
      <!-- /logo -->

      <!-- group end -->
      <div class="pt-44 float-right">
        <div class="flex">
          <div class="py-2">
            <div class="border-b text-white w-60 text-left inline-block"></div>
              <p class="text-white float-left py-1 pr-2">Fast</p>
          </div>
        </div>
        <div class="flex">
          <div class="py-2">
            <div class="border-b text-white w-60 text-left inline-block"></div>
              <p class="text-white float-left py-1 pr-2">Flexible</p>
          </div>
        </div>
        <div class="flex">
          <div class="py-2">
            <div class="border-b text-white w-60 text-left inline-block"></div>
              <p class="text-white float-left py-1 pr-2">Easy</p>
          </div>
        </div>
      </div>
      <!-- /group end -->
    </div>
    <div class="">
      <div class="flex h-screen justify-center items-center">
        <div class="text-center">
          <p class="bg-blue-400 text-white px-1 py-1 rounded-md">Company Logo</p>
          <h1 class="text-xl py-4">Sign in to The One System.</h1>
          <p class="text-left text-sm">Enter your details below</p>
          <form @submit.prevent="login">
            <div class="text-left py-4">
              <p for="" class="text-left text-sm">e-Mail or Username</p>
              <input v-model="user.email" type="text" class="border-b outline-none border-gray-400 w-64 text-sm py-2" placeholder="Enter your email or username">
            </div>
            <div class="text-left py-4">
              <p for="" class="text-left text-sm">Password</p>
              <input v-model="user.password" type="password" class=" border-b outline-none border-gray-400 w-64 text-sm py-2" placeholder="Enter password">
            </div>
            <div class="flex">
              <input type="checkbox" name="" id="" class="text-xs text-left">
              <span class="text-xs text-left">Remember Me</span>
              <span class="text-xs text-right">Forgot password?</span>
            </div>
            <div class="py-6">
              <button class="bg-blue-400 px-24 py-2 text-white">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      errors: ''
    }
  },
  methods: {
    login() {
      // console.log(this.email);
      // console.log(this.password);
      this.$store.dispatch("login", {
          user: this.user
        }).then(() => {
          if (this.$store.getters.loggedIn) {
            this.$router.push('/dashboard')
          }
        });
    }
  }
}
</script>

<style scoped>
  .a,.c{fill:none;}.a{stroke:#fff;}.b{stroke:none;}
</style>