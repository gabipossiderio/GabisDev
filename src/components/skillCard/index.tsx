interface CardProps{
  name: string;
  Icon: React.ComponentType<{ size: number }>; 
}

export function SkillCard ({name, Icon}:CardProps){
  return(
    <article className="h-32 w-32 duration-500 menu sm:w-56 rounded-lg flex mt-3 lg:mt-6 mb-3 transition-all hover:scale-105 text-stone-600/80 hover:text-amber-700 items-center justify-center flex-col bg-white/80">
    <h1 className="text-xl flex flex-col items-center">
    {name} <Icon size={32} /> 
    </h1>
  </article>
  )
}