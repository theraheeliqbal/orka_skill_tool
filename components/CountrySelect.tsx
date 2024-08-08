"use client";

import React, { useState } from "react";
import Select from "react-select";
import useSWR from "swr";
import { CountryType } from "@/types/types";

export type CountrySelectType = {
  setCountry: (country: CountryType) => void;
};

const CountrySelect = ({ setCountry }: CountrySelectType) => {
  const [countries, setCountries] = useState<[] | CountryType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<null | CountryType>(
    null
  );

  const fetchCountryList = async () => {
    const LIST_URL =
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code";

    const res = await fetch(LIST_URL);
    const data = await res.json();

    setCountries(data?.countries || []);
    // setSelectedCountry(data?.userSelectValue || null);
  };

  const { data, isLoading, error } = useSWR("countryList", fetchCountryList);

  const handleInputChange = (inputValue: string) => {
    const exists = countries.some(
      (country) => country.label.toLowerCase() === inputValue.toLowerCase()
    );

    if (!exists && inputValue.trim() !== "") {
      const newCountry = {
        label: inputValue,
        value: inputValue.toLowerCase(),
      };
      setCountries([...countries, newCountry]);
      setSelectedCountry(newCountry);
      setCountry(newCountry);
    }
  };

  const handleChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
    setCountry(selectedOption);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#3b82f6" : "#6b7280",
      borderWidth: state.isFocused ? "1px" : "1px",
      "&:hover": { borderColor: "#6b7280", borderWidth: 1 },
      paddingLeft: "6px",
      paddingTop: "5px",
      paddingBottom: "5px",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontSize: "12px",
      color: "#9ca3af",
    }),
  };

  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={handleChange}
      onInputChange={handleInputChange}
      placeholder="Select or add a country"
      isLoading={isLoading}
      noOptionsMessage={() => "No countries found. Type to add a new one."}
      styles={customStyles}
    />
  );
};

export default CountrySelect;
