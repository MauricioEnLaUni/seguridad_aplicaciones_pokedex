const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
    serverRuntimeConfig: {},
    publicRuntimeConfig: {
        langs: ["es", "en", "jp"],
    },
});

module.exports = nextConfig;
