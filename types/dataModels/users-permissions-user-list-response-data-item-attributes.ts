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
import { CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent } from './category-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-parent';
import { UsersPermissionsPermissionListResponseDataItemAttributesRole } from './users-permissions-permission-list-response-data-item-attributes-role';
/**
 * 
 * @export
 * @interface UsersPermissionsUserListResponseDataItemAttributes
 */
export interface UsersPermissionsUserListResponseDataItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    confirmationToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    blocked?: boolean;
    /**
     * 
     * @type {UsersPermissionsPermissionListResponseDataItemAttributesRole}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    role?: UsersPermissionsPermissionListResponseDataItemAttributesRole;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    createdBy?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UsersPermissionsUserListResponseDataItemAttributes
     */
    updatedBy?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
