import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "../assets/svgs"
import { Button, QuoteItem } from "../components"
import { mainClient } from "../utilities/client"
import AppConfig from "../utilities/config"

function Home() {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        mainClient.get(`${AppConfig.API_ENDPOINTS.Quotes.Base}`)
            .then(r => {
                const { quotes } = r.data.data
                setQuotes(quotes)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div className='pt-24 px-10 pb-10 lg:px-24'>
            <h1 className="text-xl text-center mb-10 font-semibold">
                Relive the epic quotes that stirred your soul and fueled your passion
                <span role="emoji">🔥</span>.
            </h1>
            <div className="flex flex-wrap justify-center gap-5">
                {quotes.map((q, i) => <QuoteItem quote={q} key={i} />)}
            </div>

            <div className="flex justify-end mt-10 ">
                <Link to={AppConfig.PATHS.Quotes.Base}>
                    <Button>See more <ArrowRight /> </Button></Link>
            </div>
        </div>
    )
}

export default Home