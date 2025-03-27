import { Dimensions } from 'react-native';
export const countryCode = '+91';
export const stretch = 'stretch';
export const cover = 'cover';
export const contain = 'contain';
export const scrollView = 'scrollView';
export const flatList = 'flatList';
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
export const animationDuration = {
  D200: 200,
  D500: 500,
  D1500: 1500,
  D2000: 2000,
  D1000: 1000,
  D3000: 3000,
  D5000: 5000,
};
export const numericalRegexExp = /^\d+$/;
export const rupeeSymbol = '₹';
export const light = 'light';
export const border = 'border';
export const gradientBorder = 'gradientBorder';
export const normalBorder = 'normalBorder';
export const smallImage = 'smallImage';
export const fullImage = 'fullImage';


export const numericRegexWithDecimalEx = /^\d+(\.\d{1,2})?$/;
// eslint-disable-next-line max-len
export const emailRegexEx = /^([\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*)@((?:[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?\.)+[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?)$/;
export const otpRegexEx = /(\d{4})/g;
export const mobileNumberRegexEx = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

export const hexToRgbA = (hexCode = '', opacity = 1) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  const r = Number.parseInt(hex.slice(0, 2), 16)
  const g = Number.parseInt(hex.slice(2, 4), 16)
  const b = Number.parseInt(hex.slice(4, 6), 16)

  /* Backward compatibility for whole number based opacity values. */
  let opac = opacity
  if (opacity > 1 && opacity <= 100) {
    opac = opacity / 100
  }

  return `rgba(${r},${g},${b},${opac})`
}
