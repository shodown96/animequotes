
export const BASE_API_ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/v1' : 'https://animequotes.onrender.com/api/v1'
export const EXTERNAL_BASE_API_ENDPOINT = 'https://animechan.xyz/api'



const API_ENDPOINTS = {
    Quotes: {
        Base: `${BASE_API_ENDPOINT}/quotes/`,
    },
}

const PATHS = {
    Quotes: {
        Base: '/quotes',
        Detail: '/quotes/:id',
        Saved: '/quotes/saved',
    },
}

const ROUTES = {
    NavLinks: [
        {
            name: 'Home',
            external: false,
            path: '/',
        },
        {
            name: 'Quotes',
            external: false,
            path: PATHS.Quotes.Base,
        },
    ]
}


const OPTION_MAP = {
    Anime: { value: 'anime', label: 'Anime title' },
    Character: { value: 'character', label: 'Character' },
    None: { value: '', label: 'Select' },

}


// These were gotten from the API
const SAMPLE_DATA = [
    {
        "anime": "Cowboy Bebop",
        "character": "Spike Spiegel",
        "quote": "I love the type of woman who can kick my ***."
    },
    {
        "anime": "Bakemonogatari",
        "character": "Senjougahara Hitagi",
        "quote": "Is that so? Then I'll just use \"pathetic\" next time."
    },
    {
        "anime": "Soul Eater",
        "character": "Death the Kid",
        "quote": "If you pick a fight with a god of death, I can't guarantee your soul's safety."
    },
    {
        "anime": "Attack on Titan",
        "character": "Ymir",
        "quote": "I want to survive…And see her again. As a person, I’m really lower than shit. But she knows that, and she smiles kindly at me anyway."
    },
    {
        "anime": "Inuyasha",
        "character": "Sesshomaru",
        "quote": "This scheme of yours is beneath me.  Should it fail, Jaken, you will die."
    },
    {
        "anime": "Black Rock Shooter",
        "character": "Mato Kuroi",
        "quote": "Love is a bitter sweet taste of life, which many humans many weaknesses and sometimes their strongest weapon."
    },
]

const AppConfig = {
    API_ENDPOINTS,
    ROUTES,
    PATHS,
    OPTION_MAP,
    SAMPLE_DATA,
    ERROR_MESSAGES: {
        BadRequestError: 'Bad Request Error.',
        InternalServerError: 'Internal Server Error.',
        ResourceNotFound: 'Unable to process. Resource not found.',
        ServerError: 'Unable to process request. Please try again later.',
        ValidationError: 'All fields are required',
    },
    STRINGS: {
        NewContactSubmission: 'New Contact Submission.',
        SubmittedSuccessfully: 'Thank you! we\'ve received your submission, we\'ll be in touch.'
    },
    SEO: {
        META_TITLE: 'Anime Quotes',
        META_DESCRIPTION: 'The Future WorkForce, Where dreams intersect disruptive innovations!',
        META_IMAGE: '',
        META_IMAGE_ALT: 'Anime Quotes Logo',
        META_IMAGE_WIDTH: '1200',
        META_IMAGE_HEIGHT: '630',
        META_IMAGE_TYPE: 'image/png',
        META_IMAGE_QUALITY: '100',
        META_IMAGE_URL_ALT: 'Anime Quotes Logo',
        META_IMAGE_WIDTH_ALT: '1200',
        META_IMAGE_HEIGHT_ALT: '630',
        META_IMAGE_TYPE_ALT: 'image/png',
        META_IMAGE_QUALITY_ALT: '100',
        META_URL: 'https://animequotes.vercel.app/',
        META_TYPE: 'website',
        META_AUTHOR: 'Anime Quotes Dev Team',
        META_PUBLISHER: 'Anime Quotes Inc',
        META_PUBLISHED_AT: '2024-01-04',
        META_KEYWORDS: 'Anime Quotes, Anime, Quotes',
    },
    PLACEHOLDERS: {
        Searchbar: 'Search quotes by anime title or character.',
        Gender: 'Gender',
        Password: 'Password',
        ConfirmPassword: 'Confirm password'
    },
    OPTIONS: [
        { value: '', label: 'Select' },
        OPTION_MAP.Anime,
        OPTION_MAP.Character,

    ],
}


export default AppConfig