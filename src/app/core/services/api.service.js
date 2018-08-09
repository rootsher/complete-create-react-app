// @flow
import axios, { Axios } from 'axios';
import uuid from 'uuid/v4';
import includes from 'lodash/includes';
import { AccessTokenService } from './access-token.service';
import { NavigationService } from './navigation.service';

const AllowedMethods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};

type ApplicationConfig = {
  BASE_URL?: string
};

export interface ApiServiceInterface {
  get<T>(url: string, data?: Object): Promise<T>;
  post<T>(url: string, data?: Object): Promise<T>;
  put<T>(url: string, data?: Object): Promise<T>;
  delete<T>(url: string, data?: Object): Promise<T>;
}

export class ApiService implements ApiServiceInterface {
  _fetch: Axios;
  _applicationConfig: ApplicationConfig;
  _accessTokenService: AccessTokenService;
  _navigationService: NavigationService;

  constructor(
    applicationConfig: ApplicationConfig,
    accessTokenService: AccessTokenService,
    navigationService: NavigationService
  ) {
    this._applicationConfig = applicationConfig;
    this._accessTokenService = accessTokenService;
    this._navigationService = navigationService;

    this._fetch = axios.create({
      baseURL: applicationConfig.BASE_URL || ApiService.DEFAULT_BASE_URL,
      timeout: 2500,
      headers: {
        'X-Window-Id': uuid(),
        'X-JWT-Authorization': `Bearer ${accessTokenService.accessToken()}`
      }
    });
  }

  async get<T>(url: string, data: Object = {}): Promise<T> {
    return await this.sendRequest<T>(AllowedMethods.GET, url, data);
  }

  async post<T>(url: string, data: Object = {}): Promise<T> {
    return await this.sendRequest<T>(AllowedMethods.POST, url, data);
  }

  async put<T>(url: string, data: Object = {}): Promise<T> {
    return await this.sendRequest<T>(AllowedMethods.PUT, url, data);
  }

  async delete<T>(url: string, data: Object = {}): Promise<T> {
    return await this.sendRequest<T>(AllowedMethods.DELETE, url, data);
  }

  async sendRequest<T>(
    method: string,
    url: string,
    data: Object = {}
  ): Promise<T> {
    const params: Object = {};

    if (
      !includes(
        [AllowedMethods.POST, AllowedMethods.PUT, AllowedMethods.DELETE],
        method
      )
    ) {
      Object.assign(params, data);
    }

    return await this._fetch({ method, url, data, params })
      .then(response => this.handleResponse<T>(response))
      .catch(error => this.handleError<T>(error));
  }

  handleResponse<T>(response: Object): Promise<T> {
    //TODO: handle response format
    return Promise.resolve(response.data);
  }

  handleError<T>(error: Object): Promise<T> {
    //TODO: handle error
    return Promise.reject(error);
  }

  static DEFAULT_BASE_URL: string = '/api';
}
