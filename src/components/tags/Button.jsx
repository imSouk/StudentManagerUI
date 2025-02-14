/* eslint-disable react/prop-types */
import { Children } from "react"

function Button ({children, onClick}){
    return <button className=" text-sm font-serif mt-3 ml-2 flexbox w-[100px] h-[30px] rounded-lg bg-slate-500 text-slate-200" onClick={onClick}> {children}</button>
}
export default Button