interface CardProps {
  name: string;
  Icon: React.ComponentType;
  description: string;
  href: string;
}

export function ContactCard({name, Icon, description, href}:CardProps) {
  return(
  <a href={href} target="_blank"><article className=" md:h-56 h-40 duration-500 max-w-56 flex-col gap-2 menu md:w-56 w-40 rounded-lg flex md:mt-10 transition-all drop-shadow-md bg-white/60 hover:scale-105 text-stone-700 dark:text-white items-center justify-center dark:bg-amber-600/60">
  <div className="dark:bg-stone-700 bg-amber-600/60 rounded-full p-3 drop-shadow-md text-4xl"><Icon /></div>
   <h1 className="md:text-2xl text-lg flex pt-2 flex-col justify-center items-center">
      {name} 
   </h1>
 <p className="md:text-md text-xs">{description}</p>
 </article></a>)
}
