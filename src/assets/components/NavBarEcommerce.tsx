import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import { ButtonCartEcommerce } from "./buttonCartEcommerce";

interface NavBarEcommerceProps{
  cartArticle :number,
  onAddArticle : () => void,
  articleNumber : number,
  removeArticle: () => void,
}

function NavBarEcommerce({cartArticle, onAddArticle, articleNumber, removeArticle}: NavBarEcommerceProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-65 items-center h-30 max-[1600px]:h-20">
        <div className="flex justify-between gap-10 items-center h-18 cursor-pointer ">
          <img className=" hover:scale-101 transition" src={logo} alt="ecommerce site logo" />
          <nav className="items-center">
            <ul className="flex gap-5 items-center text-neutral-400 font-bold cursor-pointer">
              <li className="relative  transition 
      after:content-[''] after:absolute after:left-1/2 after:bottom-[-50px] max-[1600px]:after:bottom-[-30px] after:w-0 after:h-[4px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                <a href="#">Collections</a>
              </li>
              <li className="relative  transition 
      after:content-[''] after:absolute after:left-1/2 after:bottom-[-50px] max-[1600px]:after:bottom-[-30px] after:w-0 after:h-[4px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                <a href="#">Men</a>
              </li>
              <li className="relative  transition 
      after:content-[''] after:absolute after:left-1/2 after:bottom-[-50px] max-[1600px]:after:bottom-[-30px] after:w-0 after:h-[4px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                <a href="#">Women</a>
              </li>
              <li className="relative  transition 
      after:content-[''] after:absolute after:left-1/2 after:bottom-[-50px] max-[1600px]:after:bottom-[-30px] after:w-0 after:h-[4px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                <a href="#">About</a>
              </li>
              <li className="relative  transition 
      after:content-[''] after:absolute after:left-1/2 after:bottom-[-50px] max-[1600px]:after:bottom-[-30px] after:w-0 after:h-[4px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                <a href="#" >Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between gap-10 items-center h-18">
          <ButtonCartEcommerce removeArticle={removeArticle} cartArticle={cartArticle} onAddArticle={onAddArticle} articleNumber={articleNumber} />
          <div className="w-15 cursor-pointer hover:scale-[1.2] transition hover:border-2 hover:rounded-[50%] hover:border-amber-600">
            <img src={avatar} alt="ecommerce site profile image" />
          </div>
        </div>
      </div>
      <hr className="mx-65 opacity-10 " />
    </div>
  );
}

export default NavBarEcommerce;
