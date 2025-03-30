import { createNewCard, createNewCardObj } from "../services/user-service"

export const useCreateCard = async (props: createNewCardObj) => {
    // for large application react query can be used here
    const query = await createNewCard(props)
    return query
}