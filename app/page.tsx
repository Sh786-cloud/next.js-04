import React from "react";
import Card from "./components/card";

export default function Home () {
  return (
    <div>
      <div className="mx-w-[1440px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        <Card 
          name="Muhammad Ali"
          rollnumber={10701173}
          day="Sunday"
          time="09:00 - 12:00"
          city="Karachi"
        />
        <Card 
          name="Arsalan Ahmed"
          rollnumber={50201310}
          day="Saturday"
          time="07:00 - 10:00"
          city="Karachi"
        />
        <Card 
          name="Nadeem Ahmed"
          rollnumber={10701145}
          day="Monday"
          time="09:00 - 12:00"
          city="Karachi"
        />
      </div>
    </div>
  )
}