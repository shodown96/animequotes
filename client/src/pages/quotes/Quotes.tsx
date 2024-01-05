import { useEffect, useState } from "react"
import { Button, Pagination, QuoteItem, Searchbar } from "../../components"
import { mainClient } from "../../utilities/client"
import AppConfig from "../../utilities/config"
import { QuotesQueryMap } from "../../interfaces"
import { objectToQueryString } from "../../utilities/common"
import { useNavigate } from "react-router-dom"

function Quotes() {
    const navigate = useNavigate()
    const [quotes, setQuotes] = useState([])
    const [pagination, setPagination] = useState({
        page: 1,
        total: 0,
        pages: 0
    })

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState("")

    const navigateToQuote = (id:string) => {
        navigate(`${AppConfig.PATHS.Quotes.Base}/${id}`)
    }


    const getQuotes = () => {
        let params = { page: pagination.page } as QuotesQueryMap
        if (searchTerm) {
            if (selectedOption === AppConfig.OPTION_MAP.Anime.value) {
                params.title = searchTerm;
                params.filterType = AppConfig.OPTION_MAP.Anime.value
            } else {
                params.name = searchTerm;
                params.filterType = AppConfig.OPTION_MAP.Character.value
            }
        }
        const queryString = objectToQueryString(params)

        mainClient.get(`${AppConfig.API_ENDPOINTS.Quotes.Base}?${queryString}`)
            .then(r => {
                const { quotes, total, page, pageSize } = r.data.data
                setQuotes(quotes)
                setPagination({
                    page,
                    total,
                    pages: total / pageSize
                })
            })
            .catch(e => console.log(e))
    }

    const setPage = (page: number) => {
        setPagination({
            ...pagination,
            page,
        })
    }

    // query after 0.3s of no input
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm) {
                getQuotes()
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    useEffect(() => {
        getQuotes()
    }, [pagination.page])

    return (
        <div className='pt-24 px-10 pb-10 lg:px-24'>
            <div className="flex items-center gap-4 mb-10">
                <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <select
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="p-4 outline-none rounded-xl border border-primary">
                    {AppConfig.OPTIONS.map((x, i) => (
                        <option key={i} value={x.value} selected={x.value === selectedOption}>{x.label}</option>
                    ))}
                </select>
                <Button className="rounded-xl !py-3" onClick={getQuotes}>Search</Button>
            </div>
            <h1 className="text-xl text-center mb-10 font-semibold">
                Relive the epic quotes that stirred your soul and fueled your passion
                <span role="emoji">🔥</span>.
            </h1>
            {quotes.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-5">
                    {quotes.map((q, i) => <QuoteItem quote={q} key={i} onClick={navigateToQuote} />)}
                </div>
            ) : (
                <div className="text-xl text-center"> No quotes available at the moment</div>
            )}

            <div>
                <Pagination
                    pages={pagination.pages}
                    currentPage={pagination.page}
                    total={pagination.total}
                    setPage={setPage} />
            </div>
        </div>
    )
}

export default Quotes