let en = require("./en.json");
let nl = require("./nl.json");

const i18n = {
    translations: {
        en,
        nl,
    },
    defaultLang: "en",
    useBrowserDefault: true,
};

module.exports = i18n;
