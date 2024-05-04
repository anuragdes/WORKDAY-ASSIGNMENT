import React from "react";
import style from "./JobCard.module.css";
import TimeLinePill from "../TimeLinePill";

function JobCard({
  jdUid,
  jdLink,
  jobDetailsFromCompany,
  maxJdSalary,
  minJdSalary,
  salaryCurrencyCode,
  location,
  minExp,
  maxExp,
  jobRole,
  companyName,
  logoUrl,
}) {
  return (
    <div className={`${style.parentContainer}`}>
        <TimeLinePill/>
        <br/>
      <div className={`${style.companyImageContainer}`}>
        <img src={logoUrl} className={`${style.logoUrl}`} />
        <div className={`${style.titleCase} ${style.text14}`}>
          <div className={`${style.text12} ${style.fw600}`}>{companyName}</div>
          <div className={`${style.jobRole}`}>{jobRole}</div>
          <div className={`${style.location} ${style.text12}`}>{location}</div>
        </div>
      </div>
      <br />
      <div className={`${style.text14}`}>
        Estimated Salary: {minJdSalary || maxJdSalary ? salaryCurrencyCode : ""}{" "}
        {minJdSalary && <span>{minJdSalary}</span>}
        {minJdSalary && maxJdSalary ? "-" : ""}
        {maxJdSalary && <span>{maxJdSalary}</span>}
      </div>
      <br />
      <div className={`${style.text14} ${style.fw600}`}>About Company:</div>
      <div className={`${style.jobDetailsFromCompany} ${style.text14}`}>
        {jobDetailsFromCompany}
      </div>
      <br />
      <div className={`${style.text12} ${style.fw600}`}>Minimum Experience</div>
      <div>{minExp}</div>
      <br />
      <button className={`${style.applyBtn}`}>
        ⚡ Easy Apply
      </button>
      <button className={`${style.applyRefferalBtn}`}>
        ⚡ Unlock referal asks
      </button>
    </div>
  );
}

export default JobCard;
