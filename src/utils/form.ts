import {Http} from "../plugins/http";

interface IModelForm {
    name: string,
    phone: string
}

export const sendForm = (model: IModelForm) => {
    return Http().post(`/api/feedbacks`, model)
}