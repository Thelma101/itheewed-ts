import React from "react";

const CalendarSection = () => {
  return(
    <section className="calendar-section bg-[#DBFCFF]">
        <div className="flex items-center justify-center py-20 gap-9">
            <div className="flex flex-col items-center justify-center mx-auto px-9 ">
                <div className="flex flex-col gap-5">
                    <p className=" text-primary-red font-bold text-3xl">Enjoy the flexibility </p>
                    <p>of planning a wedding from the comfort of your home within a single App. </p>
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                calendar
            </div>
        </div>
    </section>
  )
}

export default CalendarSection;