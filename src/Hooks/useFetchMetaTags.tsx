import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchMetaTags = (slug: string) => {
    const [metaTags, setMetaTags] = useState<{ name: string; title: string; description: string; }>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); //

            try {
                const response = await axios.get(
                    `https://backend.wisbato.com/api/metatags?name=${slug}`
                );
                setMetaTags(response.data.data[0]);
            } catch (error) {
                console.error('Error fetching meta tags:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (slug) {
            fetchData();
        }
    }, [slug]);

    return { metaTags, isLoading, error };
};