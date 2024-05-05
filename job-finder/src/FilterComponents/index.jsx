import * as React from "react";
import CommonDropdownFilter from "./common-dropdown";
import style from "./index.module.css";

const minExpValues = [
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
  { label: 7, value: 7 },
  { label: 8, value: 8 },
  { label: 9, value: 9 },
];
const remoteValues = [
  { label: "Remote", value: "remote" },
  { label: "Hybrid", value: "hybrid" },
  { label: "On-site", value: "onsite" },
];
const techStackValues = [
  { label: "Javascipt", value: "javascipt" },
  { label: "Reactjs", value: "reactjs" },
  { label: "Nextjs", value: "nextjs" },
];
const RoleValues = [
  { label: "Frontend ", value: "Frontend" },
  { label: "Backend", value: "backend" },
  { label: "FullStack", value: "fullStack" },
  { label: "Ios", value: "ios" },
  { label: "Flutter", value: "flutter" },
];
const payValues = [
  { label: 10, value: 10 },
  { label: 20, value: 20 },
  { label: 30, value: 30 },
  { label: 40, value: 40 },
  { label: 50, value: 50 },
  { label: 60, value: 60 },
  { label: 70, value: 70 },
  { label: 80, value: 80 },
  { label: 90, value: 90 },
  { label: 100, value: 100 },
];

export default function FilterComponents({handleChange, filters}) {

  return (
    <div className={`${style.parentContainer}`}>
      <CommonDropdownFilter
        displayKey={"Min Exp"}
        values={minExpValues}
        handleChange={handleChange}
        keyName={"minExp"}
        selectedValue={filters.minExp}
      />

      <CommonDropdownFilter
        displayKey={"Remote"}
        values={remoteValues}
        handleChange={handleChange}
        keyName={"location"}
        selectedValue={filters.location}
      />

      {/* <CommonDropdownFilter
        displayKey={"Tech Stack"}
        values={techStackValues}
        handleChange={handleChange}
        keyName={"remote"}
      /> */}

      <CommonDropdownFilter
        displayKey={"Roles"}
        values={RoleValues}
        handleChange={handleChange}
        keyName={"jobRole"}
        selectedValue={filters.jobRole}
      />

      <CommonDropdownFilter
        displayKey={"Minimum Base pay"}
        values={payValues}
        handleChange={handleChange}
        keyName={"minJdSalary"}
        selectedValue={filters.minJdSalary}
      />

      <input type="text" name="companyName" className={`${style.inputBox}`} placeholder="Company Name" value={filters.companyName} onChange={handleChange} />
    </div>
  );
}
