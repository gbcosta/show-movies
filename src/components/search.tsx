import { ChangeEvent, useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Search = ()=>{
    const [value, setValue] = useState("")

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    return <div className="flex flex-row gap-2 bg-white items-center p-1 rounded-sm">
        <input className="outline-none" value={value} onChange={onChangeValue}></input>
        <button>
            <IoMdSearch className="text-xl"/>
        </button>

    </div>
}

export default Search;
