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
/**
 * 
 * @export
 * @interface ProductVariantRequestData
 */
export interface ProductVariantRequestData {
    /**
     * 
     * @type {string}
     * @memberof ProductVariantRequestData
     */
    name: string;
    /**
     * 
     * @type {number | string}
     * @memberof ProductVariantRequestData
     */
    propertyType?: number | string;
    /**
     * 
     * @type {Array<number | string>}
     * @memberof ProductVariantRequestData
     */
    products?: Array<number | string>;
}