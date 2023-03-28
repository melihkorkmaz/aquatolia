import { ProductType } from "@/types/Product";
import React from "react";

export const ProductContext = React.createContext<ProductType | null>(null);
