import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "../redux/Slices/DataSlice";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

import { DateRangePicker } from "react-date-range";

Chart.register(...registerables);

const HomePage = () => {
  const [startDatee, setstartDate] = useState(new Date());
  const [endDatee, setendDate] = useState(new Date());

  const [filteredData, setfilteredData] = useState([]);

  const [AgeGreater25, setAgeGreater25] = useState([]);
  const [AgeGreater15_25, setAgeGreater15_25] = useState([]);

  const dispatch = useDispatch();

  const dataFromRedux = useSelector((state) => state.data);

  // console.log("23 ",  dataFromRedux.data.data)

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, []);

  const handleSelect = (date) => {
    // console.log(date);

    let filtered = dataFromRedux.data.data.filter((data) => {
      //  console.log(data.Day)
      let apiDate = new Date(data.Day);
      return (
        apiDate >= date.selection.startDate && apiDate <= date.selection.endDate
      );
    });

    setstartDate(date.selection.startDate);
    setendDate(date.selection.endDate);

    setfilteredData(filtered);

    // console.log("filtered" , filtered )
  };

  const selectionRange = {
    startDate: startDatee,
    endDate: endDatee,
    key: "selection",
  };

  const ageOnChange = (e) => {
    dataFromRedux.data.data.filter((data) => {
      if (String(e.target.value) === data.Age) {
        // setCountAge( data.length )
        // console.log(data)
        setAgeGreater25(data.Age);
      } else {
        setAgeGreater15_25(data.Age);
      }
    });
  };

  const genderOnChange = () => {};

  return (
    <>
      <Header />

      <div className="p-5 mt-2">
        <div className="row mb-2">
          <div className=" col-12 col-md-6">
            <select className="form-select" onChange={(e) => ageOnChange(e)}>
              <option>Select Age Filter</option>
              <option value="15-25">15-25</option>
              <option value=">25">{">25"}</option>
            </select>
            <p>AgeGreater25 - {AgeGreater25.length} </p>
            <p>AgeGreater15_25 - {AgeGreater15_25.length} </p>
          </div>

          <div className=" col-12 col-md-6">
            <select className="form-select" onChange={genderOnChange}>
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 mb-5">
            <div>
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-6 mb-5">
            {filteredData.length === 0 ? (
              <b> ReSelect The Date Data Not Available </b>
            ) : (
              filteredData.map((data) => {
                return (
                  <div
                    className="d-flex flex-row justify-content-between"
                    key={data.id}
                  >
                    {" "}
                    <p>{data.Day.substring(0, 10)}</p> <p>{data.Age}</p>{" "}
                    <p>{data.Gender}</p>
                  </div>
                );
              })
            )}
          </div>

          
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 mb-5 ">
            <BarChart filteredData={filteredData} />
          </div>
          <div className="col-12 col-md-12 col-lg-6 ">
            <LineChart filteredData={filteredData} />
          </div>
        </div>

      
      </div>
    </>
  );
};

export default HomePage;
