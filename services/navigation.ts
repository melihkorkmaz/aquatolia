import { NavigationType } from "@/types/Navigation";
import { fetchAll } from "./api";
import qs from "qs";
import { mapArrayDataType } from "@/utils/mapDataType";
import { NavigationListResponseDataItem } from "@/types/dataModels";

export const getNavigation = async (locale: string) => {
  const query = qs.stringify({
    sort: "order:asc",
    locale,
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  const response = await fetchAll<NavigationListResponseDataItem>("navigations", query).then(mapArrayDataType<NavigationType>);

  return response;
}
