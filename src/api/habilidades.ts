import axios from 'axios';
import { BaseResponse, GetHabilidadesResponse } from '../types/response';
import { axiosConfig } from './config';
import { UpdateHabilidadRequest } from '../types/request';

export const getHabilidades = async (): Promise<GetHabilidadesResponse> => {
    let response = await axios.get<GetHabilidadesResponse>('/habilidades', axiosConfig);
    return response.data;
}

export const updateHabilidad = async (id: number, data: UpdateHabilidadRequest): Promise<BaseResponse> => {
    let response = await axios.put<BaseResponse>(`/habilidades/${id}`, data, axiosConfig);
    return response.data;
}

export const deleteHabilidad = async (id: number): Promise<BaseResponse> => {
    let response = await axios.delete<BaseResponse>(`/habilidades/${id}`, axiosConfig);
    return response.data;
}