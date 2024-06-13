import { useState } from "react";

export function useMenuState(initialState = false) {
  const [menuOpen, setMenuOpen] = useState(initialState);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return [menuOpen, toggleMenu, setMenuOpen] as const;
}
