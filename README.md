# DB Console

The database REPL console for modern node.js app.

## Install

```bash
npm install --save-dev db-console
```

## Usage

Create a config file named `.dbconsolerc.json` with the following contents.

``` js
module.exports = {
  mongodb: {
    url: "your db url",
    options: {}
  },
  modelsDir: "models"
}
```

And then `db-console` to start repl!
