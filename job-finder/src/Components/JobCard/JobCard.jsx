import React from 'react'
import style from "./JobCard.module.css"

function JobCard({jobDetails}) {
    console.log("jobDetails", jobDetails)
  return (
    <div className={`${style.parentContainer}`}>
        <div>{jobDetails.companyName}</div>
        <div className={`${style.jobRole}`}>{jobDetails.jobRole}</div>
        <div className={`${style.jobDetailsFromCompany}`}>{jobDetails.jobDetailsFromCompany}</div>
        <div className={`${style.companyImageContainer}`}><img src={jobDetails.logoUrl} className={`${style.logoUrl}`}/></div>
    </div>
  )
}

export default JobCard