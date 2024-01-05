import { SearchIcon } from "../assets/svgs"
import { SearchbarProps } from "../interfaces"
import AppConfig from "../utilities/config"

function Searchbar({ searchTerm, setSearchTerm }: SearchbarProps) {
    return (
        <div className="p-3 px-5 flex items-center flex-1 rounded-xl  border border-primary text-xl gap-5 text-primary">
            <span><SearchIcon /></span>
            <input type="text" className="w-full outline-none" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={AppConfig.PLACEHOLDERS.Searchbar} />
        </div>
    )
}

export default Searchbar