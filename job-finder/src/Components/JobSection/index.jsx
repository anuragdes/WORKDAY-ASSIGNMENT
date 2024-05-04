import React from "react";
import JobCard from "../JobCard/JobCard";
import style from "./index.module.css"

const JobSection = ({ data }) => {
  return (
    <div className={`${style.jobSectionContainer}`}>
      {data.map((el, idx) => (
        <JobCard {...el} key={el.jdUid} />
      ))}
    </div>
  );
};

export default JobSection;
