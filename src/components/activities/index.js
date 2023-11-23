const Activities = () => {
  return (
    <section className="activities">
      <div className="activity__container">
        <a href="#" className="activity">
          <div className="activity__image--container">
            <img
              src="/icons/pata.png"
              alt="Atendimento veterinário"
              className="activity__image"
            />
          </div>
          <h3 className="activity__title">Atendimentos Veterinários</h3>
          <p href="" className="activity__description">
            Atendimentos Veterinários
          </p>
        </a>
        <a href="#" className="activity">
          <div className="activity__image--container">
            <img
              src="/icons/cirurgia.png"
              alt="Cirurgia"
              className="activity__image"
            />
          </div>
          <h3 className="activity__title">Cirurgias em Geral</h3>
          <p href="" className="activity__description">
            Cirurgias em Geral para cães e gatos
          </p>
        </a>
        <a href="#" className="activity">
          <div className="activity__image--container">
            <img
              src="/icons/castracao.png"
              alt="Castração"
              className="activity__image"
            />
          </div>
          <h3 className="activity__title">Castração</h3>
          <p href="" className="activity__description">
            Cirurgias de Esterilização para cães e gatos
          </p>
        </a>
        <a href="#" className="activity">
          <div className="activity__image--container">
            <img
              src="/icons/adocao.png"
              alt="Adoção"
              className="activity__image"
            />
          </div>
          <h3 className="activity__title">Adoção</h3>
          <p href="" className="activity__description">
            Diversos cães e gatos esperando um novo lar
          </p>
        </a>
      </div>
    </section>
  );
};

export default Activities;
