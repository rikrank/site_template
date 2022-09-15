module.exports = {
  "ui": {
    "port": 3001,
    "weinre": {
      "port": 8080
    }
  },
  "files": './dist/**/*',
  "watch": true,
  "server": "dist",
  "https": true,
  "reloadDelay": 250,
  // "proxy": "test.local"
}
