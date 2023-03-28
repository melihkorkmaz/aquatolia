import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Selectbox from "../Helpers/Selectbox";
import { ProductContext } from "./productContext"
import slugify from "slugify";
import { ProductVariantType } from "@/types/Product";

interface ProductVariantProps {
  variant: ProductVariantType;
  label?: string;
}

export const ProductVariant = ({ variant, label }: ProductVariantProps) => {
  const { lang } = useTranslation();
  const product = useContext(ProductContext);
  const propertyType = variant.propertyType;
  const relatedProperty = product?.productProperties?.find(property => property.propertyType.id === propertyType.id);
  const [selectedValue, setSelectedValue] = useState(relatedProperty?.value || "");
  const router = useRouter();

  useEffect(() => {
    setSelectedValue(relatedProperty?.value || "");
  }, [relatedProperty?.value]);

  if (!product) {
    return null;
  }

  return (
    <Selectbox selectedValue={selectedValue} label={label || variant.name} onChange={setSelectedValue}>
      {variant?.products?.map((variantProduct) => {
        const productProperty = variantProduct.productProperties?.find(property => variant.propertyType.id === property.propertyType.id);
        if (!productProperty) {
          return null;
        }

        return (
          <Selectbox.Item
            key={productProperty?.id}
            value={productProperty?.value}
            onClick={() => {
              if (variantProduct.id !== product.id) {
                router.push(
                  `/${lang}/product/${slugify(variantProduct.title)}/${variantProduct.id}`
                );
              }
            }}
          >
            {productProperty?.value}
          </Selectbox.Item>
        )
      })}
    </Selectbox>
  )
}
