import "/node_modules/primeflex/primeflex.css"
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { BrowserRouter } from "react-router-dom";


const Header = () => {
  return ( 
    <BrowserRouter>
      <div className="flex justify-content-around flex-wrap pt-3 bg-primary-600" >
          <Logo />
          <SearchBar/>
          <div>
            <button>Cadastre-se</button>
            <button>Entrar</button>
            <a>Carrinho</a>
          </div>
      </div>
    </BrowserRouter>
   );
}
 
export default Header;