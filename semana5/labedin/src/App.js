import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './components/img/perfil.jpg'
import LogoEmpresa1 from './components/img/lbn.png'
import LogoEmpresa2 from './components/img/wo-maker-code1.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'
import Email from './components/img/email.jpg'
import Endereco from './components/img/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {ImagemPerfil}
          nome="Vivian de Oliveira Costa" 
          descricao="Ola, sou Vivian.  Nasci e morei em São Paulo praticamente minha vida toda, atualmente moro em Lisboa-PT.
          Atuei na área comercial por 10 anos e na minha última experiência, tive um contato mais de perto com a TI, isso me motivou a buscar novos desafios.
          Atualmente estudo Analise e Desenvolvimento de Sistemas no centro universitário Claretiano e Desenvolvimento Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <section className = "page-section-container">
        <CardPequeno 
          imagem = {Email}
          descricao = "costa.vivs@gmail.com"
        />

        <CardPequeno 
          imagem = {Endereco}
          descricao = "Rua do madruga, 123"
        />
      </section>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LogoEmpresa1} 
          nome="Labenu" 
          descricao= "Como estudantes de Desenvolvimento Web Full Stack Tecnologías que irei aprender nessas 1000 horas de curso: Frontend:  HTML |  CSS | JavaScript | React | Jest. Backend: Node | TypeScript | MySQL | AWS | FireBase"
        />
        
        <CardGrande 
          imagem={LogoEmpresa2}
          nome="WoMakersCode" 
          descricao="Aprendi conceitos sobre o funcionamento da web, GIT e GitHub, HTML5, CSS3, Lógica de Programação, fundamentos de Javascript, metodologias de trabalho e boas práticas de interface para web."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
