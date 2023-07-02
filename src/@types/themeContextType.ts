export interface ThemeContextType {
  theme: "light" | "dark";
  handleToggleTheme: () => void;
  font: "sans-serif" | "serif" | "mono";
  handleChangeFont: (font: "sans-serif" | "serif" | "mono") => void;
}
