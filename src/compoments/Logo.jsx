import logoImage from '../assets/logo-header.svg'; // ajuste o nome do arquivo se necessário

const Logo = () => {
  return (
    <img
      src={logoImage}
      alt="Logomarca da aplicação"
      width={253}
      height={44}
    />
  );
};

export default Logo;