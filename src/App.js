import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './stylesheets/body.css'
import Header from './componentes/Header';
import Card from './componentes/Card';
import foto1 from './img/foto1.jpg';
import foto2 from './img/foto2.jpg';
import foto3 from './img/foto3.jpg';
import foto4 from './img/foto4.jpg';
import foto5 from './img/foto5.jpg';
import foto6 from './img/foto6.jpg';
import Footer from './componentes/Footer'


function App() {
  return (
    <div>
      <Header title = "Galería de Imágenes con React" />
      <div className='grid-container'>
        <Card url = {foto1} title ="Person" description = "Lorem ipsum dolor sit amet, consectetur adipiscing"/>
        <Card url = {foto2} title ="Chair" description = "Lorem ipsum dolor sit amet, consectetur adipiscing" />
        <Card url = {foto3} title ="Stairs" description = "Lorem ipsum dolor sit amet, consectetur adipiscing"  />
        <Card url = {foto4} title ="Hand" description = "Lorem ipsum dolor sit amet, consectetur adipiscing"  />
        <Card url = {foto5} title ="Cat Swimming" description = "Lorem ipsum dolor sit amet, consectetur adipiscing"  />
        <Card url = {foto6} title ="Half Person" description = "Lorem ipsum dolor sit amet, consectetur adipiscing"  />
      </div>
      <Footer texto='Contemporary Photography' propiedad="All rights reserved &copy;" />
    </div>
  );
}

export default App;
