import Style from '@styles/componentsStyles/News/NewsCard.module.scss';
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import { splitText } from '@/utils/splitText';
import { formatDate } from '@/utils/formatDate';
import { convertSlugText } from '@/utils/convertSlugText';

interface NewsCardProps {
    news: {
        id: string;
        news_type: string;
        news_timestamp: { seconds: number; nanoseconds: number };
        header: { text: string };
        paragraph: { text: string };
        image: { file: { url: string } } | null;
    };
}

export default function NewsCard({ news }: NewsCardProps) {
    const date = formatDate(news.news_timestamp);
    const tagClass = news.news_type === 'ブログ更新' ? Style.blogTag : Style.tourTag;

    return (
        <div className={Style.newsWrap}>
            <a href={`/news/${convertSlugText(news.header.text)}-${news.id}.html`}>
                <div className={Style.newsContent}>
                    <p className={Style.thumb}>
                        {news.image?.file.url ? (
                            <Image src={news.image.file.url} alt={news.header.text} width={367} height={204} priority />
                        ) : (
                            <span>画像がございません</span>
                        )}
                    </p>
                    <div className={Style.item}>
                        <div className={Style.data}>
                            <IoMdTime size={15} />
                            <p>{date}</p>
                        </div>
                        <p className={tagClass}>{news.news_type}</p>
                    </div>
                    <h3 className={Style.newsTtl}>{news.header.text}</h3>
                    <p className={Style.newsText}>{splitText(news.paragraph.text, 100)}</p>
                </div>
            </a>
        </div>
    );
}
