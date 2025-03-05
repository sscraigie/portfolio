/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['aceternity.com','avatars.githubusercontent.com', 'encrypted-tbn0.gstatic.com', 'assets.aceternity.com', 'i0.wp.com']
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
