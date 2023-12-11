import React, {useState, useEffect} from 'react';
import projects from '../data/projects.json';


const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Préchargement des images
    projects.forEach(project => {
      const img = new Image();
      img.src = project.largeImage;
    });

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
      Line 1. <br/>
        Line 2. <br/>
       Line 3. <br/>
      </p>
      <h2 className="projects-title">Mes Projets</h2>
      <div className="card-container">
        {projects.sort((a, b) => a.id - b.id).map((item, index) => (
          <div className="card" key={index} onClick={() => setSelectedImage(item)}>
            <h3 className="card-title">{item.title}</h3>
            <img src={item.image} alt={item.github} className="card-image" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
          <h2 className="modal-title">{selectedImage.title}</h2>
          <img src={selectedImage.largeImage} alt={selectedImage.github} className="modal-image" onClick={(e) => e.stopPropagation()} />
           <p className="modal-description">{selectedImage.tags.join(' , ')}</p>
         <a href={selectedImage.github} target="_blank" rel="noopener noreferrer" className="modal-link">Voir sur GitHub</a>
        </div>
        </div>
      )}
    </div>
  );
};

export default About;