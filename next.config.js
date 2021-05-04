const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg", "ico"],
  webpack(config, options) {
    return config
  },
})
module.exports = {
  target: "serverless"
}