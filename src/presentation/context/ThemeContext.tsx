import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { darkColors, lightColors, ThemeColors } from "../../config/theme/theme"
import { Appearance, AppState, useColorScheme } from "react-native"

type ThemeColor = 'light' | 'dark'

interface ThemeContextProps{
    currentTheme: ThemeColor,
    color: ThemeColors,
    setTheme: (theme: ThemeColor) => void,
    isDark: boolean
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ( {children} : PropsWithChildren) => {

    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
    const colorScheme = useColorScheme();

   /*  useEffect(() => {
        if(colorScheme === 'dark'){
            setCurrentTheme('dark')
        }else{
            setCurrentTheme('light')
        }
    }, [colorScheme]) */

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
               const colorScheme = Appearance.getColorScheme();
               if(colorScheme === 'dark'){
                   setCurrentTheme('dark')
               }else{
                   setCurrentTheme('light')
               }
        });
    
        return () => {
          subscription.remove();
        };
      }, []);
    

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme)
    }


    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                color: (currentTheme === 'light') ? lightColors : darkColors,
                setTheme: setTheme,
                isDark: currentTheme === 'dark'
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}