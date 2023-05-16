import axios from 'axios';
import { BaseResponse, GetInfoBasicaResponse } from '../types/response';
import { axiosConfig } from './config';
import { UpdateInfoBasicaRequest } from '../types/request';

export const getInfoBasica = async (): Promise<GetInfoBasicaResponse> => {
    let response = await axios.get<GetInfoBasicaResponse>('/infobasica', axiosConfig);
    return response.data;
}

export const updateInfoBasica = async (id: number, data: UpdateInfoBasicaRequest): Promise<BaseResponse> => {
    let response = await axios.put<BaseResponse>(`/infobasica/${id}`, data, axiosConfig);
    return response.data;
}
