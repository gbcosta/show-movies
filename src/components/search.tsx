import { ChangeEvent, useContext, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { ModeContext } from "../utils";

const Search = ()=>{
    const [value, setValue] = useState("");
    const setMode = useContext(ModeContext)?.setMode;   

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    return <div className="flex flex-row gap-2 bg-white items-center p-1
        rounded-sm focus-within:outline-2 focus-within:outline
        focus-within:outline-blue-400">
        <input className="outline-none w-full " value={value} onChange={onChangeValue}/>
        <button onClick={()=>{
            if(setMode){
                setMode({
                    type: "search",
                    search: value
                });
            }
        }}>
            <IoMdSearch className="text-xl"/>
        </button>

    </div>
}

export default Search;
