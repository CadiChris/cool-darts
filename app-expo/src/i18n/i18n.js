import i18n from "i18n-js";
import * as Localization from "expo-localization";

export function enableI18n() {
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;
}
