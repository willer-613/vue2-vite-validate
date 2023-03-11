<template>
  <div>
    <p>{{ country.name }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "@vue/composition-api";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
const country = reactive({ name: "", code: "" });
onMounted(async () => {
  try {
    // var result = await axios({
    //   method: "POST",
    //   url: "https://countries.trevorblades.com/",
    //   data: {
    //     query: `
    //         {
    //             country (code: "AD") {
    //               name,
    //               code
    //             }
    //         }
    //     `,
    //   },
    // });

    const GET_COUNTRY = gql`
      query country($code: ID!) {
        country(code: $code) {
          name
          code
        }
      }
    `;

    var result = await axios.post("https://countries.trevorblades.com/", {
      query: print(GET_COUNTRY),
      variables: {
        code: "JP",
      },
    });
    console.log(result);
    // console.log(result.data.data.country);
    // country.value = result.data.data.country;
    // country.name = result.data.data.country.name;
    // Object.assign(country, result.data.data.country);
    Object.assign(country, result.data.data.country);
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped></style>
