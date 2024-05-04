import React, { useEffect, useState } from "react";
import JobSection from "./Components/JobSection";
import FilterComponents from "./FilterComponents/index.jsx";
import axios from "axios";
import Spinner from "./Components/Spinner/index.jsx";

function App() {
  const [filters, setFilters] = useState({
    minExp: "",
    location: "",
    jobRole: "",
    minJdSalary: "",
  });
  const [data, setData] = useState({ jdList: [], totalCount: 0 });
  const [filteredData, setFilteredData] = useState(data.jdList);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFilters((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  useEffect(() => {
    const updatedData = [...filteredData].filter((el) => {
      let selectThisJob = true;

      if (
        filters.jobRole &&
        (el.jobRole.toLowerCase() !== filters.jobRole.toLowerCase() ||
          !el.jobRole)
      ) {
        selectThisJob = false;
      }

      if (
        filters.location &&
        (el.location.toLowerCase() !== filters.location.toLowerCase() ||
          !el.location)
      ) {
        selectThisJob = false;
      }

      if (filters.minExp && (el.minExp < filters.minExp || !el.minExp)) {
        selectThisJob = false;
      }

      if (
        filters.minJdSalary &&
        (el.minJdSalary < filters.minJdSalary || !el.minJdSalary)
      ) {
        selectThisJob = false;
      }

      if (selectThisJob) {
        return el;
      }
    });

    console.log("DATA", data, filters);
    setData(updatedData);
  }, [filters]);

  async function fetchData() {
    try {

      if((data.totalCount < filteredData.length && data.jdList.length !== 0 && filteredData.length !== 0) || isLoading) {
        return;
      }

      setIsLoading(prev => true);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit,
        offset: filteredData.length ? filteredData.length : 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      setData(response.data);
      console.log("response", response, response.data?.jdList);
      setFilteredData((prev) => [...prev, ...response?.data?.jdList]);
      setIsLoading(prev => false);
    } catch (err) {
      setIsLoading(prev => false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  console.log("DATA", data, filteredData);

  return (
    <div>
      <FilterComponents handleChange={handleChange} filters={filters} />
      {filteredData?.length > 0 && <JobSection data={filteredData ?? []} />}
      {isLoading && <Spinner />}
    </div>
  );
}

export default App;
