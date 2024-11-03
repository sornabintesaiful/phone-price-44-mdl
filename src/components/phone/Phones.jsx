import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis,YAxis, Tooltip } from 'recharts';

const Phones = () => {
  
  const [phones, setPhones] = useState([]);

  useEffect(() => {
  //   fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  //     .then(res => res.json())
    //     .then(data=>setPhones(data.data));
    
    axios
      .get('https://openapi.programming-hero.com/api/phones?search=iphone')
      // .then(data => console.log(data.data.data));
      .then(data => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map(phone => {
          const obj = {
            name: phone.phone_name,
            price:parseInt(phone.slug.split('-')[1])
          }
          return obj;
        })
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
      });
  },[])

 

  return (
    <div>
      <h1 className="text-5xl">Phones: {phones.length}</h1>

      <BarChart className="m-4 p-4" width={600} height={400} data={phones}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phones;