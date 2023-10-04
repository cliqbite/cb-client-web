import { isDev } from "@/configs/environment";

/* eslint-disable no-console */
class Logger {
  private context: string;

  constructor(context: string = "cliqbite::") {
    this.context = context;
  }

  private logToConsole(type: 'error' | 'log' | 'warn', ...args: any[]) {
    const logFunction = Function.prototype.bind.call(console[type], console, this.context);
    logFunction.apply(console, args);

  }

  error = (...args: any[]) => {
    if (isDev) { this.logToConsole('error', ...args); }
    if (!isDev) {
      console.error(...args)
    }
  }

  log = (...args: any[]) => {
    if (isDev) { this.logToConsole('log', ...args); }
  }

  warn = (...args: any[]) => {
    if (isDev) { this.logToConsole('warn', ...args); }
  }
}

// Usage with alias
const logger = new Logger();
const log = logger.log
const error = new Logger("!!error::").error
const warn = new Logger("??warn::").warn

export { Logger as default, logger, log, error, warn }