import { IMAGE_BASE_URL, PLACEHOLDER_IMAGE } from "./constants";

export function getPosterUrl(path){
    return path ? `${IMAGE_BASE_URL}/${path}` : PLACEHOLDER_IMAGE;
}