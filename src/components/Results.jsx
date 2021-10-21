import { useEffect } from "react"
import { useLocation } from "react-router"
import ReactPlayer from "react-player"

import { useResultContext } from "../contexts/ResultsContextProvider"
import { Loading } from "./Loading"

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext()
    const location = useLocation()

    useEffect(() => {
        getResults('/search/q=JavaScript Mastery&num=40')
    }, [])

    if (isLoading) return <Loading />

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {results?.results?.map(({ link, title, description }, index) => (
                        <div key={index} className='md:w-2/5'>
                            <a href={link} target='_blank' rel='norefferer'>
                                <p className='text-sm'>
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>
                            <p className='text-sm'>
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            )
        case '/images':
            return 'Search'
        case '/news':
            return 'News'
        case '/videos':
            return 'Videos'
        default:
            return 'ERROR!';
    }
}
