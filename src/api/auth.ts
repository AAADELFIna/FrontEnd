import axios from 'axios';
import { BaseResponse, LoginResponse } from '../types/response';
import { LoginRequest, LogoutRequest } from '../types/request';
import { axiosConfig } from './config';


export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    let response = await axios.post<LoginResponse>('/auth/login', data, axiosConfig);
    return response.data;
}

export const logout = async (data: LogoutRequest): Promise<BaseResponse> => {
    let response = await axios.post<BaseResponse>('/auth/logout', data, axiosConfig);
    return response.data;
}