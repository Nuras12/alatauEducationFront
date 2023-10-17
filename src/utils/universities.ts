import { Http } from "@plugins/http";

export interface IUniversities {
  id: number;
  path: string;
  pic: {
    path: string;
  };
  title: string;
  city: {
    id: number;
    nameRu: string;
  };
  created_at: string;
}

export interface ICities {
  id: number;
  created_at: string;
  updated_at: string;
  isActive: boolean;
  nameKz: string;
  nameEn: string;
  nameRu: string;
}

export interface IOneUniversity extends IUniversities {
  htmlBody: string;
  isActive: boolean;
  viewCount: number;
}

export const getViewable = async (
  limit: number = 3
): Promise<IUniversities[]> => {
  const url = `/api/universities?limit=${limit}&sortBy=viewCount:DESC`;
  const res = await Http().get(url);

  return res.data.data;
};

export const getUniversities = (
  cityId: string = null,
  searchString: string = null
) => {
  const filter =
    !cityId || cityId === "all" ? "" : `&filter.city.(id)=$eq:${cityId}`;

  const search = searchString ? `&search=${searchString}` : "";
  return Http().get("/api/universities?limit=10" + filter + search);
};
export const getCities = () => {
  return Http().get("/api/universities/cities?limit=10");
};

export const getUniversityByPath = async (
  path: string
): Promise<IOneUniversity> => {
  const res = await Http().get(`/api/universities/transcription/${path}`);
  return res.data;
};
