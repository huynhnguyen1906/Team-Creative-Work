'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import EditorWithData from '@/components/Admin/News/EditorWithData';
import AdminLayout from '../../../AdminLayout';
import Spinner from 'react-bootstrap/esm/Spinner';
interface NewsData {
    news_data: any;
}

export default function EditNewsPage() {
    const [initialData, setInitialData] = useState<NewsData | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await axios.get<NewsData>(`/api/get-news/${id as string}`);
                setInitialData(response.data);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNewsData();
    }, [id]);

    if (!initialData) {
        return (
            <AdminLayout>
                <Spinner animation="border" />
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <EditorWithData initialData={initialData.news_data} documentId={id as string} />
        </AdminLayout>
    );
}