import './styles.css';
import gitblack from './../../img/icons/gitHub-black.svg';

const GitBtn = ({ link }) => {
  return (
    <a
      href={link}
      className="btn-outline"
      target="_blank"
      Rel="noreferrer noopener"
    >
      <img src={gitblack} alt="GitHub icon" />
      GitHub Repo
    </a>
  );
};

export default GitBtn;
