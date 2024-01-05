
<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"
      >
        {{ authProps.isSignUp ? "Sign Up" : "Sign In" }} to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <FormGroup
          name="name"
          type="text"
          label="Full name"
          v-model="userInput.name"
          v-if="authProps.isSignUp"
          :errorMessage="errorBag.name"
        />
        <FormGroup
          name="email"
          type="email"
          label="Email address"
          v-model="userInput.email"
          :errorMessage="errorBag.email"
        />
        <FormGroup
          name="password"
          type="password"
          label="Password"
          v-model="userInput.password"
          :errorMessage="errorBag.password"
        />
        <div>
          <NuxtLink :to="!authProps.isSignUp ? '/signup' : '/'" class="text-light text-sm underline">
            {{ authProps.isSignUp ? "Already have an account? Sign In here" : "New to our blog? Sign Up here" }}
          </NuxtLink>
        </div>
        <div>
          <Button>
            {{ authProps.isSignUp ? "Sign Up" : "Sign in" }}
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
const authProps = defineProps({
  isSignUp: {
    type: Boolean,
    default: false,
  },
});

const { login, signUp, errorBag } = useAuth();

const userInput = reactive({
  email: "",
  password: "",
  name: "",
});

function handleSubmit() {
  if (authProps.isSignUp) {
    signUp(userInput);
  } else {
    login(userInput);
  }
}
</script>