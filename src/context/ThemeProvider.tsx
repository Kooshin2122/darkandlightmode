// ThemeProvider.tsx
import { View } from "react-native";
import { Appearance } from "react-native";
import React, { useEffect, useState, createContext, ReactNode } from "react";
//
type ThemeContextType = "light" | "dark";
//
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType>(
    Appearance.getColorScheme() as ThemeContextType
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme as ThemeContextType);
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <View className={`flex-1 ${theme === "dark" ? "dark" : ""}`}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
