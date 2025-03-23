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

const theme = { palette };

export default theme;
