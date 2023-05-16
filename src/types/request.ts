import { Experiencia, Habilidad, InfoBasica } from ".";

export type LoginRequest = {
    username: string;
    password: string;
}

export type LogoutRequest = {
    accessToken: string;
}

export type UpdateExperienciaRequest = Omit<Experiencia, 'id'|'tipo'>;

export type UpdateHabilidadRequest = Omit<Habilidad, 'id'|'tipo'>;

export type UpdateInfoBasicaRequest = Omit<InfoBasica, 'id'>;