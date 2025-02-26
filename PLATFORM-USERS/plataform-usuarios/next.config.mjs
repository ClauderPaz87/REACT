/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    productionBrowserSourceMaps: true, // Gera source maps para produção (útil para depuração)
    optimizeFonts: true, // Otimiza o carregamento de fontes
    optimizeImages: true, // Otimiza o carregamento de imagens
}

export default nextConfig;
