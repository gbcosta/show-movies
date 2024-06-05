import Header from "./components/header.tsx"
import MovieCardsGrid from "./components/movieCardsGrid.tsx"
import { ModeContext } from "./utils.ts";
import { ImodeContext } from "./utils.ts";
import { useState } from "react";

function App() {
    const [mode, setMode] = useState<ImodeContext>({
        type: "popular",
        search: ""
    });

    return <div className="flex justify-center">
        <div className="flex flex-col justify-center max-w-[1200px] w-full  gap-8 my-4 mx-4">
            <ModeContext.Provider value={{mode, setMode}}>
                <Header />
                <MovieCardsGrid />
            </ModeContext.Provider>
        </div>
    </div>
}

export default App
