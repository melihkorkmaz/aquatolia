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
import { CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributesPermissions } from './category-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-files-attributes-created-by-data-attributes-roles-attributes-permissions';
import { CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent } from './category-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-parent';
import { CategoryListResponseDataItemAttributesImageDataAttributesRelated } from './category-list-response-data-item-attributes-image-data-attributes-related';
/**
 * 
 * @export
 * @interface CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
 */
export interface CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes {
    /**
     * 
     * @type {string}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    description?: string;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesRelated}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    users?: CategoryListResponseDataItemAttributesImageDataAttributesRelated;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributesPermissions}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    permissions?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributesPermissions;
    /**
     * 
     * @type {Date}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    createdBy?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedByDataAttributesRolesAttributes
     */
    updatedBy?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
