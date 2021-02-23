const isProd = process.env.NODE_ENV === "production";

module.exports = {
  async redirects() {
    return [
      {
        source: "/:slug([^.]{2,}$)",
        destination: "https://app.aluna.social/:slug",
        permanent: true,
      },
    ];
  },
  assetPrefix: isProd ? "https://aluna-homepage.herokuapp.com/" : "",
};
