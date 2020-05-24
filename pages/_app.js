import "../styles/global.css"

export default function App ({ Component, pageProps }) {
    return < Component { ...pageProps } />
}

//top level components which can be used by all pages even to 
// keep state when navigating between pages 

//Important note you need to restart server once adding an _app