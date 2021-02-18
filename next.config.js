module.exports = {
  async redirects() {
    return [
      {
        source: '/:slug([^.]{2,}$)',
        destination: 'https://aluna.social/:slug',
        permanent: true,
      },
    ]
  },
}
