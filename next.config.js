/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ztjomylpduqakeicvzdz.supabase.co'
            }
        ]
    }
}

module.exports = nextConfig
