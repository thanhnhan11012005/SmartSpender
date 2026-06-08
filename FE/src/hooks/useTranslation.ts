import { useState, useEffect, useCallback } from "react";
import { vi } from "../locales/vi";
import { en } from "../locales/en";
import { useFormat } from "../utils/useFormat";

const dictionaries: Record<string, Record<string, string>> = {
  vi,
  en,
};

export function useTranslation() {
  const { language } = useFormat();
  
  // Use 'vi' as default fallback if the dictionary doesn't exist
  const currentDict = dictionaries[language] || dictionaries["vi"];

  const t = useCallback((key: keyof typeof vi, params?: Record<string, string | number>) => {
    let text = currentDict[key] || vi[key] || key; // fallback to vi, then key itself

    // Basic string interpolation: replace {param} with value
    if (params) {
      Object.keys(params).forEach(pKey => {
        text = text.replace(new RegExp(`{${pKey}}`, 'g'), String(params[pKey]));
      });
    }

    return text;
  }, [currentDict]);

  return { t, language };
}
