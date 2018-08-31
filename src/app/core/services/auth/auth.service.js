// @flow
import { ApiService } from '../api.service';

export interface AuthServiceInterface {
  login(): Promise<Object>;
  logout(): Promise<Object>;
}

export class AccessTokenService implements AuthServiceInterface {
  _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService;
  }

  async login(): Promise<Object> {
    return await this._apiService.post<Object>('v1/login');
  }

  async logout(): Promise<Object> {
    return await this._apiService.post<Object>('v1/logout');
  }
}
