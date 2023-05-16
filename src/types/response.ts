import { Experiencia, Habilidad, InfoBasica } from ".";

export type BaseResponse = {
    statusCode: number;
}
export type LoginResponse = BaseResponse & {
    accessToken: string;
}

export type GetExperienciasResponse = BaseResponse & {
    experiencias: Experiencia[];
}

export type GetHabilidadesResponse = BaseResponse & {
    habilidades: Habilidad[];
}

export type GetInfoBasicaResponse = BaseResponse & {
    infoBasica: InfoBasica;
}