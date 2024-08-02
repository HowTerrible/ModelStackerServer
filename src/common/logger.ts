import log4js from 'log4js';

log4js.configure({
  appenders: {
    dateFile: {
      type: 'DateFile',
      filename: '../logs/log',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      level: 'info',
    },
    console: { type: 'console', level: 'all' },
  },
  categories: {
    default: { appenders: ['dateFile', 'console'], level: 'all' },
  },
});

export const logger = log4js.getLogger();
