import { useEffect, useState } from "react";
import "../components/style.css";
import React from "react";
import Prayers from "./Adantime";
export default function Prayer() {
  const [datacity,setdatacity]=useState("Sanaa")
  const [data,setdata]=useState("")
  const [time,settim]=useState("")


  const city=[
    {name:"صنعاء", value:"YE-SN"},
    {name:"عدن", value:"YE-AD"},
    {name:" .تعز", value:"YE-TA"},
    {name:"لحج", value:"Lahij"},
    {name:"  الظا لع", value:"YE-DA"},
    {name:"  الحديده", value:"Al Ḩudaydah	"},

  ]
  useEffect(()=>{
    fetch(`https://api.aladhan.com/v1/timingsByCity/15-10-2024?city=YE&country=${datacity}`).then((data)=>data.json()).then((data)=>setdata(data.data.timings)).catch((e)=>console.log(e.masseg))
    fetch(`https://api.aladhan.com/v1/timingsByCity/15-10-2024?city=Ye&country=${datacity}`).then((data)=>data.json()).then((data)=>settim(data.data.date.gregorian.date)).catch((e)=>console.log(e.masseg))

  },[datacity])
console.log(data)
  return (
   
    <div className="container">
      <div className="timedata">

        <div style={{textAlign:"right"}}>
        <h3>التاريخ</h3>
        <h3>{time}</h3>
        </div>
        <div  style={{textAlign:"right"}}>
          <h3>المدينه</h3>
          <select onChange={(e)=>setdatacity(e.target.value)}>
            {
              city.map((e)=><option key={e.value} value={e.value}>{e.name}</option>)
            }

          </select>
        </div>
      </div>
    
     
      <Prayers name=" الفحر" time={data.Fajr} />
      <Prayers name=" الظهر" time={data.Dhuhr} />
      <Prayers name=" العصر" time={data.Asr}/>
      <Prayers name=" المغرب" time={data.Maghrib}/>
      <Prayers name=" العشاء" time={data.Isha} />
    </div>
  );
}
