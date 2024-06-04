import Search from "./search.tsx"

const Header = ()=>{
    return <div className="flex flex-row px-24 py-4 justify-between">
        <p className="font-bold text-3xl text-white font-raleway select-none">Movies</p>
        <Search />
    </div>
}

export default Header;
