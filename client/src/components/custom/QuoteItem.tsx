
// import { SaveIcon } from '../../assets/svgs'
import { IQuoteItem } from '../../interfaces'

function EventItem({ quote, onClick = () => { } }: IQuoteItem) {

    return (
        <div className="p-4 rounded-xl border border-primary text-lg text-primary w-[350px] cursor-pointer bg-white shadow-lg"
            onClick={() => onClick(quote.id)}>
            <p>{quote.anime}</p>
            <p className='text-xl font-semibold mt-2'>{quote.quote}</p>
            <div className="flex justify-between items-center">
                <p className='mb-2 italic'> - {quote.character}</p>
                {/* <SaveIcon />  */}
                {/* For bookmarking */}
            </div>
        </div>
    )
}

export default EventItem