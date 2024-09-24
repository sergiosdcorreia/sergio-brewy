import Image from "next/image"
import { RiCloseLargeLine, RiFacebookFill, RiInstagramLine, RiMenu4Line, RiTwitterXLine, RiYoutubeFill } from "react-icons/ri"

export default function Header() {

  return (
    <>
      <header id="navbar" className='w-100 text-black'>
        <nav className="max-w-[1920px">
          <div id="sticky-menu" className="fixed w-full top-0 left-0 z-50">
            <div className="flex items-center justify-between h-24 px-5">
              <div></div>
              <div>
                <Image className="w-20" src="/logo.png" alt="logo" width={205} height={205} />
              </div>
              <div id="nav-menu" className="absolute top-0 right-0 min-h-[70ch] w-full px-5 bg-white flex flex-col gap-5 duration-500 ease-out overflow-hidden">
                <div className="flex items-center justify-between h-24">
                  <Image className="w-20" src="/logo_2.png" alt="logo_2" width={205} height={205} />
                  <div id="closeicon" className="text-3xl cursor-pointer">
                    <RiCloseLargeLine />
                  </div>
                </div>
                <ul className="flex flex-col items-start gap-5">
                  <li>
                    <a href="#home" className="nav-link active">Home</a>
                  </li>
                  <li>
                    <a href="#about" className="nav-link">About</a>
                  </li>
                  <li>
                    <a href="#fragrance" className="nav-link">Fragrance</a>
                  </li>
                  <li>
                    <a href="#quality" className="nav-link">Quality</a>
                  </li>
                  <li>
                    <a href="#products" className="nav-link">Products</a>
                  </li>
                </ul>
                <div>
                  <p>Follow us <span>-</span></p>
                  <ul>
                    <li>
                      <a href="#">
                        <RiTwitterXLine />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <RiFacebookFill />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <RiInstagramLine />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <RiYoutubeFill />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <Image className="w-72" src="/coffee_leaf.png" alt="bg_leaf" width={205} height={205} />
                </div>
              </div>
              <div>
                <RiMenu4Line />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
