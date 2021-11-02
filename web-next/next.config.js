module.exports = {
  trailingSlash: true,
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/collections': { page: '/collections' },
      '/flavors': { page: '/flavors' },
      '/find-store': { page: '/find-store' },
    }
  },
}
