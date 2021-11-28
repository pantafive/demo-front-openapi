/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI usage demo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import {
	CreateUserRequest,
	CreateUserRequestFromJSON,
	CreateUserRequestToJSON,
	CreateUserResponse,
	CreateUserResponseFromJSON,
	CreateUserResponseToJSON,
} from "../models";

export interface CreateUserOperationRequest {
	createUserRequest?: CreateUserRequest;
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
	/**
	 * Create user
	 */
	async createUserRaw(
		requestParameters: CreateUserOperationRequest,
		initOverrides?: RequestInit
	): Promise<runtime.ApiResponse<CreateUserResponse>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters["Content-Type"] = "application/json";

		const response = await this.request(
			{
				path: `/post`,
				method: "POST",
				headers: headerParameters,
				query: queryParameters,
				body: CreateUserRequestToJSON(requestParameters.createUserRequest),
			},
			initOverrides
		);

		return new runtime.JSONApiResponse(response, (jsonValue) =>
			CreateUserResponseFromJSON(jsonValue)
		);
	}

	/**
	 * Create user
	 */
	async createUser(
		requestParameters: CreateUserOperationRequest,
		initOverrides?: RequestInit
	): Promise<CreateUserResponse> {
		const response = await this.createUserRaw(requestParameters, initOverrides);
		return await response.value();
	}
}
