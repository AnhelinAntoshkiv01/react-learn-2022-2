import {axiosService} from "./axios.service";
import {urls} from "../constants";

const PostService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getByUserId: (id) => axiosService.get(`${urls.users}/${id}/posts`)
}

export {
    postService
}