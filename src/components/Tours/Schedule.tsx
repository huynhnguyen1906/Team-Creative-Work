import Style from '@styles/componentsStyles/Tours/Schedule.module.scss';
import ScheduleItem from '@/components/Tours/ScheduleItem';

export default function Schedule({ schedule, tourMap }: { schedule: any; tourMap: any }) {
    return (
        <div className={Style.borderline}>
            {!schedule || schedule.length === 0 ? (
                <span>スケジュールがございません</span>
            ) : (
                <>
                    <div className={Style.circle}>
                        <div className={Style.borderBox}>
                            <div></div>
                        </div>
                        <div className={Style.schedWrap}>
                            {schedule.map((day: any) =>
                                day.destinations?.map((destination: any, index: number) => (
                                    <ScheduleItem
                                        key={index}
                                        day={day.day}
                                        destination={destination.destination}
                                        description={destination.description}
                                        image={destination.image}
                                    />
                                )),
                            )}
                        </div>
                    </div>
                    <div className={Style.map} dangerouslySetInnerHTML={{ __html: tourMap }}></div>
                </>
            )}
        </div>
    );
}
