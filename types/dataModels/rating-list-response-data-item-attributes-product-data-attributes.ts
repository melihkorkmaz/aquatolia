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
import { CategoryListResponseDataItemAttributesImage } from './category-list-response-data-item-attributes-image';
import { CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent } from './category-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-parent';
import { ProductListResponseDataItemAttributesImages } from './product-list-response-data-item-attributes-images';
import { ProductListResponseDataItemAttributesProductPropertiesAttributesProductDataAttributesVariants } from './product-list-response-data-item-attributes-product-properties-attributes-product-data-attributes-variants';
import { ProductPropertyListResponseDataItemAttributesProductDataAttributesCategory } from './product-property-list-response-data-item-attributes-product-data-attributes-category';
import { RatingListResponseDataItemAttributesProductDataAttributesProductProperties } from './rating-list-response-data-item-attributes-product-data-attributes-product-properties';
/**
 * 
 * @export
 * @interface RatingListResponseDataItemAttributesProductDataAttributes
 */
export interface RatingListResponseDataItemAttributesProductDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    details?: string;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImage}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    mainImage?: CategoryListResponseDataItemAttributesImage;
    /**
     * 
     * @type {ProductListResponseDataItemAttributesImages}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    images?: ProductListResponseDataItemAttributesImages;
    /**
     * 
     * @type {number}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    discountedPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    order?: number;
    /**
     * 
     * @type {ProductPropertyListResponseDataItemAttributesProductDataAttributesCategory}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    category?: ProductPropertyListResponseDataItemAttributesProductDataAttributesCategory;
    /**
     * 
     * @type {string}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    SKU?: string;
    /**
     * 
     * @type {string}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    EAN?: string;
    /**
     * 
     * @type {RatingListResponseDataItemAttributesProductDataAttributesProductProperties}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    productProperties?: RatingListResponseDataItemAttributesProductDataAttributesProductProperties;
    /**
     * 
     * @type {ProductListResponseDataItemAttributesProductPropertiesAttributesProductDataAttributesVariants}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    variants?: ProductListResponseDataItemAttributesProductPropertiesAttributesProductDataAttributesVariants;
    /**
     * 
     * @type {Date}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    createdBy?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof RatingListResponseDataItemAttributesProductDataAttributes
     */
    updatedBy?: CategoryListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
