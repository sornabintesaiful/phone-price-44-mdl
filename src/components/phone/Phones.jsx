import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

import { Audio } from 'react-loader-spinner';

const Phones = () => {
  
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false)
      });
  },[])

  

  return (
    <div>
      {loading && (
        <div className="text-center ">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}

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