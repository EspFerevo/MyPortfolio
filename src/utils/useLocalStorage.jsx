import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
 const saved = localStorage.getItem(key);
 try {
  const initial = saved ? JSON.parse(saved) : undefined;
  return initial !== undefined ? initial : defaultValue;
 } catch (error) {
  return defaultValue;
 }
}

export const useLocalStorage = (key, defaultValue) => {
 const [value, setValue] = useState(() => {
  return getStorageValue(key, defaultValue);
 });

 useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
 }, [key, value]);

 return [value, setValue];
};
