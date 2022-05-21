import React from "react";
import "./Dashboard.css";

import { AiFillEdit } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { data } from "./SliderData";
import DonutChart from "react-donut-chart";

import Graph from "./Graph";


function Dashboard(props) {
  return (
    <div className="dashboard" id="dashboard">
      <div className="dashboard-title">
        <span>Good day, Bature Badamasi 😎</span>
      </div>
      <div className="dashboard-slider">
        <Swiper navigation={true} modules={[Navigation]}>
          {data.map((item, key) => (
            <SwiperSlide>
              <div className="slider-contents">
                <h2>{item.heading}</h2>
                <h3>{item.description}</h3>
                <div className="slider-button-container">
                  <span>
                    <AiFillEdit />
                    Edit
                  </span>
                  <div className="slider-button"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="dashboard-charts">
        <div className="chart">
          <div className="chart-container">
            <h3 className="chart-title">Total trades</h3>
            <div className="chart-labels">
              <span>Today</span>
              <IoMdArrowDropdown />
            </div>
            <div className="pi-chart">
              <DonutChart
                data={[
                  {
                    label: "",
                    value: 25,
                  },
                  {
                    label: "",
                    value: 75,
                  },
                ]}
                legend={false}
                interactive={false}
                height={150}
                width={150}
                colors={["black", "yellow"]}
                innerRadius={0.5}
              />
              <span className="pi-chart-title">5.7K</span>
            </div>
            <span className="chart-observation">Better than yesterday</span>
            <a className="chart-visit" href="/">
              Visit Stats <BsArrowRightShort />
            </a>
          </div>
        </div>

        <div className="chart">
          <div className="chart-container">
            <h3 className="chart-title">Total trades</h3>
            <div className="chart-labels">
              <span>Today</span>
              <IoMdArrowDropdown />
            </div>
            <div className="chart-labels chart-labels2">
              <span>USD$</span>
              <IoMdArrowDropdown />
            </div>
            <div className="pi-chart">
              <DonutChart
                data={[
                  {
                    label: "",
                    value: 25,
                  },
                  {
                    label: "",
                    value: 75,
                  },
                ]}
                legend={false}
                interactive={false}
                height={150}
                width={150}
                colors={["black", "yellow"]}
                innerRadius={0.5}
              />
              <span className="pi-chart-title">5.7K</span>
            </div>

            <a className="chart-visit" href="/">
              Visit Stats <BsArrowRightShort />
            </a>
          </div>
        </div>
        <div className="chart">
          <div className="chart-container">
            <h3 className="chart-title">Total trades</h3>
            <div className="chart-labels ">
              <span>Today</span>
              <IoMdArrowDropdown />
            </div>
            <div className="chart-labels chart-labels2">
              <span>Login</span>
              <IoMdArrowDropdown />
            </div>
            <div className="pi-chart">
              <DonutChart
                data={[
                  {
                    label: "",
                    value: 25,
                  },
                  {
                    label: "",
                    value: 75,
                  },
                ]}
                legend={false}
                interactive={false}
                height={150}
                width={150}
                colors={["black", "yellow"]}
                innerRadius={0.5}
              />
              <span className="pi-chart-title">5.7K</span>
            </div>

            <a className="chart-visit" href="/">
              Visit Stats <BsArrowRightShort />
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard-graph">
        <div className="graph-titles">
          <IoGiftOutline className="graph-titles-icon" />
          <span>Visitor stats</span>
        </div>
        <Graph />
        <div className="main-graph"></div>
      </div>
    </div>
  );
}

export default Dashboard;
