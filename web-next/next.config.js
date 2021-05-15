module.exports = {
  // trailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/collections": { page: "/collections" },
      "/flavors": { page: "/flavors" },
      "/find-store": { page: "/find-store" },
    }
  },
}
