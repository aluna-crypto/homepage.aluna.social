module.exports = {
  async redirects() {
    return [
      {
        source: '/:slug([^.]{2,}$)',
        destination: 'https://app.aluna.social/:slug',
        permanent: true,
      },
    ]
  },
}
