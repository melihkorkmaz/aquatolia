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
import { CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy } from './category-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-files-attributes-created-by';
import { CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent } from './category-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-parent';
import { NavigationListResponseDataItemAttributesLocalizations } from './navigation-list-response-data-item-attributes-localizations';
/**
 * 
 * @export
 * @interface NavigationListResponseDataItemAttributes
 */
export interface NavigationListResponseDataItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof NavigationListResponseDataItemAttributes
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof NavigationListResponseDataItemAttributes
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof NavigationListResponseDataItemAttributes
     */
    order?: number;
    /**
     * 
     * @type {Date}
     * @memberof NavigationListResponseDataItemAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof NavigationListResponseDataItemAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy}
     * @memberof NavigationListResponseDataItemAttributes
     */
    createdBy?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof NavigationListResponseDataItemAttributes
     */
    updatedBy?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {NavigationListResponseDataItemAttributesLocalizations}
     * @memberof NavigationListResponseDataItemAttributes
     */
    localizations?: NavigationListResponseDataItemAttributesLocalizations;
    /**
     * 
     * @type {string}
     * @memberof NavigationListResponseDataItemAttributes
     */
    locale?: string;
}
