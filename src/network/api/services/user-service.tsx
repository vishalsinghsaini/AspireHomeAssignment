import { getApiResponse } from "@network/utils/get-api-response";
import { API } from "..";
import { apiConstants } from "../api-constants";
export interface GenerateOtpProps {
  bodyParams: {
    mobile: string | number
  }
}

export interface ValidateOtpProps {
  bodyParams: {
    mobileNumber: string,
    otp: string | number,
  }
}

export interface FcmTokenProps {
  applicationName: string,
  deviceName: string,
  platform: string,
  token: string,
}

export const fetchCardData = async (props: GenerateOtpProps) => {

  // <-- below code is when dev api's are given -->
  const { bodyParams } = props || {};
  const endPoint = apiConstants.cards;
  const data = await API.userService.post(endPoint, bodyParams);  // and change api method accordingly
  // <-- above code is when dev api's are given -->

  try {
    const response = getApiResponse(data);
    return response;
  } catch {
    return null
  }
};
