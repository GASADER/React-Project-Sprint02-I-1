//import fortawesome
import React from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
library.add(faHeart)

//import globals css
import '@/assets/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
