
import {IPost} from "./IPost";

export interface IResponcePostsModelModel {
    posts: IPost[],
    total: number,
    skip: number,
    limit: number
}