import { getApiResponse } from "@network/utils/get-api-response";
import { API } from "..";
import { apiConstants } from "../api-constants";

export interface createNewCardObj {
  name: string,
  cardNumber: string,
  cvv: string
  expiry: string
}

// These are free mock api's in which endpoint and post method wasn't allowed,
// only expected response is allowed to provide and api can only be get
// but have mentioned implementation for post as well and we can use apiConstants to provide edpoint

export const fetchCardData = async () => {
  const data = await API.mockService.get('/90c8887e-1676-40e0-b3f8-4d11298d03a4');
  try {
    const response = getApiResponse(data);
    return response;
  } catch {
    return null
  }
};

export const createNewCard = async (props: createNewCardObj) => {
  // ideally this should be post api that should be taking user provided card details in payload 
  // and getting new card details as response, but since post method and endpoint are not allowed 
  // will be using get method only for dummy purpose.


  // const { bodyParams } = props || {};
  // const endPoint = apiConstants.cards;
  // const data = await API.mockService.post(endPoint, bodyParams);   --> // and change api method accordingly

  const data = await API.mockService.get('/d1b1ff76-2c62-4249-bfea-5fdc2e0f30cd');
  // <-- above code is when dev api's are given -->
  try {
    const response = getApiResponse(data);
    return response;
  } catch {
    return null
  }
};
