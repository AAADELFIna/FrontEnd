import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import BarraNavegacion from './components/Navegacion/BarraNavegacion';
import Banner from './components/Banner';
import ContenedorAcerca from './components/Acerca/ContenedorAcerca';
import ListaEmpleos from './components/Experiencia/ListaEmpleos';
import ListaHabilidades from './components/Habilidades/ListaHabilidades';
import 'react-circular-progressbar/dist/styles.css';
import { Experiencia, Habilidad, InfoBasica } from './types';
import { getExperiencias } from './api/experiencias';
import { getHabilidades } from './api/habilidades';
import { getInfoBasica } from './api/infoBasica';
Modal.setAppElement('#root');
function App() {
  // Datos que nos traeremos del backend. Los inicializamos con valores vacios
  const [experiencias, setExperiencias] = useState<Experiencia[]>([]);
  const [habilidades, setHabilidades] = useState<Habilidad[]>([]);
  const [infoBasica, setInfoBasica] = useState<InfoBasica>({id: 0, nombre: "", cargo: "", acerca: ""});
  const [username, setUsername] = useState<String>("");

  const onExperienciaChange = async () => {
    const response = await getExperiencias();
    setExperiencias(response.experiencias);
  }

  const onHabilidadChange = async () => {
    const response = await getHabilidades();
    setHabilidades(response.habilidades);
  }

  const onInfoBasicaChange = async () => {
    const response = await getInfoBasica();
    setInfoBasica(response.infoBasica);
  }

  const onLoginSuccess = async () => {
    setUsername("ddoming");
  }

  useEffect(() => {
    onExperienciaChange();
    onHabilidadChange();
    onInfoBasicaChange();
  }, []);

  return (
    <div className="App">
      <BarraNavegacion onLoginSuccess={onLoginSuccess} isLoggedIn={Boolean(username)} />
      <Banner />
      <ContenedorAcerca 
        editable={Boolean(username)}
        data={infoBasica} 
        onChange={onInfoBasicaChange}
      />
      <h2>Experiencia Laboral</h2>
      <ListaEmpleos 
        editable={Boolean(username)}
        data={experiencias.filter(x => x.tipo === 'laboral')} 
        onChange={onExperienciaChange}  
      />
      <h2>Estudios</h2>
      <ListaEmpleos 
        editable={Boolean(username)}
        data={experiencias.filter(x => x.tipo === 'estudio')} 
        onChange={onExperienciaChange}
      />
      <h2>Habilidades Técnicas</h2>
      <ListaHabilidades 
        editable={Boolean(username)}
        data={habilidades.filter(x => x.tipo === 'dura')} 
        onChange={onHabilidadChange}
      />
      <h2>Habilidades Interpersonales</h2>
      <ListaHabilidades 
        editable={Boolean(username)}
        data={habilidades.filter(x => x.tipo === 'blanda')} 
        onChange={onHabilidadChange}
      />
      <h2>Idiomas</h2>
      <ListaHabilidades 
        editable={Boolean(username)}
        data={habilidades.filter(x => x.tipo === 'idioma')} 
        onChange={onHabilidadChange}
      />
      <h2>Proyectos</h2>
      <ListaEmpleos 
        editable={Boolean(username)}
        data={experiencias.filter(x => x.tipo === 'proyecto')} 
        onChange={onExperienciaChange}
      />
    </div>
  );
}

export default App;
