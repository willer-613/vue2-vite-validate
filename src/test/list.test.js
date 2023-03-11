// import "@/util/composition-api";
import { render, fireEvent, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import Component from "../components/workaround/List.vue";
// // import Vue from "vue";
// // import VueCompositionApi from "@vue/composition-api";

// // Vue.use(VueCompositionApi);
// import VueI18n from "vue-i18n";
// import { createI18n } from "vue-i18n-composable";
//

import { createI18n } from "vue-i18n-composable/src/index";
import { vi } from "vitest";
import { PiniaVuePlugin } from "pinia";
import { i18n } from "@/initializers/vue-i18n";

const messages = {
  en: {
    Hello: "Hello",
  },
  ja: {
    Hello: "こんにちは",
  },
};

test("test", async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(
    Component,
    {
      pinia: createTestingPinia({ createSpy: vi.fn }),
      i18n,
    },
    (vue) => {
      // const i18n = createI18n({
      //   legacy: false,
      //   locale: "en",
      //   fallbackLocale: "en",
      //   messages,
      // });
      vue.use(PiniaVuePlugin);
      // return {
      //   i18n,
      // };
    }
  );
});
