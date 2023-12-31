import { Container } from "./components/container";
import ImgGabi from "./assets/Gabi.jpg";
import ImgSite from "./assets/ilust1.png";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";
import { Transition } from "@headlessui/react";
import { TbMenu2, TbLocationHeart } from "react-icons/tb";
import { IoIosCloseCircleOutline, IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { RiHeartsFill } from "react-icons/ri";
import { BsFillChatHeartFill } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgGabisLinks from "./assets/gabislinks.png";
import ImgAgeCalculator from "./assets/age-calculator.png";
import ImgFuelPrice from "./assets/fuel-price.png";
import ImgLandingPage from "./assets/landing-page.png";
import ImgPhraseGenerator from "./assets/phrase-generator.png";
import ImgRangeHotels from "./assets/range-hotels.png";
import ImgShoppingCart from "./assets/shopping-cart.png";
import ImgWebCarros from "./assets/web-carros.png";

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sliderPerView, setSliderPerView] = useState<number>(1);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.setAttribute("data-theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", handleMenu);
    window.addEventListener("resize", handleMenu);
    const section = document.getElementById("skills");

    if (window.innerWidth > 1024) {
      setScreenWidth(true);
      setSliderPerView(3);
    } else if (window.innerWidth < 1024 && 640 < window.innerWidth) {
      setSliderPerView(2);
    } else {
      setScreenWidth(false);
      setSliderPerView(1);
    }

    function handleMenu() {
      if (isOpen) {
        setIsOpen(false);
      }
      if (window.innerWidth > 1024) {
        setScreenWidth(true);
        setSliderPerView(3);
      } else if (window.innerWidth < 1024 && 640 < window.innerWidth) {
        setSliderPerView(2);
      } else {
        setScreenWidth(false);
        setSliderPerView(1);
      }
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    }

    return () => {
      window.removeEventListener("scroll", handleMenu);
      window.removeEventListener("resize", handleMenu);
    };
  }, [isOpen, screenWidth]);

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  return (
    <>
      <div className="w-full text select-none dark:bg-stone-700 py-4 dark:text-white text-stone-600/80 tracking-wide font-medium menu uppercase h-16 bg-orange-50 z-10 drop-shadow text-base fixed">
        <div className="flex w-full items-center justify-between max-w-7xl px-4 mx-auto">
          <div className="flex items-center gap-2">
            <MdLightMode
              color={theme == "dark" ? "#79746E" : "#B45309"}
              size={theme == "dark" ? 24 : 28}
            />
            <input
              className="mb-1 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 dark:bg-slate-50 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:after:bg-amber-600 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              checked={theme == "dark" ? true : false}
              onClick={toggleTheme}
            />
            <MdDarkMode
              color={theme == "dark" ? "#D19146" : "#79746E"}
              size={theme == "dark" ? 28 : 24}
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white absolute top-4 right-4 focus:outline-none"
            >
              {isOpen ? (
                <IoIosCloseCircleOutline
                  size={28}
                  color={theme == "dark" ? "#fff" : "#79746E"}
                />
              ) : (
                <TbMenu2
                  size={28}
                  color={theme == "dark" ? "#fff" : "#79746E"}
                />
              )}
            </button>
          </div>
          {screenWidth && (
            <div className="flex gap-7 dark:font-medium text-lg tracking-wide">
              {" "}
              <a
                className=" dark:hover:text-white hover:text-amber-700 hover:scale-110 transition-all ease-linear"
                href="#about"
              >
                Sobre
              </a>
              <a
                className="dark:hover:text-white hover:text-amber-700 hover:scale-110 transition-all ease-linear"
                href="#skills"
              >
                Habilidades
              </a>
              <a
                className="dark:hover:text-white hover:text-amber-700 hover:scale-110 transition-all ease-linear"
                href="#projects"
              >
                Projetos
              </a>
              <a
                className="dark:hover:text-white hover:text-amber-700 hover:scale-110 transition-all ease-linear"
                href="#contact"
              >
                Contato
              </a>
            </div>
          )}
        </div>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div
              ref={ref}
              className="my-4 p-6 text-2xl text-stone-600 dark:text-white dark:bg-stone-900 font-bold bg-white min-h-screen flex flex-col gap-7"
            >
              <a
                className=" dark:hover:text-white p-6 hover:text-amber-700 hover:scale-110 transition-all ease-linear"
                href="#about"
              >
                Sobre
              </a>
              <a
                className="dark:hover:text-white p-6 hover:text-amber-700 hover:scale-110 transition-all ease-linear"
                href="#skills"
              >
                Habilidades
              </a>
              <a
                className="dark:hover:text-white p-6 hover:text-amber-700 hover:scale-110 transition-all ease-linear"
                href="#projects"
              >
                Projetos
              </a>
              <a
                className="dark:hover:text-white p-6 hover:text-amber-700 hover:scale-110 transition-all ease-linear"
                href="#contact"
              >
                Contato
              </a>
            </div>
          )}
        </Transition>
      </div>

      <section className="select-none header min-h-screen ">
        <Container>
          <div className="flex md:flex-row flex-col-reverse items-center md:items-end mt-20 justify-center">
            {" "}
            <div className="flex justify-center w-fit flex-col">
              <p className="menu font-bold flex mb-2 gap-2 text-white tracking-wider md:text-4xl text-xl drop-shadow-lg">
                Hello{" "}
                <div className="animate-waving-hand">
                  <BsChatHeart color={theme == "dark" ? "#D97706" : "#fff"} />
                </div>
              </p>
              <p className="menu font-bold uppercase mb-2 dark:text-white text-amber-700 tracking-wider md:text-6xl text-4xl drop-shadow-lg">
                I'm Gabriella,
              </p>
              <p className="menu font-bold uppercase text-white tracking-wider md:text-3xl text-xl drop-shadow-lg">
                Front-End Developer
              </p>
              <div className="flex gap-6 justify-center mt-4">
                {" "}
                <button className="menu uppercase mb-2 font-medium tracking-wider hover:font-medium text-sm bg-white/80 dark:bg-amber-600/80 px-14 drop-shadow-md hover:bg-white dark:text-white dark:hover:bg-amber-600 hover:scale-110 transition-all ease-out text-amber-800 py-2 rounded-2xl">
                  Download
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              {" "}
              <img
                className="w-full max-w-xs md:max-w-md"
                src={ImgSite}
                alt=""
              />
            </div>
          </div>
        </Container>
      </section>
      <section id="about" className="about min-h-screen">
        <Container>
          <div className="flex sm:flex-row flex-col-reverse justify-center select-none drop-shadow-lg dark:drop-shadow-none sm:items-start items-center gap-5 sm:gap-10">
            <div className="flex flex-col text-justify menu">
              {" "}
              <h1 className="text-stone-600  dark:text-white  flex flex-col items-center sm:items-start justify-center mb-4 md:text-8xl text-5xl text font-black uppercase dark:drop-shadow drop-shadow-lg tracking-wide">
                Sobre
                <h2 className="  text-stone-600 flex gap-2 items-center dark:text-white md:text-7xl text-4xl text font-bold uppercase dark:drop-shadow drop-shadow-lg tracking-wide">
                  Mim{" "}
                  <div className="md:text-5xl drop-shadow-none animate-waving-hand">
                    <BsChatHeart
                      color={theme == "dark" ? "#D97706" : "#57534E"}
                    />
                  </div>
                </h2>
              </h1>
              <p className="max-w-96 text-stone-600 dark:drop-shadow md:text-base text-sm ">
                Desenvolvedora Front-End, estudante de Engenharia de Software e
                formada em Pedagogia. Possuo experiência em Back-End e sou
                apaixonada pela liberdade que só a programação pode oferecer.
                Altamente capacitada no trabalho em equipe, proativa, de fácil
                aprendizado, organizada e flexível. Possuo noções sólidas do
                idioma inglês e ótimo relacionamento interpessoal.
              </p>
              <div className="flex gap-6 justify-center mt-4">
                {" "}
                <button className="menu mb-10 md:mb-0 uppercase font-medium tracking-wider hover:font-medium text-xs bg-stone-600/80 dark:bg-amber-600/80 px-10 drop-shadow-md hover:bg-stone-600 dark:text-white dark:hover:bg-amber-600 hover:scale-110 transition-all ease-out text-white py-2 rounded-2xl">
                  Download
                </button>
              </div>
            </div>
            <div></div>
            <img
              className="flex w-full md:max-w-xs max-w-60 rounded-2xl"
              src={ImgGabi}
              alt="Gabriella Possidério"
            />
          </div>
        </Container>
      </section>
      <section id="skills" className="skills select-none min-h-screen ">
        <Container>
          <h1 className="text-amber-800 dark:text-white lg:ml-10 md:ml-6 flex flex-col items-center sm:items-start justify-center mb-4 text-5xl text font-black uppercase drop-shadow-lg tracking-wide">
            Tech
            <h2 className="  text-white dark:text-amber-700/90 text-7xl text font-black uppercase drop-shadow-lg tracking-wide">
              Stack
            </h2>
          </h1>

          <Transition
            show={isVisible}
            enter="transition duration-500 ease-in-out"
            enterFrom="opacity-0 transform translate-x-[-100%]"
            enterTo="opacity-100 transform translate-x-0"
            leave="transition duration-500 ease-in-out"
            leaveFrom="opacity-100 transform translate-x-[-100%]"
            leaveTo="opacity-0 transform translate-x-4"
          >
            <div className="select-none place-items-center gap-2 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
              <article className="h-32 duration-500 menu w-56 rounded-lg flex mt-3 lg:mt-6 mb-3 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
                <h1 className="text-xl flex flex-col items-center">
                  React.Js <FaReact size={32} />
                </h1>
              </article>
              <article className="h-32 duration-500 menu w-56 rounded-lg flex mt-3 lg:mt-6 mb-3 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
                <h1 className="text-xl flex flex-col items-center">
                  TypeScript <SiTypescript size={32} />
                </h1>
              </article>
              <article className="h-32 duration-500 menu w-56  rounded-lg flex mt-3 lg:mt-6 mb-3 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
                <h1 className="text-xl flex flex-col items-center">
                  Tailwind CSS <SiTailwindcss size={32} />
                </h1>
              </article>
              <article className="h-32 duration-500 menu w-56 rounded-lg flex mt-3 mb-3 lg:mt-6 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
                <h1 className="text-xl flex flex-col items-center">
                  Python <FaPython size={32} />
                </h1>
              </article>
              <article className="h-32 duration-500 menu w-56 rounded-lg flex mt-3 lg:mt-6 mb-3 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
                <h1 className="text-xl flex flex-col items-center">
                  HTML5 <FaHtml5 size={32} />
                </h1>
              </article>
              <article className="h-32 duration-500 menu w-56  rounded-lg flex mt-3 lg:mt-6 mb-3 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
                <h1 className="text-xl flex flex-col items-center">
                  CSS3 <FaCss3Alt size={32} />
                </h1>
              </article>
              <article className="h-32 duration-500 menu w-56 rounded-lg flex mt-3 lg:mt-6 mb-3 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
                <h1 className="text-xl flex flex-col items-center">
                  JavaScript <IoLogoJavascript size={32} />
                </h1>
              </article>
              <article className="h-32 duration-500 menu w-56 rounded-lg flex mt-3 lg:mt-6 mb-10 sm:mb-3 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
                <h1 className="text-xl flex flex-col items-center">
                  Git <FaGitAlt size={32} />
                </h1>
              </article>
            </div>
          </Transition>
        </Container>
      </section>
      <section id="projects" className="projects min-h-screen select-none ">
        <Container>
          {" "}
          <h1 className="text-amber-800 dark:text-stone-700 flex flex-col items-center tracking-wider justify-center mb-8 text-5xl sm:text-7xl md:text-8xl text font-black uppercase drop-shadow-lg">
            Projects
          </h1>
          <Swiper
            slidesPerView={sliderPerView}
            className=" w-full mt-6  max-w-96 sm:max-w-2xl md:max-w-3xl lg:max-w-6xl text-stone-700 rounded-lg"
            pagination={{ clickable: true }}
            navigation
            loop={true}
          >
            <SwiperSlide>
              <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
                {" "}
                <img
                  src={ImgGabisLinks}
                  alt="Site Gabis Links"
                  className=" object-cover border-4 border-white/60 rounded-lg drop-shadow-lg h-64"
                />
                <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col  dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="p-3 text-lg bg-amber-800/40 duration-500 dark:bg-stone-700/40 w-full m-2 menu dark:text-white text-stone-600 font-black ">
                    A repository of links made in React
                  </h1>{" "}
                  <div className="flex gap-3 menu text-sm cursor-pointer items-center">
                    <a
                      href="https://github.com/gabipossiderio/GabisLinks"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 dark:hover:bg-stone-700 hover:bg-amber-800 text-white font-bold transition-all duration-150 py-2 px-4  rounded shadow"
                    >
                      Repositório
                    </a>
                    <a
                      href="https://links.gabis.dev/"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 hover:bg-amber-800 dark:hover:bg-stone-700 text-white font-bold transition-all duration-150 h-700 py-2 px-2  rounded shadow"
                    >
                      Acessar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
                {" "}
                <img
                  src={ImgWebCarros}
                  alt="Site Web Carros"
                  className=" object-cover border-4 border-white/60 rounded-lg drop-shadow-lg  h-64"
                />
                <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="p-3 text-lg bg-amber-800/40 duration-500 dark:bg-stone-700/40 w-full m-2 menu dark:text-white text-stone-600 font-black ">
                    Cars showcase website made in React, firebase and typescript
                  </h1>{" "}
                  <div className="flex gap-3 menu text-sm cursor-pointer items-center">
                    <a
                      href="https://github.com/gabipossiderio/WebCarros"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 dark:hover:bg-stone-700 hover:bg-amber-800 text-white font-bold transition-all duration-150 py-2 px-4  rounded shadow"
                    >
                      Repositório
                    </a>
                    <a
                      href="https://web-carros.gabis.dev/"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 hover:bg-amber-800 dark:hover:bg-stone-700 text-white font-bold transition-all duration-150 h-700 py-2 px-2  rounded shadow"
                    >
                      Acessar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
                {" "}
                <img
                  src={ImgPhraseGenerator}
                  alt="Site Phrase Generator"
                  className=" object-cover h-64 border-4 border-white/60 rounded-lg drop-shadow-lg "
                />
                <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="p-3 text-lg bg-amber-800/40 duration-500 dark:bg-stone-700/40 w-full m-2 menu dark:text-white text-stone-600 font-black ">
                    Phrase Generator made in React
                  </h1>{" "}
                  <div className="flex gap-3 menu text-sm cursor-pointer items-center">
                    <a
                      href="https://github.com/gabipossiderio/PhraseGenerator"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 dark:hover:bg-stone-700 hover:bg-amber-800 text-white font-bold transition-all duration-150 py-2 px-4  rounded shadow"
                    >
                      Repositório
                    </a>
                    <a
                      href="https://phrase-generator.gabis.dev/"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 hover:bg-amber-800 dark:hover:bg-stone-700 text-white font-bold transition-all duration-150 h-700 py-2 px-2  rounded shadow"
                    >
                      Acessar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
                {" "}
                <img
                  src={ImgShoppingCart}
                  alt="Site Shopping Cart"
                  className=" object-cover h-64 border-4 border-white/60 rounded-lg drop-shadow-lg "
                />
                <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="p-3 text-lg bg-amber-800/40 duration-500 dark:bg-stone-700/40 w-full m-2 menu dark:text-white text-stone-600 font-black ">
                    Shopping cart application made in React
                  </h1>{" "}
                  <div className="flex gap-3 menu text-sm cursor-pointer items-center">
                    <a
                      href="https://github.com/gabipossiderio/ShoppingCart"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 dark:hover:bg-stone-700 hover:bg-amber-800 text-white font-bold transition-all duration-150 py-2 px-4  rounded shadow"
                    >
                      Repositório
                    </a>
                    <a
                      href="https://shopping-cart.gabis.dev/"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 hover:bg-amber-800 dark:hover:bg-stone-700 text-white font-bold transition-all duration-150 h-700 py-2 px-2  rounded shadow"
                    >
                      Acessar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
                {" "}
                <img
                  src={ImgFuelPrice}
                  alt="Site Fuel Price"
                  className=" object-cover h-64 border-4 border-white/60 rounded-lg drop-shadow-lg "
                />
                <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="p-3 text-lg bg-amber-800/40 duration-500 dark:bg-stone-700/40 w-full m-2 menu dark:text-white text-stone-600 font-black ">
                    Fuel price comparator made in React
                  </h1>{" "}
                  <div className="flex gap-3 menu text-sm cursor-pointer items-center">
                    <a
                      href="https://github.com/gabipossiderio/FuelPriceComparator"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 dark:hover:bg-stone-700 hover:bg-amber-800 text-white font-bold transition-all duration-150 py-2 px-4  rounded shadow"
                    >
                      Repositório
                    </a>
                    <a
                      href="https://fuel-price.gabis.dev/"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 hover:bg-amber-800 dark:hover:bg-stone-700 text-white font-bold transition-all duration-150 h-700 py-2 px-2  rounded shadow"
                    >
                      Acessar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
                {" "}
                <img
                  src={ImgRangeHotels}
                  alt="Site Range Hotels"
                  className=" object-cover h-64 border-4 border-white/60 rounded-lg drop-shadow-lg "
                />
                <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="p-3 text-lg bg-amber-800/40 duration-500 dark:bg-stone-700/40 w-full m-2 menu dark:text-white text-stone-600 font-black ">
                    CSS, HTML and JavaScript Hotel Website
                  </h1>{" "}
                  <div className="flex gap-3 menu text-sm cursor-pointer items-center">
                    <a
                      href="https://github.com/gabipossiderio/RangeHotels"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 dark:hover:bg-stone-700 hover:bg-amber-800 text-white font-bold transition-all duration-150 py-2 px-4  rounded shadow"
                    >
                      Repositório
                    </a>
                    <a
                      href="https://range-hotels.gabis.dev/"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 hover:bg-amber-800 dark:hover:bg-stone-700 text-white font-bold transition-all duration-150 h-700 py-2 px-2  rounded shadow"
                    >
                      Acessar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
                {" "}
                <img
                  src={ImgLandingPage}
                  alt="Landing Page"
                  className=" object-cover h-64 border-4 border-white/60 rounded-lg drop-shadow-lg "
                />
                <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="p-3 text-lg bg-amber-800/40 duration-500 dark:bg-stone-700/40 w-full m-2 menu dark:text-white text-stone-600 font-black ">
                    HTML/CSS Landing Page
                  </h1>{" "}
                  <div className="flex gap-3 menu text-sm cursor-pointer items-center">
                    <a
                      href="https://github.com/gabipossiderio/HuddleLandingPage"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 dark:hover:bg-stone-700 hover:bg-amber-800 text-white font-bold transition-all duration-150 py-2 px-4  rounded shadow"
                    >
                      Repositório
                    </a>
                    <a
                      href="https://landing-page.gabis.dev/"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 hover:bg-amber-800 dark:hover:bg-stone-700 text-white font-bold transition-all duration-150 h-700 py-2 px-2  rounded shadow"
                    >
                      Acessar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
                {" "}
                <img
                  src={ImgAgeCalculator}
                  alt="Site Age Calculator"
                  className=" object-cover h-64 border-4 border-white/60 rounded-lg drop-shadow-lg "
                />
                <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h1 className="p-3 text-lg bg-amber-800/40 duration-500 dark:bg-stone-700/40 w-full m-2 menu dark:text-white text-stone-600 font-black ">
                    Age calculator made in React
                  </h1>{" "}
                  <div className="flex gap-3 menu text-sm cursor-pointer items-center">
                    <a
                      href="https://github.com/gabipossiderio/AgeCalculator"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 dark:hover:bg-stone-700 hover:bg-amber-800 text-white font-bold transition-all duration-150 py-2 px-4  rounded shadow"
                    >
                      Repositório
                    </a>
                    <a
                      href="https://age-calculator.gabis.dev/"
                      target="_blank"
                      className="dark:bg-stone-700/80 bg-amber-800/80 hover:bg-amber-800 dark:hover:bg-stone-700 text-white font-bold transition-all duration-150 h-700 py-2 px-2  rounded shadow"
                    >
                      Acessar Projeto
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
      <section id="contact" className="contact min-h-screen select-none">
        <Container>
          <div className="text flex flex-col sm:items-end sm:justify-end items-start justify-center">
          <h1 className="text-white/80 flex flex-col items-center tracking-wide mb-1 justify-center text-5xl sm:text-7xl md:text-7xl lg:text-8xl text font-black uppercase drop-shadow-lg">
            Entre
          </h1><h1 className="text-white/80 flex flex-row items-center tracking-wider justify-center gap-3 text-5xl sm:text-7xl md:text-7xl lg:text-8xl text font-black uppercase drop-shadow-lg">
          Em<div className="sm:text-5xl lg:pt-4 text-3xl animate-waving-hand"><BsFillChatHeartFill /></div>
          </h1><h1 className="text-white/80 flex flex-col items-center tracking-wider border-b-2 border-amber-700 dark:border-white/80 justify-center text-5xl sm:text-7xl md:text-7xl lg:text-8xl text font-black uppercase drop-shadow-lg">
            Contato
          </h1>
          </div>
        </Container>
      </section>
      <div className="relative">
        <footer className="bg-orange-50 z-10 border-t-8 dark:border-stone-700 border-amber-700 absolute bottom-0 w-full h-14">
          FOOTER
        </footer>
      </div>
    </>
  );
}

export default App;
