import {routeType} from "../types/routeType.ts";
import router from "../router/router.ts";

export const toRoute = (name: routeType) => {
    router.push({
        name
    })
}