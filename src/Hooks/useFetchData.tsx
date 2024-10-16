import { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';


// blog start

export interface BlogContent {
    title: string;
    image: string;
    alt: string;
    description: string;
}
export interface Blog {
    id: number;
    category: string;
    image: string;
    alt: string;
    title: string;
    description: string;
    slug: string;
    border_color: string;
    meta_title: string;
    meta_description: string;
    content: BlogContent[];
}
export type BlogData = Blog;

export const useFetchBlogs = () => {
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/blogs');
                // const response = await axios.get(`https://backend.wisbato.com/api/blogs?page=${currentPage}`);
                setBlogs(response.data.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { blogs, isLoading, error };
};

// blog end

// works start

export interface CaseStudy {
    type: string;
    title: string;
    description: string;
    image: string;
}

export interface Work {
    id: number;
    name: string;
    title: string;
    image: string;
    slug: string;
    themes: string;
    industry: string;
    companyName: string;
    bannerImage: string;
    work_title: string;
    servicesProvides: string[];
    workDescription: string;
    workDescriptionImage: string;
    metaTitle: string;
    metaDescription: string;
    caseStudies: CaseStudy[];
}

export type WorkData = Work;

export const useFetchWorks = () => {
    const [works, setWorks] = useState<WorkData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/works');
                setWorks(response.data.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { works, isLoading, error };
};

// works end

// careers start

export type Opening = {
    id: number;
    slug: string;
    name: string;
    experience: string;
    location: string;
    category: string;
    bgColor: string;
    description: {
        id: number;
        title: string;
        points: any;
    }[];
};

export const useFetchCareers = () => {
    const [careers, setCareers] = useState<Opening[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/careers');
                setCareers(response.data.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { careers, isLoading, error };
};

// careers end

// team start

interface TeamMember {
    designation: ReactNode;
    id: number;
    name: string;
    position: string;
    imageUrl: string;
    linkedInUrl?: string;
    email?: string;
}

interface TeamCategory {
    department: string;
    description: string;
    members: TeamMember[];
    services: string[]
}

export const useFetchTeam = () => {
    const [team, setTeam] = useState<TeamCategory[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://backend.wisbato.com/api/people');
                setTeam(response.data.data);
            } catch (error) {
                console.error('Error fetching team:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { team, isLoading, error };
};

// team end