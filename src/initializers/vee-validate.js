import { extend, configure } from "vee-validate";
import { required, email, min, integer } from "vee-validate/dist/rules";
import { i18n } from "@/initializers/vue-i18n";

configure({
  defaultMessage: (field, values) => {
    values._field_ = `fields.${field}`;

    return {
      validation: `validation.${values._rule_}`,
      values,
    };
  },
});

extend("required", required);

// Install email rule and message.
extend("email", email);

// Install min rule and message.
extend("min", min);

extend("integer", integer);
