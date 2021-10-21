import { useEffect } from "react"
import { useLocation } from "react-router"
import ReactPlayer from "react-player"

import { useResultContext } from "../contexts/ResultsContextProvider"
import { Loading } from "./Loading"

export const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext()
    const location = useLocation()

    if (isLoading) return <Loading />

    switch (location.pathname) {
        case '/search':
            return 'Search'

        default:
            return 'ERROR!';
    }
}
