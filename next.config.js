module.exports = {
    async rewrites() {
      return [
        {
          source: '/calctronz',
          destination: '/api/calculatronz',
        },
        {
          source: '/nspu/schedule',
          destination: '/api/nspu/schedule',
        },
      ]
    },
  }