import { fetchCardData } from "../services/user-service"

export const useFetchCardsData = async () => {
    // for large application react query can be used here
    const query = await fetchCardData()
    return query
}