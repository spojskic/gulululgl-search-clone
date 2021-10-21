import { useEffect } from "react"
import { useLocation } from "react-router"
import ReactPlayer from "react-player"

import { useResultContext } from "../contexts/ResultsContextProvider"
import { Loading } from "./Loading"

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext()
    const location = useLocation()

    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/videos') {
                getResults(`/search/q=${searchTerm} videos`)
            }
            else {
                getResults(`${location.pathname}/q=${searchTerm}=40`)
            }
        }
        getResults('/images/q=JavaScript&num=40')
    }, [searchTerm, location.pathname])

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
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({ image, link: { href, title } }, index) => (
                        <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                            <img src={image?.src} alt={title} loading="lazy" />
                            <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
                        </a>
                    ))}
                </div>
            )
        case '/news':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
                    {results?.map(({ links, source, title }, index) => (
                        <div key={index} className='md:w-2/5'>
                            <a href={links?.[0].href} target='_blank' rel='norefferer' className='hover:underline'>
                                <p className='text-lg dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>
                            <div className='flex gap-4'>
                                <a href={source?.href} target='_blank' rel='noreferrer'>
                                    {source?.href}
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            )
        case '/videos':
            return (
                <div className="flex flex-wrap ">
                    {results?.results?.map((video, index) => (
                        <div key={index} className="p-2">
                            <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
                        </div>
                    ))}
                </div>
            );
        default:
            return 'ERROR!';
    }
}
