import { CategoryType } from "./Category";
import { MediaField } from "./MediaField";

export interface ProductPropertyType {
  id: number;
  name: string;
}

export interface ProductPropertyType {
  id: number;
  value: string;
  propertyType: ProductPropertyType;
}

export interface ProductVariantType {
  id: number;
  name: string;
  products: ProductType[];
  propertyType: ProductPropertyType;
}

export interface ProductType {
  id: number;
  title: string;
  description?: string;
  details?: string;
  price: number;
  discountedPrice: number;
  order: number;
  EAN: string;
  SKU?: string;
  mainImage?: MediaField;
  images?: MediaField[];
  category?: CategoryType;
  variants: ProductVariantType[];
  productProperties: ProductPropertyType[];
}
