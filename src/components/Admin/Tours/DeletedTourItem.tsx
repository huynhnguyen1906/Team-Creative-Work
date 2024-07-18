'use client';

import Style from '@styles/componentsStyles/Admin/ToursItem.module.scss';
import { FaTrash } from 'react-icons/fa6';
import { RiDeviceRecoverLine } from 'react-icons/ri';
import { AdminTourView } from '@/types/AdminTourView';
import axios from 'axios';
import { toast } from 'react-toastify';

interface TourItemProps {
    TourItem: AdminTourView;
    onDelete: (id: string) => void;
}

const truncateString = (str: string, num: number) => {
    return str.length > num ? str.slice(0, num) + '...' : str;
};

export default function DeletedTourItem({ TourItem, onDelete }: TourItemProps) {
    const formattedName = TourItem.name ? truncateString(TourItem.name, 13) : '';
    const formattedDes = TourItem.description ? truncateString(TourItem.description, 20) : '';
    const formattedApplyPoint = TourItem.applyPoint ? truncateString(TourItem.applyPoint, 13) : '';

    const handleRecover = async () => {
        try {
            const response = await axios.post('/api/recover-item', { id: TourItem.id, type: 'tours' });
            if (response.status === 200) {
                toast.success('ツアーが復元されました');
                onDelete(TourItem.id);
            } else {
                toast.error('ツアーの復元に失敗しました');
            }
        } catch (error) {
            console.error('Error deleting tour item:', error);
            toast.error('ツアーが復元されました');
        }
    };

    return (
        <div className={Style.TourItem}>
            <div className={Style.tourName}>
                <p>{formattedName || 'ツアーの名前がございません'}</p>
            </div>
            <div className={Style.TourDes}>
                <p>{formattedDes || 'ツアーの説明がございません'}</p>
            </div>
            <div className={Style.TourApplyPoint}>
                <p>{formattedApplyPoint}</p>
            </div>
            <div className={Style.btnBox}>
                <RiDeviceRecoverLine onClick={handleRecover} />
                <FaTrash />
            </div>
        </div>
    );
}