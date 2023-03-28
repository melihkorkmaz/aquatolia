import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "./productContext";
import slugify from "slugify";

interface ProductLinkProps {
  className?: string;
  children?: React.ReactNode;
}
export const ProductLink = ({
  className,
  children,
}: ProductLinkProps) => {
  const { lang } = useTranslation();
  const product = useContext(ProductContext);

  if (!product) {
    return (
      <>{children}</>
    );
  }

  const url = `/${lang}/product/${slugify(product?.title || "", { lower: true })}/${product?.id}`;

  return (
    <Link href={url} className={className}>
      {children}
    </Link>
  );
}
