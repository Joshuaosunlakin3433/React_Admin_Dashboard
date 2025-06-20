import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import CssBaseline from "@mui/material/CssBaseline"


const App = () => {
    const theme = useMemo(()=>createTheme(themeSettings), [])
  return (
    <div>
        <ThemeProvider theme = {theme}>
            <CssBaseline/> 
        </ThemeProvider>
    </div>
  )
}

export default App