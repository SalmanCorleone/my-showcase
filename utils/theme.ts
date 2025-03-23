const palette = {
  light: '#FDFBEE',
  lightGrey: '#EBE8DB',
  lime: '#57B4BA',
  dark: '#015551',
  orange: '#FE4F2D',
  pink: '#D76C82',
  darkRed: '#3D0301',
  green: '#6A9C89',
  yellow: '#FFB433',
  lightBlue: '#98D8EF',
  blue: '#23486A',
  maroon: '#9F8383',
  brown: '#443627',
} as const;

export type PaletteType = typeof palette;

export const transparencyHexMap = {
  100: 'FF',
  90: 'E6',
  80: 'CC',
  70: 'B3',
  60: '99',
  50: '80',
  40: '66',
  30: '4D',
  20: '33',
  10: '1A',
  0: '00',
};

const theme = { palette };

export default theme;
