import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mainClient } from "../../utilities/client";
import AppConfig from "../../utilities/config";
import { IQuote } from "../../interfaces";
import { handleAxiosError } from "../../utilities/common";
import { Button } from "../../components";
import { ArrowLeft } from "../../assets/svgs";

function QuoteDetails() {
    const { id } = useParams();
    const [quote, setQuote] = useState<IQuote | null>(null)

    useEffect(() => {
        mainClient.get(`${AppConfig.API_ENDPOINTS.Quotes.Base}/${id}`)
            .then((r) => {
                if (r.status === 200) {
                    setQuote(r.data.data.quote)
                } else {
                    handleAxiosError(r.data)
                }
            })
            .catch(e => {
                handleAxiosError(e)
            })
    }, [id])

    return (
        <div className="p-10 lg:p-24 ">
            {quote ? (
                <div>
                    <p className="text-xl mb-5">{quote.anime}</p>
                    <p className='text-3xl font-semibold mt-2 mb-5'>{quote.quote}</p>
                    <div className="flex justify-between items-center">
                        <p className='mb-2 italic text-xl'> - {quote.character}</p>
                        {/* <SaveIcon />  */}
                        {/* For bookmarking */}
                    </div>
                </div>
            ) : null}
            {/* <div className="absolute bottom-0 right-0">
                <div className="box bg-primary opacity-50 rotate-45 h-[100px] w-[100px]"></div>
            </div> */}
            <div className="flex justify-end">
                <Link to={AppConfig.PATHS.Quotes.Base}>
                    <Button>
                        <ArrowLeft />
                        Back to Quotes</Button>
                </Link>
            </div>
        </div>
    )
}

export default QuoteDetails