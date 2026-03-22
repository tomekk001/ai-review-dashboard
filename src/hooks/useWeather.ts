import { useState, useEffect } from 'react';

export const useWeather = (city: string) => {
  const [weather, setWeather] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!city) return;
    
    const fetchWeather = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`https://wttr.in/${city}?format=%t+%C`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.text();
        setWeather(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};