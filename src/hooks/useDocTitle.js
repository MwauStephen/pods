import { useEffect } from "react";

const useDocTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - Pods`;
    } else {
      document.title = "Pods | Let's Dance";
    }
  }, [title]);

  return null;
};

export default useDocTitle;
