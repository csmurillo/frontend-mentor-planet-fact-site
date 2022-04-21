module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/earth',
          permanent: false,
            basePath: false
        },
      ]
    },
  }