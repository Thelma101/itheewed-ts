import React, { useState } from "react";


    interface Timeslot {
        id: string;
        time: string;
        event: string;
    }
const CalendarSection = () => {
    const defaultTimeSlot: Timeslot[] = [
        {
            id: '1',
            time: '10:00 AM',
            event: 'Ceremony'
        },
        {
            id: '2',
            time: '11:00 AM',
            event: 'Sermon'
        },
        {
            id: '3',
            time: '12:00 PM',
            event: 'Blessing of Marriage'
        }
    ];

    const [selectedDate, setSelectedDate] = useState<Date | null>()
    const [timeSlots, setTimeSlots] = useState<Timeslot[]>()

        return (
        <section className="flex bg-[#DBFCFF] text-primary-dark px-24">
            <div className="flex items-center justify-center py-20 gap-9">
                <div className="flex flex-col items-start justify-center px-9 gap-5">
                    <div className="flex flex-col gap-5">
                        <p className="  font-bold text-3xl">Enjoy the flexibility </p>
                        <p>of planning a wedding from the comfort of your home within a single App. </p>
                    </div>
                    <div className="flex w-full border-[0.5px] border-primary-gray"></div>
                    <div>
                        <p className="text-xl font-semibold leading-loose">Set your editable dates</p>
                    </div>
                    <div className="flex w-full border-[0.5px] border-primary-gray"></div>
                    <div>
                        <p className="text-xl font-semibold leading-loose">Track your events in real time</p>
                    </div>
                    <div className="flex w-full border-[0.5px] border-primary-gray"></div>
                    <div>
                        <p className="text-xl font-semibold leading-loose">Set a push Notification across all platform</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center bg-white rounded-xl border-[0.5px] border-primary-gray p-14 gap-11">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-2xl font-semibold leading-loose">Set your editable dates</p>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CalendarSection;