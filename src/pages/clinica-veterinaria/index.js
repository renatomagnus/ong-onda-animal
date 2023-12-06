import Footer from '@/components/footer';
import Header from '@/components/header';

const VetClinic = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <main className="clinic">
        <div className="section-title">
          <h1>- CLÍNICA VETERINÁRIA CEA -</h1>
          <p>
            A ONDA dispõe de uma clínica especializada na saúde e no bem-estar
            de cães e gatos. Temos em nossa equipe os melhores veterinários da
            região, com as mais diversas especializações, inclusive o método de
            esterilização (técnica do gancho) com pequena incisão cirúrgica nas
            fêmeas.
          </p>
        </div>
        <h3>Serviços prestados na Clínica, com hora marcada:</h3>
        <ul>
          <li>- Atendimentos Veterinários;</li>
          <li>- Cirurgias de Esterilização – Castração;</li>
          <li>- Cirurgia Oncológica</li>
          <li>- Cirurgias em Geral</li>
          <li>- Ortopedia</li>
          <li>- Oncologia</li>
          <li>- Vacinas: Polivalente, Raiva e Gripe</li>
        </ul>
        <div className="clinic-infos">
          <p>
            <span className="bold">Telefone clínica:</span> (51) 3041.5081 /
            3112.5091
          </p>
          <a
            href="https://www.google.com.br/maps/place/Av.+Nossa+Sra.+da+Boa+Viagem,+184+-+Vila+Jardim+America,+Cachoeirinha+-+RS/@-29.9604406,-51.1107222,17z/data=!3m1!4b1!4m5!3m4!1s0x9519714cd594080d:0xa6db191919370746!8m2!3d-29.9604406!4d-51.1085335"
            target="_blank"
          >
            A. Nossa Senhora da Boa Viagem, 184 – Cachoeirinha/RS
          </a>
          <p>
            <span className="bold">E-mail:</span>{' '}
            <a href="mailto:ondaanimal.cea@gmail.com">
              ondaanimal.cea@gmail.com
            </a>
          </p>
          <p>
            <span className="bold">Facebook:</span>{' '}
            <a
              href="https://www.facebook.com/people/ONDA-Organiza%C3%A7%C3%A3o-Nacional-de-Defesa-Animal/100081495490168/"
              target="_blank"
            >
              Organização Nacional de Defesa Animal – Onda
            </a>
          </p>
          <p>
            <span className="bold">Instagram:</span>{' '}
            <a
              href="https://www.instagram.com/ondaanimal_adocoes/"
              target="_blank"
            >
              https://www.instagram.com/ondaanimal_adocoes/
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VetClinic;
