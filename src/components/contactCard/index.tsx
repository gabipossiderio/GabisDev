interface CardProps {
  name: string;
  Icon: React.ComponentType;
  description: string;
  href: string;
}

export function ContactCard({name, Icon, description, href}:CardProps) {
  return(
  <a href={href} target="_blank"><article className=" h-56 duration-500 max-w-56 flex-col gap-2 menu w-56 rounded-lg flex md:mt-10 transition-all drop-shadow-md bg-white/60 hover:scale-105 text-stone-700 dark:text-white items-center justify-center dark:bg-amber-600/60">
  <div className="dark:bg-stone-700 bg-amber-600/60 rounded-full p-3 drop-shadow-md text-5xl"><Icon /></div>
   <h1 className="text-2xl flex pt-2 flex-col justify-center items-center">
      {name} 
   </h1>
 <p className="text-md">{description}</p>
 </article></a>)
}
