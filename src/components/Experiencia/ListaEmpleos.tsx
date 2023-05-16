import React from 'react';
import ContenedorEmpleo from "./ContenedorEmpleo";
import styles from './Experiencia.module.css';
import { Experiencia } from '../../types';
interface ListaEmpleosProps {
    data: Experiencia[];
    editable: boolean;
    onChange: () => void;
}
const ListaEmpleos = ({data, editable, onChange}: ListaEmpleosProps) => {
    return <div>
        {data.map(item => <ContenedorEmpleo data={item} editable={editable} onChange={onChange} />)}
    </div>
}

export default ListaEmpleos;