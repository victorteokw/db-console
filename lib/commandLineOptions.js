module.exports = [
  {
    name: 'help',
    alias: 'h',
    description: 'view db-console\'s help',
    type: Boolean,
    defaultValue: false
  },
  {
    name: 'version',
    alias: 'v',
    description: 'view db-console\'s version',
    type: Boolean,
    defaultValue: false
  },
  {
    name: 'config-file',
    alias: 'c',
    description: 'the config file to load',
    type: String,
    defaultValue: '.dbconsolerc'
  },
  {
    name: 'history-file',
    alias: 'H',
    description: 'the history file to use',
    type: String,
    defaultValue: '.dbconsole.history'
  },
  {
    name: 'orm',
    alias: 'o',
    description: 'the orm library of the models',
    type: String,
    defaultValue: undefined
  },
  {
    name: 'db',
    alias: 'd',
    description: 'the database connection url',
    type: String,
    defaultValue: undefined
  },
  {
    name: 'models',
    alias: 'm',
    description: 'model files matcher',
    type: String,
    defaultValue: undefined
  },
  {
    name: 'model-base-directory',
    alias: 'b',
    description: 'where to execute model files matcher',
    type: String,
    defaultValue: undefined
  },
  {
    name: 'prompt',
    alias: 'p',
    description: 'the shape of the prompt',
    type: String,
    defaultValue: '>>> '
  }
];
