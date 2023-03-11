import { createI18n } from "vue-i18n-composable/src/index";
const locales = import.meta.globEager("@/locales/*.json");
/* eslint-env node */
function loadLocaleMessages() {
  const messages = {};
  for (const path in locales) {
    const matched = path.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      console.log(locales[path].default);
      // messages[locale] = messages[locale]
      //   ? Object.assign(messages[locale], locales[path].default)
      //   : (messages[locale] = locales[path].default);

      if (messages[locale]) {
        for (let key in locales[path].default) {
          if (messages[locale].hasOwnProperty(key)) {
            messages[locale][key] = Object.assign(
              messages[locale][key],
              locales[path].default[key]
            );
          } else {
            messages[locale][key] = locales[path].default[key];
          }
        }
      } else {
        messages[locale] = locales[path].default;
      }
      // c.prop = Object.assign({},a.prop,b.prop);
      // function eachRecursive(obj) {
      //   for (var k in obj) {
      //     if (typeof obj[k] == "object" && obj[k] !== null)
      //       eachRecursive(obj[k]);
      //     else console.log("jo");
      //     // do something...
      //   }
      // }
    }
  }

  return messages;
}
export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});
