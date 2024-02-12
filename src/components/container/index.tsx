import { ReactNode } from "react";

export function Container({children}: {children: ReactNode}){
  return(
    <div className="w-full pt-20 my-auto sm:pt-24 max-w-7xl mx-auto px-4">
      {children}
    </div>
  )
}