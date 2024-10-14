import axios, {AxiosResponse} from 'axios';
import {IUser} from "../models/IUser";
import {IResponseUsersModel} from "../models/IResponseUsersModel";
import {IResponcePostsModelModel} from "../models/IResponsePostsModel";
import {IPost} from "../models/IPost";
//todo users service

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        let axiosResponce = await axiosInstance.get<IResponseUsersModel>('/users');
        let data = axiosResponce.data;   // return axiosResponce.data.users; вместо 13 и 14
        return data.users;    //   return (axiosInstance.get<IResponseUsersModel>('/users')).data.users; вместо 12, 13 и 14
    },
}

//todo post service

export const postService = {
        getPostsOfUser: async (id: number): Promise<IPost[]> => {
            let axiosResponce = await axiosInstance.get<IResponcePostsModelModel>('/posts/user/' + id);
            return axiosResponce.data.posts
        }
    }