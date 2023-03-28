const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchAll = async <T>(route: string , query?: string) => {
  const request = {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${API_KEY}`
    }
  }

  const url = `${API_URL}/${route}?${query}`; 

  const res = await fetch(url, request);
  const json = await res.json();
  const response = json.data as unknown as T[];

  return response;
}

export const fetchOne = async (route: string, id: string, query?: string) => {
  const request = {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${API_KEY}`
    }
  };

  const url = `${API_URL}/${route}/${id}?${query}`;

  const res = await fetch(url, request);
  const json = await res.json();
  return json.data;
}
