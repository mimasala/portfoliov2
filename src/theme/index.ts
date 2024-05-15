import { ThemeConfig, extendTheme } from '@chakra-ui/react'
import foundations from './foundations'

const direction = 'ltr'

const config: ThemeConfig = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
}

export const theme = {
  direction,
  ...foundations,
  config,
}

export default extendTheme(theme)
