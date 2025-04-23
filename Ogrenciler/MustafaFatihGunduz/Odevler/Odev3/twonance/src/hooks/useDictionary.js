import { useState, useEffect } from "react";
import { getDictionary } from "../app/lib/getDictionary"; 

const useDictionary = (locale) => {
  const [dict, setDict] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        const dictionary = await getDictionary(locale);
        setDict(dictionary);
      } catch (error) {
        console.error("Dictionary loading failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDictionary();
  }, [locale]);

  return { dict, loading };
};

export default useDictionary;
