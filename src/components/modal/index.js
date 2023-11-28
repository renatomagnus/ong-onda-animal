import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const AdoptionModal = ({ isOpen, onRequestClose, petName, petImage }) => {
  const whatsappNumber = '51984598858';
  const message = `Olá, gostaria de adotar o(a) ${petName}`;

  const openWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
        message
      )}`,
      '_blank'
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adoption Modal"
    >
      <div className="pet__adoption">
        <img src={petImage} alt="Pet" />
        <button onClick={openWhatsApp}>Clique aqui para adotar {petName}</button>
        <p onClick={onRequestClose}>X</p>
      </div>
    </Modal>
  );
};

export default AdoptionModal;
