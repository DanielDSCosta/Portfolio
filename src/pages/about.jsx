import React from 'react';
import StarRating from '../components/rating';

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <section className="section">
        <h2 className="section-title">Formation</h2>
        <p>-2012-2013: Bac GSI (Gestion des systèmes d’informations)
            Au lycée Hernest Hemingway à Nîmes </p>
           <p> -2013/2015: BTS SIO (Services Informatiques aux Organisations)
            Au lycée Jean Mermoz à Montpellier</p>
            <p>-2016-2017: Licence en Informatique.
            à la fac des sciences de Montpellier</p>
            <p>-2023: Formation dévelloppeur Web (Front-end), Oppenclassroom</p>
      </section>
      <section className="section">
        <h2 className="section-title">Expérience</h2>
        <p class="little-section">Armée de l’air</p>
        <p>-2018: Soldat en formation militaire pour l’armée de l’air pour être Commando Parachutiste</p>
        <p class="little-section">Développement web</p>
        <p>-Pendant mes années d'études: Divers stage d'apprentissage  </p>
        <p>Oppenclassroom: Divers projets à réaliser</p>
        <p class="little-section">Maçonnerie (Maçon)</p>
        <p>-05/06/2019 au 28/02/2023: CDI dans une entreprise de maçonnerie
        </p>
      </section>
      <section className="section">
      <h2 className="section-title">Compétences</h2>
      <section className=" section-atout">
        
        <div className="skill">
         <p>Français: </p>
          <StarRating rating={5} />
         </div>
         <div className="skill">
          <p>Espagnol: </p>
         <StarRating rating={3} />
         </div>
         <div className="skill">
          <p>Portugais: </p>
         <StarRating rating={5} />
         </div>
         <div className="skill">
          <p>Anglais: </p>
         <StarRating rating={4} />
         </div>
         <div className="skill">
          <p>HTML/CSS/SASS: </p>
         <StarRating rating={4} />
         </div>
         <div className="skill">
          <p>React: </p>
         <StarRating rating={4} />
         </div>
         <div className="skill">
          <p>Javascript: </p>
         <StarRating rating={3} />
         </div>
         <div className="skill">
          <p>Redux: </p>
         <StarRating rating={3} />
         </div>
         <div className="skill">
          <p>SQL/BDD: </p>
         <StarRating rating={2} />
         </div>
         <div className="skill">
          <p>GitHub: </p>
         <StarRating rating={4} />
         </div>
         <div className="skill">
          <p>Netlify: </p>
         <StarRating rating={3} />
         </div>
         <div className="skill">
          <p>NodeJS: </p>
         <StarRating rating={3} />
         </div>
        </section>
      </section>

      <section className="section">
        <h2 className="section-title">Interet</h2>
        <p>Sport: Musculation, Running, Etc. <br/>
        -Voyage ( Portugal, les Açores, Suisses, Allemagne, Angleterre, Italie)<br/>
        -Les nouvelles technologies.</p>
      </section>
    </div>
  );
};

export default About;