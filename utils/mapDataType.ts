const mapFields = (source: any) => {
  const response = {} as any;

  for (const key in source) {
    if (key === "attributes") {
      for (const attrKey in source[key]) {
        const value = source[key][attrKey];
        if (typeof value === "object" && typeof value?.data === "object" && value?.data.length > 0) {
          response[attrKey] = value.data.map((item: any) => mapFields(item));
        } else if (typeof value === "object" && typeof value?.data === "object") {
          response[attrKey] = mapFields(value.data);
        }
        else {
          response[attrKey] = value;
        }
      }
    }

    if (key !== "attributes" && key !== "data") {
      response[key] = source[key];
    }
  }

  return response;
}

export const mapDataType = <TargetType>(source: any) => { 
  if (!source?.id) {
    return;
  }
  
  return mapFields(source) as TargetType;
};

export const mapArrayDataType = <TargetType>(source: any[]) => {
  if (!source) {
    return [];
  }
  
  return source.map((item: any) => mapDataType<TargetType>(item)) as TargetType[];
};
