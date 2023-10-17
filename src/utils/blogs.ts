import { Http } from "@plugins/http";

export interface IResponseBlogs {
  data: IDataBlogs[];
  links: object;
  meta: object;
}
export interface IDataBlogs {
  id: number;
  path: string;
  title: string;
  updated_at: string;
  created_at: string;
  pic: {
    path: string;
  };
}
export interface IOneBlog extends IDataBlogs {
  htmlBody: string;
  isActive: boolean;
  viewCount: number;
}

export const getBlogs = () => {
  return Http().get("/api/articles?limit=10");
};
export const searchBlogs = (query: string) => {
  return Http().get(`/api/articles?limit=10&search=${query}`);
};
export const getBlogArticleByPath = (path: string) => {
  return Http().get(`/api/articles/transcription/${path}`);
};

export const getNewest = async (limit: number = 3): Promise<IDataBlogs[]> => {
  const url = `/api/articles?limit=${limit}&sortBy=created_at:DESC`;
  const res = await Http().get(url);

  return res.data.data;
};
