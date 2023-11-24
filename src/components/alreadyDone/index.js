const AlreadyDone = () => {
  return (
    <section className="already__done">
      <div className="already__container">
        <div className="already__done--top">
          <h2 className="already__done--title uppercase">
            - o que já fizemos -
          </h2>
          <p className="already__done--text">
            Faça parte da nossa equipe, seja um doador, voluntário e parceiro de
            adoções
          </p>
        </div>
        <div className="already__done--bottom">
          <div className="already__done--card">
            <h3 className="already__done--number">43</h3>
            <p className="uppercase">cães resgatados</p>
          </div>
          <div className="already__done--card">
            <h3 className="already__done--number">62</h3>
            <p className="uppercase">gatos resgatados</p>
          </div>
          <div className="already__done--card">
            <h3 className="already__done--number">23</h3>
            <p className="uppercase">famílias felizes</p>
          </div>
          <div className="already__done--card">
            <h3 className="already__done--number">77</h3>
            <p className="uppercase">voluntários</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlreadyDone;
