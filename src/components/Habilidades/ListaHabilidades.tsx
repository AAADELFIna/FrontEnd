import React from 'react';
import ContenedorHabilidad from "./ContenedorHabilidad";
import { Habilidad } from '../../types';
interface ListaHabilidadesProps {
    data: Habilidad[];
    editable: boolean;
    onChange: () => void;
}
const ListaHabilidades = ({data, editable, onChange}: ListaHabilidadesProps) => {
    return <div>
        {data.map(item => <ContenedorHabilidad data={item} editable={editable} onChange={onChange} />)}
    </div>
}

export default ListaHabilidades;