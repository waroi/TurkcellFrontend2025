import GameSearchBar from "@/app/Molecules/GameSearchBar";
import GameCard from "@/app/Organisms/GameCard";
import GameFilterSideBar from "@/app/Organisms/GameFilterSideBar";

export default function Games() {
    return (
        <div className="flex flex-col gap-2 overflow-hidden">
            <GameFilterSideBar/>
            <GameSearchBar/>
            <GameCard/>
        </div>
    );
  }