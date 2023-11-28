import { useState, useEffect } from 'react';
import AdoptionModal from '../modal';
import Modal from 'react-modal';

const PetGallery = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'All',
    size: 'All',
    age: 'All',
    gender: 'All',
  });

  const petData = [
    {
      name: 'Toby',
      type: 'Cão',
      size: 'Grande',
      age: 'Adulto',
      gender: 'Macho',
      image: '/pets/LUCY.jpg',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed nostrum accusantium quae fugit distinctio quia, maiores provident ipsam dicta saepe. Facere vero est magni quo vel fugit beatae saepe.'
    },
    {
      name: 'Scooby',
      type: 'Cão',
      size: 'Pequeno',
      age: 'Filhote',
      gender: 'Fêmea',
      image: '/pets/lulu.jpg',
    },
    {
      name: 'Preta',
      type: 'Gato',
      size: 'Médio',
      age: 'Adulto',
      gender: 'Fêmea',
      image: '/pets/LUCY.jpg',
    },
    {
      name: 'Cusco',
      type: 'Gato',
      size: 'Pequeno',
      age: 'Filhote',
      gender: 'Macho',
      image: '/pets/LUCY.jpg',
    },
    {
      name: 'Cusco',
      type: 'Gato',
      size: 'Pequeno',
      age: 'Filhote',
      gender: 'Macho',
      image: '/pets/LUCY.jpg',
    },
    {
      name: 'Cusco',
      type: 'Gato',
      size: 'Pequeno',
      age: 'Filhote',
      gender: 'Macho',
      image: '/pets/LUCY.jpg',
    },
    {
      name: 'Cusco',
      type: 'Gato',
      size: 'Pequeno',
      age: 'Filhote',
      gender: 'Macho',
      image: '/pets/LUCY.jpg',
    },
    {
      name: 'Cusco',
      type: 'Gato',
      size: 'Pequeno',
      age: 'Filhote',
      gender: 'Macho',
      image: '/pets/LUCY.jpg',
    },
    {
      name: 'Cusco',
      type: 'Gato',
      size: 'Pequeno',
      age: 'Filhote',
      gender: 'Macho',
      image: '/pets/LUCY.jpg',
    },
    {
      name: 'Cusco',
      type: 'Gato',
      size: 'Pequeno',
      age: 'Filhote',
      gender: 'Macho',
      image: '/pets/LUCY.jpg',
    },
  ];

  useEffect(() => {
    const loadPets = () => {
      let filteredPets = petData;

      if (selectedFilters.type !== 'All') {
        filteredPets = filteredPets.filter(
          pet => pet.type === selectedFilters.type
        );
      }

      if (selectedFilters.size !== 'All') {
        filteredPets = filteredPets.filter(
          pet => pet.size === selectedFilters.size
        );
      }

      if (selectedFilters.age !== 'All') {
        filteredPets = filteredPets.filter(
          pet => pet.age === selectedFilters.age
        );
      }

      if (selectedFilters.gender !== 'All') {
        filteredPets = filteredPets.filter(
          pet => pet.gender === selectedFilters.gender
        );
      }

      setPets(filteredPets);
    };

    loadPets();
  }, [selectedFilters]);

  const handleFilterChange = (filter, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filter]: value,
    }));
  };

  const openModal = (pet) => {
    setSelectedPet(pet);
  };

  const closeModal = () => {
    setSelectedPet(null);
  };

  return (
    <section className="pet-gallery">
      <div className="pet-gallery__top">
        <h2 className="uppercase pet-gallery__title">- adoção -</h2>
        <p>Alguns de nossos amiguinhos à procura de um novo lar</p>
      </div>
      <div className="pet-gallery__filters">
        <select onChange={e => handleFilterChange('type', e.target.value)}>
          <option value="All">Espécie</option>
          <option value="Cão">Cães</option>
          <option value="Gato">Gatos</option>
        </select>

        <select onChange={e => handleFilterChange('size', e.target.value)}>
          <option value="All">Tamanho</option>
          <option value="Grande">Grande</option>
          <option value="Médio">Médio</option>
          <option value="Pequeno">Pequeno</option>
        </select>

        <select onChange={e => handleFilterChange('age', e.target.value)}>
          <option value="All">Idade</option>
          <option value="Adulto">Adulto</option>
          <option value="Filhote">Filhote</option>
        </select>

        <select onChange={e => handleFilterChange('gender', e.target.value)}>
          <option value="All">Gênero</option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>
      </div>
      <div className="pet-gallery__animals">
        {pets.map((pet, index) => (
          <div className="pet-gallery__animal" key={index} onClick={() => openModal(pet)}>
            <img src={pet.image} alt={`Pet ${index}`} />
            <p className='pet-gallery__animals--name'>{pet.name}</p>
            <p>{pet.gender} / {pet.size} / {pet.age}</p>
            <p className='pet-gallery__animals--description'>{pet.description}</p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedPet}
        onRequestClose={closeModal}
        contentLabel="Pet Modal"
      >
        {selectedPet && (
          <div>
            <img src={selectedPet.image} alt={selectedPet.name} />
            <p>{selectedPet.name}</p>
            <p>
              {selectedPet.gender} / {selectedPet.size} / {selectedPet.age}
            </p>
            <p>{selectedPet.description}</p>
            <AdoptionModal
              isOpen={!!selectedPet}
              onRequestClose={closeModal}
              petName={selectedPet.name}
              petImage={selectedPet.image}
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default PetGallery;
