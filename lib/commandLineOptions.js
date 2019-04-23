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
    type: String,
    defaultValue: '.dbconsolerc'
  },
  {
    name: 'history-file',
    alias: 'H',
    type: String,
    defaultValue: '.dbconsole.history'
  },
  {
    name: 'orm',
    alias: 'o',
    type: String,
    defaultValue: undefined
  },
  {
    name: 'db',
    alias: 'd',
    type: String,
    defaultValue: undefined
  },
  {
    name: 'models',
    alias: 'm',
    type: String,
    defaultValue: undefined
  }
];
