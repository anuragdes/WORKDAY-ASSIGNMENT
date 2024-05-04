import React from "react";
import JobSection from "./Components/JobSection";
import FilterComponents from "./FilterComponents/index.jsx";

const data = [
  {
    jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 61,
    minJdSalary: null,
    salaryCurrencyCode: "USD",
    location: "delhi ncr",
    minExp: 3,
    maxExp: 6,
    jobRole: "frontend",
    companyName: "Dropbox",
    logoUrl: "https://logo.clearbit.com/dropbox.com",
  },
  {
    jdUid: "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 100,
    salaryCurrencyCode: "USD",
    location: "mumbai",
    minExp: null,
    maxExp: null,
    jobRole: "ios",
    companyName: "LG",
    logoUrl: "https://logo.clearbit.com/lg.com",
  },
  {
    jdUid: "cfff35d4-053c-11ef-83d3-06301d0a7178-92016",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 28,
    minJdSalary: 26,
    salaryCurrencyCode: "USD",
    location: "remote",
    minExp: 2,
    maxExp: 11,
    jobRole: "android",
    companyName: "Sony",
    logoUrl: "https://logo.clearbit.com/sony.com",
  },
  {
    jdUid: "cfff35e1-053c-11ef-83d3-06301d0a7178-92018",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 45,
    minJdSalary: 35,
    salaryCurrencyCode: "USD",
    location: "chennai",
    minExp: 5,
    maxExp: 6,
    jobRole: "tech lead",
    companyName: "Adobe Systems",
    logoUrl: "https://logo.clearbit.com/adobe.com",
  },
  {
    jdUid: "cfff35ed-053c-11ef-83d3-06301d0a7178-92020",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 48,
    minJdSalary: 26,
    salaryCurrencyCode: "USD",
    location: "delhi ncr",
    minExp: 1,
    maxExp: 8,
    jobRole: "frontend",
    companyName: "HP",
    logoUrl: "https://logo.clearbit.com/hp.com",
  },
];

function App() {
  function handleChange(e) {
    console.log("E", e);
  }

  return (
    <div>
      <FilterComponents handleChange={handleChange} />
      <JobSection data={data} />
    </div>
  );
}

export default App;
