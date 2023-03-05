const path = require('path')

module.exports = {
    i18n: {
        locales: ['en', 'ru', 'lv'],
        defaultLocale: 'en',
        localeDetection: false,
    },
    localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : './public/locales',
}
