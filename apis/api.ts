import { useHttpGet } from "~/utils/request";
//
// export const articleGroup = (params:any) => {
//     return Http.get('/api/articleGroup', params)
// }
//
// export const getArticle = (params:any) => {
//     return Http.get('/api/getArticle', params)
// }


export function articleGroup(params:any) {
    return useHttpGet("articleGroup", `/api/articleGroup`,{
        params,
        lazy: true,
    } );
}

export function getArticle(params:any) {
    return useHttpGet("articleGroup", `/api/getArticle`,{
        params,
        lazy: true,
    } );
}

