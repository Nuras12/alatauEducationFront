import {Http} from "./http.ts";

export interface IResponseBlogs {
    data: IDataBlogs[],
    links: object,
    meta: object
}
export interface IDataBlogs {
    id: number,
    path: string,
    title: string,
    updated_at: string,
    created_at: string,
    pic: {
        path: string
    }
}
export interface IOneBlog extends IDataBlogs{
    htmlBody: string,
    isActive: boolean,
    viewCount: number,
}

export const getBlogs = () => {
    return Http().get('/api/articles?limit=10')
}
export const searchBlogs = (query: string) => {
    return Http().get(`/api/articles?limit=10&search=${query}`)
}
export const getBlogArticle = (id: string) => {
    return Http().get(`/api/articles/${id}`)
}

