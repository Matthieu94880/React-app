import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/43">Questionnaire</Link>
      <Link to="/profils">Profils</Link>
    </nav>
  );
}

export default Header;
