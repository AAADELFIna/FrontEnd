export type Experiencia = {
    id: number;
    tipo: string;
    organizacion: string,
    urlImagen?: string,
    titulo: string,
    periodo: string,
    descripcion: string,
    enlace?: string;
};

export type Habilidad = {
    id: number;
    tipo: string;
    nombre: string;
    calificacion: number;
}

export type InfoBasica = {
    id: number;
    nombre: string;
    cargo: string;
    acerca: string;
}