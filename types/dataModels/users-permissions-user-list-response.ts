/* tslint:disable */
/* eslint-disable */
/**
 * DOCUMENTATION
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CategoryListResponseMeta } from './category-list-response-meta';
import { UsersPermissionsUserListResponseDataItem } from './users-permissions-user-list-response-data-item';
/**
 * 
 * @export
 * @interface UsersPermissionsUserListResponse
 */
export interface UsersPermissionsUserListResponse {
    /**
     * 
     * @type {Array<UsersPermissionsUserListResponseDataItem>}
     * @memberof UsersPermissionsUserListResponse
     */
    data?: Array<UsersPermissionsUserListResponseDataItem>;
    /**
     * 
     * @type {CategoryListResponseMeta}
     * @memberof UsersPermissionsUserListResponse
     */
    meta?: CategoryListResponseMeta;
}
