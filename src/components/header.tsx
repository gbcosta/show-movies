import Search from "./search.tsx"
import { ModeContext } from "../utils.ts";
import { useContext } from "react";

const Header = ()=>{
    const setMode = useContext(ModeContext)?.setMode;
    return <div className="flex flex-col items-center gap-2 sm:gap-0 sm:justify-between sm:flex-row w-full">
        <button onClick={()=>{
            if(setMode){
                setMode({
                    type: "popular",
                    search: ""
                })
            }
        }}>
            <p className="font-bold text-3xl text-white font-raleway select-none">Movies</p>
        </button>
        <Search />
    </div>
}

export default Header;
