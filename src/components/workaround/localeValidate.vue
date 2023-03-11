<template>
  <div>
    <ul>
      <li v-for="(item, index) in errors" :key="index">
        {{ `Error ${index + 1}: ${errorMessage(item[0])}` }}
      </li>
    </ul>
    <ValidationObserver ref="observer" v-slot="{ validate }">
      <h2>Integrating i18n with VeeValidate: vue-i18n</h2>
      <p>Locale is: {{ $i18n.locale }}</p>
      <form @submit.prevent="submit">
        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors }"
        >
          <input type="text" v-model="email" placeholder="type some email" />
          <span v-if="errors.length > 0" style="color: coral">{{
            errorMessage(errors[0])
          }}</span>
        </ValidationProvider>
        <ValidationProvider
          name="password"
          rules="required|min:6|integer"
          v-slot="{ errors }"
        >
          <input v-model="password" placeholder="type something" />
          <span v-if="errors.length > 0" style="color: coral">{{
            errorMessage(errors[0])
          }}</span>
        </ValidationProvider>
        <button
          @submit.prevent="submit"
          style="margin: 20px auto 0 auto; display: block"
        >
          submit
        </button>
      </form>
    </ValidationObserver>
    <hr />
    <button @click="switchLoc">Switch Locale</button>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "Example",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: "",
    password: "",
    errors: [],
  }),
  methods: {
    async submit() {
      this.errors = [];
      for (var key of Object.keys(this.$refs.observer.errors)) {
        if (this.$refs.observer.errors[key].length > 0) {
          this.errors.push(this.$refs.observer.errors[key]);
        }
      }
    },
    errorMessage(err) {
      const interpolation = {
        ...err.values,
        _field_: this.$i18n.t(err.values._field_),
      };
      return this.$i18n.t(err.validation, interpolation);
    },
    switchLoc() {
      // switch the locale.
      this.$i18n.locale = this.$i18n.locale === "en" ? "ja" : "en";
      // re-validate to re-generate messages.
      this.$refs.observer.validate();
    },
  },
};
</script>

<style>
span {
  display: block;
  margin-top: 20px;
}

input + span {
  margin-top: 3px;
}
</style>
