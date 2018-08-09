// @flow
/* eslint-disable no-console */

export interface LogServiceInterface {
  log(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
  info(...args: any[]): void;
  debug(...args: any[]): void;
}

export class LogService implements LogServiceInterface {
  log(...args: any[]): void {
    console.log(...args);
  }

  warn(...args: any[]): void {
    console.warn(...args);
  }

  error(...args: any[]): void {
    console.error(...args);
  }

  info(...args: any[]): void {
    console.info(...args);
  }

  debug(...args: any[]): void {
    if (console.debug) {
      console.debug(...args);
    } else {
      console.log(...args);
    }
  }
}
