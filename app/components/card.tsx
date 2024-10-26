import React from "react";

interface cardType {
    name : string;
    rollnumber : number;
    day : string;
    time : string;
    city : string
};

const Card = (props : cardType) => {
    return (
     <>
       <div className="rounded-2xl p-5 m-3 bg-yellow-200 font-sans">
        <h1 className="xl:text-3xl text-3xl font-bold pb-5 ml-20">
            Student ID Card
        </h1>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4 ml-10">
            Name : <span className="font-bold">{props.name}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4 ml-10">
            Roll Number : <span className="font-bold">{props.rollnumber}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4 ml-10">
            Day : <span className="font-bold">{props.day}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4 ml-10">
            Time : <span className="font-bold">{props.time}</span>
        </p>
        <p className="xl:text-1xl lg:text-[1rem] md:text-[0.75rem] pb-4 ml-10">
            Center : <span className="font-bold">{props.city}</span>
        </p>
       </div>
     </>
    )
};
export default Card