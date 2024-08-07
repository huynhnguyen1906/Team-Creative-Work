import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useIndexText = () => {
    const { data, error } = useSWR('/api/text-content/save-index-text', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return {
        text: data,
        isLoading: !error && !data,
        isError: error,
    };
};
