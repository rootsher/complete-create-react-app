// @flow
import { LogService } from './log.service';

export interface AccessTokenServiceInterface {
  accessToken(): string;
  setAccessToken(accessToken: string): void;
  hasAccessToken(): boolean;
}

export class AccessTokenService implements AccessTokenServiceInterface {
  _storage: Storage;
  _storagePropertyName: string;
  _accessToken: string;
  _changeListeners: Array<(accessToken: string) => void>;

  constructor(logService: LogService, storagePropertyName?: string) {
    this._storage = window.localStorage;
    this._storagePropertyName =
      storagePropertyName || AccessTokenService.STORAGE_PROPERTY_NAME;
    this._changeListeners = [];

    this._accessToken = this._storage.getItem(this._storagePropertyName);

    if (!this._accessToken) {
      logService.warn(
        `localStorage does not contain "${this._storagePropertyName}" property`
      );
    }
  }

  accessToken(): string {
    return this._accessToken;
  }

  setAccessToken(accessToken: string): void {
    if (accessToken === this._accessToken) {
      return;
    }

    if (!accessToken) {
      this._storage.removeItem(this._storagePropertyName);
    } else {
      this._storage.setItem(this._storagePropertyName, accessToken);
    }

    this._accessToken = accessToken;
    this._changeListeners.forEach(changeListener =>
      changeListener(accessToken)
    );
  }

  hasAccessToken(): boolean {
    return !!this._accessToken;
  }

  static STORAGE_PROPERTY_NAME: string;
}
