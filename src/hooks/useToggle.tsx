import { useState, useCallback, useEffect } from 'react';

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [open, setOpen] = useState(initialValue);
  const toggleOpen = useCallback(() => {
    setOpen((current) => !current);
  }, []);

  useEffect(() => {
    setOpen(initialValue);
  }, [initialValue]);

  return [open, toggleOpen];
};
