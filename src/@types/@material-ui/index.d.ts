import { Theme } from '@material-ui/core/styles/createMuiTheme'
import {
  Palette,
  PaletteOptions,
  TypeBackground,
  TypeText,
} from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface TypeText {
    placeholder?: string
  }
  export interface TypeScrollbar {
    thumb: string
    track: string
  }
  export interface TypeInput {
    default: string
    focus: string
    hover: string
  }
  export interface PaletteModes {
    [k: string]: Partial<Omit<PaletteOptions, 'modes'>>
  }
  interface Palette {
    scrollbar: TypeScrollbar
    input: TypeInput
  }
  interface PaletteOptions {
    modes?: PaletteModes
    scrollbar?: Partial<TypeScrollbar>
    input?: Partial<TypeInput>
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  export interface Borders {
    standard: any
  }
  export interface Radii {
    default: number | string
    image: number | string
  }
  export interface Sizes {
    sideDrawer: number | string
  }
  interface ThemeOptions {
    borders: Borders
    radii: Radii
    sizes: Sizes
  }
  interface Theme {
    borders: Borders
    radii: Radii
    sizes: Sizes
  }
}