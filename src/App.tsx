import { Container } from "./components/container";
import ImgGabi from "./assets/Gabi.jpg";
import ImgSite from "./assets/ilust2.png";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode, MdEmail } from "react-icons/md";
import { BsChatHeart, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Transition } from "@headlessui/react";
import { TbMenu2 } from "react-icons/tb";
import {
  IoIosCloseCircleOutline,
  IoLogoJavascript,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { FaHtml5, FaReact, FaGitAlt, FaPython, FaHeart } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
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
import AnimateOnScroll from "./components/scroll";
import { Header } from "./components/header";
import { SkillCard } from "./components/skillCard";
import { Slide } from "./components/slide";
import { ContactCard } from "./components/contactCard";

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(false);
  const [sliderPerView, setSliderPerView] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);
  const date = new Date();
  const currentYear = date.getFullYear();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }

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
    window.addEventListener("resize", () => {
      handleMenu(), handleScreenWidth(window.innerWidth);
    });

    handleScreenWidth(window.innerWidth);

    function handleScreenWidth(width: number) {
      if (width > 1024) {
        setScreenWidth(true);
        setSliderPerView(3);
      } else if (width < 1024 && 640 < width) {
        setSliderPerView(2);
      } else {
        setScreenWidth(false);
        setSliderPerView(1);
      }
    }

    function handleMenu() {
      if (isOpen) {
        setIsOpen(false);
      }
      const scrollTop = window.scrollY;

      setIsVisible(scrollTop > 300);
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

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="w-full text select-none fixed dark:bg-stone-700 py-4 dark:text-white text-stone-600/80 tracking-wide font-medium menu uppercase h-16 bg-orange-50 z-10 drop-shadow text-base">
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
              <Header />
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
              <Header />
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
                <a
                  href="CurriculoGabi.pdf"
                  download
                  className="menu uppercase mb-2 font-medium tracking-wider hover:font-medium text-sm bg-white/80 dark:bg-amber-600/80 px-14 drop-shadow-md hover:bg-white dark:text-white dark:hover:bg-amber-600 hover:scale-110 transition-all ease-out text-amber-800 py-2 rounded-2xl"
                >
                  Download CV
                </a>
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
                <a
                  href="CurriculoGabi.pdf"
                  download
                  className="menu mb-10 md:mb-0 uppercase font-medium tracking-wider hover:font-medium text-xs bg-stone-600/80 dark:bg-amber-600/80 px-10 drop-shadow-md hover:bg-stone-600 dark:text-white dark:hover:bg-amber-600 hover:scale-110 transition-all ease-out text-white py-2 rounded-2xl"
                >
                  Download CV
                </a>
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
            <h2 className="  text-white dark:text-amber-600/90 text-7xl text font-black uppercase drop-shadow-lg tracking-wide">
              Stack
            </h2>
          </h1>
          <AnimateOnScroll>
            <div className="select-none place-items-center pb-3 gap-2 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SkillCard name="React.Js" Icon={FaReact} />
              <SkillCard name="TypeScript" Icon={SiTypescript} />
              <SkillCard name="Tailwind CSS" Icon={SiTailwindcss} />
              <SkillCard name="Python" Icon={FaPython} />
              <SkillCard name="HTML5" Icon={FaHtml5} />
              <SkillCard name="CSS3" Icon={FaCss3Alt} />
              <SkillCard name="JavaScript" Icon={IoLogoJavascript} />
              <SkillCard name="Git" Icon={FaGitAlt} />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
      <section id="projects" className="projects min-h-screen select-none ">
        <Container>
          {" "}
          <h1 className="text-amber-800 dark:text-stone-700 flex flex-col sm:flex-row gap-1 sm:gap-6 items-center tracking-wide justify-center mb-8 text-6xl sm:text-7xl md:text-8xl text font-black uppercase drop-shadow-lg">
            Meus{" "}
            <span className="dark:text-stone-900/80 text-amber-900">
              Projetos
            </span>
          </h1>
          <Swiper
            slidesPerView={sliderPerView}
            className=" w-full mt-6 max-w-96 sm:max-w-2xl md:max-w-3xl lg:max-w-6xl text-stone-700 rounded-lg"
            pagination={{ clickable: true }}
            navigation
            loop={true}
          >
            <SwiperSlide>
              <Slide
                ImgLink={ImgGabisLinks}
                altText="Site Gabis Links"
                description="A repository of links made in React"
                repoLink="https://github.com/gabipossiderio/GabisLinks"
                projectLink="https://links.gabis.dev/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                ImgLink={ImgWebCarros}
                altText="Site Web Carros"
                description="Cars showcase website made in React, firebase and typescript"
                repoLink="https://github.com/gabipossiderio/WebCarros"
                projectLink="https://web-carros.gabis.dev/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                ImgLink={ImgPhraseGenerator}
                altText="Site Phrase Generator"
                description="Phrase Generator made in React"
                repoLink="https://github.com/gabipossiderio/PhraseGenerator"
                projectLink="https://phrase-generator.gabis.dev/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                ImgLink={ImgShoppingCart}
                altText="Site Shopping Cart"
                description="Shopping cart application made in React"
                repoLink="https://github.com/gabipossiderio/ShoppingCart"
                projectLink="https://shopping-cart.gabis.dev/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                ImgLink={ImgFuelPrice}
                altText="Site Fuel Price"
                description="Fuel price comparator made in React"
                repoLink="https://github.com/gabipossiderio/FuelPriceComparator"
                projectLink="https://fuel-price.gabis.dev/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                ImgLink={ImgRangeHotels}
                altText="Site Range Hotels"
                description="CSS, HTML and JavaScript Hotel Website"
                repoLink="https://github.com/gabipossiderio/RangeHotels"
                projectLink="https://range-hotels.gabis.dev/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                ImgLink={ImgLandingPage}
                altText="Landing Page"
                description="HTML/CSS Landing Page"
                repoLink="https://github.com/gabipossiderio/HuddleLandingPage"
                projectLink="https://landing-page.gabis.dev/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                ImgLink={ImgAgeCalculator}
                altText="Site Age Calculator"
                description=" Age calculator made in React"
                repoLink="https://github.com/gabipossiderio/AgeCalculator"
                projectLink="https://age-calculator.gabis.dev/"
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
      <section id="contact" className="contact min-h-screen select-none">
        <Container>
          <div className="text flex flex-col justify-center">
            <h1 className="text-white/80 mb-6 flex flex-row gap-4 items-center border-b-2 w-fit mx-auto border-amber-700 dark:border-white/80 tracking-tight justify-center text-6xl sm:text-7xl md:text-7xl lg:text-8xl text font-black uppercase drop-shadow-lg">
              Contato{" "}
              <div className="sm:text-5xl text-3xl animate-waving-hand">
                <BsFillChatHeartFill />
              </div>
            </h1>
            <AnimateOnScroll>
              <div className="grid grid-cols-1 place-items-center mb-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {" "}
               <ContactCard name="GitHub" Icon={BsGithub} description="@gabipossiderio" href="https://github.com/gabipossiderio"/>
               <ContactCard name="LinkedIn" Icon={BsLinkedin} description="@gabriella-possiderio" href="https://www.linkedin.com/in/gabriella-possiderio/"/>
               <ContactCard name="E-mail" Icon={MdEmail} description="gabipossiderio@gmail.com" href="mailto:gabipossiderio@gmail.com"/>
               <ContactCard name="WhatsApp" Icon={BsWhatsapp} description="(21) 99265-6515" href="https://api.whatsapp.com/send?phone=5521992656515"/>
         
               
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      <div className="relative">
        <footer className="bg-orange-50 z-10 flex flex-col border-t-8 dark:border-stone-700 border-amber-700 w-full sm:h-14 h-20">
          <small className="text-xs menu flex p-3 justify-center gap-1 dark:text-stone-800/90 text-stone-600">
            <div className="flex flex-wrap items-center justify-center gap-1">
              <p>Todos os direitos reservados &#xa9; {currentYear} • </p>{" "}
              <p>
                Desenvolvido por{" "}
                <a
                  href="https://links.gabis.dev/profile/8JdYM56zWSNofa5QBKKIWZRyGAt2"
                  className="text-blue-700 transition-all ease-out duration-500 hover:text-white"
                >
                  GabisDev
                </a>
              </p>
              <div className="flex items-center">
                <FaHeart size={8} />
              </div>
            </div>
          </small>
        </footer>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed md:bottom-2 bottom-16  right-4 p-2 z-20 dark:bg-amber-600 bg-amber-900 text-white rounded-full transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <IoIosArrowDropupCircle size={30} />
      </button>
    </>
  );
}

export default App;
