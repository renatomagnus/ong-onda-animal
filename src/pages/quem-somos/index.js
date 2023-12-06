import Footer from '@/components/footer';
import Header from '@/components/header';

const About = () => {
  return (
    <div id="page-wrapper">
      <Header />
      <main className="quem-somos">
        <div className="section-title">
          <h2>- quem somos -</h2>
          <p>
            Entidade sem fins lucrativos que trabalha a 15 anos em prol dos
            animais
          </p>
        </div>
        <h3>Alguns dos nossos trabalhos:</h3>
        <ul>
          <li>
            Promoção e efetivação de programas de esterilização de animais
            (castração).
          </li>
          <li>
            Atendimento médico veterinário para animais de rua com consultas e
            cirurgias realizadas em sua clínica veterinária.
          </li>
          <li>
            Participação em programas e projetos que visam o bem estar animal e
            conscientização sobre proteção animal.
          </li>
          <li>Campanhas de doação de animais.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};
export default About;
