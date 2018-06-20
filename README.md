# dobukulbira
REPL console for modern node.js app.

## Usage

Create a config file named `dobukulbira.config.js` with the following contents.

``` js
module.exports = {
  mongodb: {
    url: "your mongodb url",
    options: {}
  },
  modelsDir: "models"
}
```

And then `dobukulbira` to start repl!
