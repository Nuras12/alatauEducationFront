import {routeType} from "../types/routeType";
import router from "../router/router";

export const toRoute = (name: routeType) => {
    router.push({
        name
    })
}