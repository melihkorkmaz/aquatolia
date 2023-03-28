import { CategoryType } from "@/types/Category";
import { fetchAll } from "./api";
import qs from "qs";
import { mapArrayDataType } from "@/utils/mapDataType";
import { CategoryListResponse } from "@/types/dataModels";


export const getCategories = () => {
  const query = qs.stringify({
    sort: "order:asc",
  }, {
    encodeValuesOnly: true,
  })

  return fetchAll<CategoryListResponse>("categories", query).then(mapArrayDataType<CategoryType>);
}
