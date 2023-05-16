import axios from 'axios';
import { BaseResponse, GetExperienciasResponse } from '../types/response';
import { axiosConfig } from './config';
import { UpdateExperienciaRequest } from '../types/request';

export const getExperiencias = async (): Promise<GetExperienciasResponse> => {
    let response = await axios.get<GetExperienciasResponse>('/experiencias', axiosConfig);
    return response.data;
}

export const updateExperiencia = async (id: number, data: UpdateExperienciaRequest): Promise<BaseResponse> => {
    let response = await axios.put<BaseResponse>(`/experiencias/${id}`, data, axiosConfig);
    return response.data;
}

export const deleteExperiencia = async (id: number): Promise<BaseResponse> => {
    let response = await axios.delete<BaseResponse>(`/experiencias/${id}`, axiosConfig);
    return response.data;
}