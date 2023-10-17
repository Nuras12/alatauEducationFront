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
