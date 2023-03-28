import React from 'react';
import { ProductType } from '@/types/Product';
import { ProductContext } from './productContext';
import { ProductThumbnails } from './ProductThumbnails';
import { ProductImage } from './ProductImage';
import { ProductPrice } from './ProductPrice';
import { ProductProperty } from './ProductProperty';
import { ProductVariant } from './ProductVariant';
import { ProductLink } from './ProductLink';

interface ProductProps {
  product: ProductType;
  children: React.ReactNode;
};

function Product({ children, product }: ProductProps) {
  return (
    <>
      <ProductContext.Provider value={product}>
        {children}
      </ProductContext.Provider>
    </>
  );
}

Product.Property = ProductProperty;
Product.Price = ProductPrice;
Product.Image = ProductImage;
Product.Thumbnails = ProductThumbnails;
Product.Variant = ProductVariant;
Product.Link = ProductLink;

export default Product;
