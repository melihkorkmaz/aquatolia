import { ProductType } from "@/types/Product";
import { fetchAll, fetchOne } from "./api";
import qs from "qs";
import { mapDataType, mapArrayDataType } from "@/utils/mapDataType";

export const getProducts = async (ids?: number[]) => {
  const query = qs.stringify({
    filters: {
      id: {
        $in: ids
      }
    },
    populate: {
      mainImage: {
        fields: ["url", "width", "height", "formats"]
      }
    },
  }, {
    encodeValuesOnly: true,
  });
 
  const response = await fetchAll("products", query).then(mapArrayDataType<ProductType>);

  return response;
};

export const getProductsByCategory = async (
  categoryId: string,
) => {

  const query = qs.stringify({
    populate: {
      mainImage: {
        fields: ["url", "width", "height", "formats"]
      }
    },
    sort: "id:desc",
    filters: {
      category: {
        id: {
          $eq: categoryId
        }
      }
    },
  }, {
    encodeValuesOnly: true,
  })

 const response = await fetchAll("products", query).then(mapArrayDataType<ProductType>);

 return response;
};

export const getProduct = (id: string): Promise<ProductType | undefined> => {
  const query = qs.stringify({
    populate: {
      mainImage: {
        fields: ["url", "width", "height", "formats"],
      },
      images: {
        fields: ["url", "width", "height", "formats"],
      },
      category: {
        fields: ["title"]
      },
      productProperties: {
        populate: {
          propertyType: "*"
        }
      },
      variants: {
        populate: {
          propertyType: {
            fields: ["name"]
          },
          products: {
            fields: ["title"],
            populate: {
              productProperties: {
                populate: {
                  propertyType: "*"
                }
              }
            }
          }
        }
      }
    },
  }, {
    encodeValuesOnly: true,
  })

  return fetchOne(`products`, id, query)
    .then(mapDataType<ProductType>)
    .catch(error => {
      throw new Error(error)
    });
}
