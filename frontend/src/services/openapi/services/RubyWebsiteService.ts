/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WeatherForecast } from '../models/WeatherForecast';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RubyWebsiteService {
    /**
     * @returns WeatherForecast OK
     * @throws ApiError
     */
    public static getWeatherForecast(): CancelablePromise<Array<WeatherForecast>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/weatherforecast',
        });
    }
    /**
     * @param amount
     * @returns number OK
     * @throws ApiError
     */
    public static randomValues(
        amount: number,
    ): CancelablePromise<Array<number>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/randomValues/{amount}',
            path: {
                'amount': amount,
            },
        });
    }
}
