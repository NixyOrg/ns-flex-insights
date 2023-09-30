/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false
        };
        return config;
    }
};

module.exports = nextConfig;
