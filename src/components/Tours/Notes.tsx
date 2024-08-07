'use client';
import Style from '@styles/componentsStyles/Tours/Notes.module.scss';
import { useToursNotes } from '@/hooks/TextContent/useToursNotes';
import parse from 'html-react-parser';
import LoadingContainer from '../Loading/LoadingContainer';

export default function Notes() {
    const { content, isLoading } = useToursNotes();

    const renderContent = (content: any) => {
        if (!content) return null;
        return content.data.blocks.map((block: any) => {
            switch (block.type) {
                case 'header':
                    const HeaderTag = `h${block.data.level}`;
                    return (
                        <HeaderTag key={block.id} {...block.data}>
                            {parse(block.data.text)}
                        </HeaderTag>
                    );
                case 'paragraph':
                    return <p key={block.id}>{parse(block.data.text)}</p>;
                default:
                    return null;
            }
        });
    };

    return (
        <div className={Style.NotesContainer}>
            <>
                <h2 className="fs-1">注意事項</h2>
                {isLoading ? (
                    <div className="d-flex flex-column justify-content-start align-item-center  gap-4 w-100">
                        <LoadingContainer />
                    </div>
                ) : (
                    <div className="d-flex flex-column justify-content-start align-item-start  gap-4 w-100">
                        <>{renderContent(content)}</>
                    </div>
                )}
            </>
        </div>
    );
}
