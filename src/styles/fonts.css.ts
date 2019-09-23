import { fontFace } from 'polished'
import { Styles } from 'polished/lib/types/style'
import { mapObjIndexed } from 'ramda'

import { css } from 'src/util/styled'

type Weights = Record<300 | 400 | 500 | 600 | 700, string>

const weights: Weights = {
  300: 'light',
  400: 'regular',
  500: 'medium',
  600: 'semibold',
  700: 'bold',
}

const makeFontWeight = (
  weight: keyof Weights,
  fontWeight: string
): Styles =>
  fontFace({
    fileFormats: ['woff2', 'woff', 'otf'],
    fontDisplay: 'swap',
    fontFamily: 'jost',
    fontFilePath: `/fonts/jost-${weight}`,
    fontStyle: 'normal',
    fontWeight,
    unicodeRange: 'U+0020—007F',
  })

const fonts = mapObjIndexed(makeFontWeight, weights)

export default css(fonts)
