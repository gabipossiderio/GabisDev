interface SlideProps{
  ImgLink: string;
  altText: string;
  description: string;
  repoLink: string;
  projectLink: string;
}

export function Slide({ImgLink, altText, description, repoLink, projectLink}:SlideProps) {
  return (
  
      <div className="select-none text-center text transition-all ease-in-out hover:scale-105 my-14 mx-2 ">
        {" "}
        <img
          src={ImgLink}
          alt={altText}
          className=" object-cover h-64 border-4 border-white/60 rounded-lg drop-shadow-lg "
        />
        <div className="absolute inset-0 rounded-lg  flex items-center bg-white/90 flex-col dark:bg-stone-400/90 justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h1 className="p-3 text-lg bg-amber-800/60 duration-500 dark:bg-stone-700/40 w-full m-2 text text-white font-light ">
            {description}
          </h1>{" "}
          <div className="flex gap-3 text-sm cursor-pointer items-center">
            <a
              href={repoLink}
              target="_blank"
              className="group relative px-4 py-2 dark:bg-stone-700/60 font-medium menu bg-amber-800/60 transition-colors duration-[400ms] text-white"
            >
              <span>Repositório</span>
              <span className="absolute left-0 top-0 h-[3px] w-0 dark:bg-stone-700/80 bg-amber-800/80 transition-all duration-100 group-hover:w-full" />
              <span className="absolute right-0 top-0 h-0 w-[3px] dark:bg-stone-700/80 bg-amber-800/80 transition-all delay-100 duration-100 group-hover:h-full" />
              <span className="absolute bottom-0 right-0 h-[3px] w-0 dark:bg-stone-700/80 bg-amber-800/80 transition-all delay-200 duration-100 group-hover:w-full" />
              <span className="absolute bottom-0 left-0 h-0 w-[3px] dark:bg-stone-700/80 bg-amber-800/80 transition-all delay-300 duration-100 group-hover:h-full" />
            </a>
            <a
              href={projectLink}
              target="_blank"
              className="group relative px-4 py-2 dark:bg-stone-700/60 font-medium menu bg-amber-800/60 transition-colors duration-[400ms] text-white"
            >
              <span>Acessar Projeto</span>
              <span className="absolute left-0 top-0 h-[3px] w-0 dark:bg-stone-700/80 bg-amber-800/80 transition-all duration-100 group-hover:w-full" />
              <span className="absolute right-0 top-0 h-0 w-[3px] dark:bg-stone-700/80 bg-amber-800/80 transition-all delay-100 duration-100 group-hover:h-full" />
              <span className="absolute bottom-0 right-0 h-[3px] w-0 dark:bg-stone-700/80 bg-amber-800/80 transition-all delay-200 duration-100 group-hover:w-full" />
              <span className="absolute bottom-0 left-0 h-0 w-[3px] dark:bg-stone-700/80 bg-amber-800/80 transition-all delay-300 duration-100 group-hover:h-full" />
            </a>
          </div>
        </div>
      </div>
  
  );
}
