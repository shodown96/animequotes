export const EXTERNAL_BASE_API_ENDPOINT = 'https://animechan.xyz/api'
export const BASE_API_ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/v1' : 'https://animequotes.onrender.com/api/v1'

const API_ENDPOINTS = {
    Quotes: {
        Base: '/',
        Detail: '/:id',
    },
    EXTERNAL: {
        Random: {
            Base: `${EXTERNAL_BASE_API_ENDPOINT}/random`,
            Character: `${EXTERNAL_BASE_API_ENDPOINT}/random/character`,
            AnimeTitle: `${EXTERNAL_BASE_API_ENDPOINT}/random/anime`,
        },
        Quotes: {
            Base: `${EXTERNAL_BASE_API_ENDPOINT}/quotes`,
            Character: `${EXTERNAL_BASE_API_ENDPOINT}/quotes/character`,
            AnimeTitle: `${EXTERNAL_BASE_API_ENDPOINT}/quotes/anime`,
        }
    }

}

export const AppConfig = {
    API_ENDPOINTS,
    ERROR_MESSAGES: {
        BadRequestError: 'Bad Request Error.',
        InternalServerError: 'Internal Server Error.',
        ResourceNotFound: 'Unable to process. Resource not found.',
        ServerError: 'Unable to process request. Please try again later.',
        ValidationError: 'All fields are required',
        TooManyRequests: 'Too many requests to external API.',
        HoldUp: 'Hold up, The characters behind the scenes cant keep coming up with quotes'
    },
    STRINGS: {
        NewContactSubmission: 'New Contact Submission.',
        SubmittedSuccessfully: 'Thank you! we\'ve received your submission, we\'ll be in touch.',
        QuotesSuccessfullyRetrieved: 'Quotes successfully retrieved from Animechan and stored.',
        QuotesSuccessfullyRetrievedFromDB: 'Quotes successfully retrieved from DB.',
        QuoteSuccessfullyRetrievedFromDB: 'Quote successfully retrieved from DB.'
    },
    DEFAULT_PAGE_SIZE: 5
}