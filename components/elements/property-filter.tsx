"use client";

import {
  addAmenity,
  addBathrooms,
  addBedrooms,
  addCity,
  addGarages,
  addKeyword,
  addPrice,
  addPropertyType,
  addRooms,
  addSize,
  addState,
  addStatus,
  resetFilters,
} from "@/features/filter/filterSlice";
import {
  clearAmenityFilters,
  toggleAmenityCheck,
} from "@/features/property/propertySlice";
import type { RootState } from "@/features/store";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PropertyFilter() {
  const dispatch = useDispatch();
  const {
    propertyTypes = [],
    amenitiesList = [],
    cities = [],
  } = useSelector((state: RootState) => state.property);
  const { propertyFilter } = useSelector((state: RootState) => state.filter);

  const states = useSelector((state: RootState) => state.property.states) || [];
  const statuses =
    useSelector((state: RootState) => state.property.statuses) || [];

  const [priceRange, setPriceRange] = useState({
    min: propertyFilter.price.min,
    max: propertyFilter.price.max,
  });

  const [sizeRange, setSizeRange] = useState({
    min: propertyFilter.size.min,
    max: propertyFilter.size.max,
  });

  const [activeTab, setActiveTab] = useState("rent"); // "rent" or "sale"
  const [keyword, setKeyword] = useState(propertyFilter.keyword || "");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Update local state when propertyFilter changes
    setPriceRange({
      min: propertyFilter.price.min,
      max: propertyFilter.price.max,
    });
    setSizeRange({
      min: propertyFilter.size.min,
      max: propertyFilter.size.max,
    });
    setKeyword(propertyFilter.keyword || "");
  }, [propertyFilter]);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    dispatch(addKeyword(e.target.value));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addCity(e.target.value));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addState(e.target.value));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addStatus(e.target.value));
  };

  const handlePropertyTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    dispatch(addPropertyType(e.target.value));
  };

  const handleBedroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number.parseInt(e.target.value);
    dispatch(addBedrooms({ min: value, max: 10 }));
  };

  const handleBathroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number.parseInt(e.target.value);
    dispatch(addBathrooms({ min: value, max: 10 }));
  };

  const handleGaragesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number.parseInt(e.target.value);
    dispatch(addGarages({ min: value, max: 5 }));
  };

  const handleRoomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number.parseInt(e.target.value);
    dispatch(addRooms({ min: value, max: 20 }));
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max",
  ) => {
    const value = Number.parseInt(e.target.value);
    setPriceRange((prev) => ({ ...prev, [type]: value }));
  };

  const handleSizeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max",
  ) => {
    const value = Number.parseInt(e.target.value);
    setSizeRange((prev) => ({ ...prev, [type]: value }));
  };

  const handleAmenityToggle = (amenityId: number, amenityValue: string) => {
    dispatch(toggleAmenityCheck(amenityId));
    dispatch(addAmenity(amenityValue));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    dispatch(clearAmenityFilters());
    setPriceRange({ min: 0, max: 5000000 });
    setSizeRange({ min: 0, max: 10000 });
    setKeyword("");
    setAddress("");
  };

  const applyFilters = () => {
    dispatch(addPrice(priceRange));
    dispatch(addSize(sizeRange));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Update status based on the tab
    dispatch(addStatus(tab === "rent" ? "For Rent" : "For Sale"));
  };

  // Define a list of static amenities if amenitiesList is not available
  const amenities =
    amenitiesList.length > 0
      ? amenitiesList
      : [
          { id: 1, name: "Air Condition" },
          { id: 2, name: "Selling Height" },
          { id: 3, name: "Heating" },
          { id: 4, name: "Window Type" },
          { id: 5, name: "Elevator" },
          { id: 6, name: "Fire Place" },
          { id: 7, name: "Pet Friendly" },
          { id: 8, name: "Parking" },
          { id: 9, name: "Disabled Access" },
          { id: 10, name: "Floor" },
          { id: 11, name: "Renovation" },
          { id: 12, name: "Cable TV" },
          { id: 13, name: "Furnishing" },
          { id: 14, name: "Garden" },
          { id: 15, name: "Wifi" },
          { id: 16, name: "Intercom" },
        ];

  return (
    <div className="sidebar1-area filter-options-form">
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade ${activeTab === "rent" ? "show active" : ""}`}
          id="pills-home1"
          role="tabpanel"
          aria-labelledby="pills-home1-tab"
          tabIndex={0}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="input-area">
                <input
                  type="text"
                  placeholder="Types keyword"
                  value={keyword}
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="input-area">
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input-area m-0">
                <select
                  name="country"
                  id="country1"
                  className="country-area nice-select"
                  onChange={handleCityChange}
                  value={propertyFilter.city}
                >
                  <option value="" data-display="All Cities">
                    All Cities
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.value || city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-area">
                <select
                  name="country"
                  id="country2"
                  className="country-area nice-select"
                  onChange={handleBedroomsChange}
                  value={propertyFilter.bedrooms.min}
                >
                  <option value="0" data-display="Bedrooms">
                    Bedrooms
                  </option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                </select>
              </div>
              <div className="input-area">
                <select
                  name="country"
                  id="country3"
                  className="country-area nice-select"
                  onChange={handleBathroomsChange}
                  value={propertyFilter.bathrooms.min}
                >
                  <option value="0" data-display="Bathrooms">
                    Bathrooms
                  </option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                </select>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Min Price"
                      value={priceRange.min > 0 ? priceRange.min : ""}
                      onChange={(e) => handlePriceChange(e, "min")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Max Price"
                      value={priceRange.max > 0 ? priceRange.max : ""}
                      onChange={(e) => handlePriceChange(e, "max")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Min Size"
                      value={sizeRange.min > 0 ? sizeRange.min : ""}
                      onChange={(e) => handleSizeChange(e, "min")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Max Size"
                      value={sizeRange.max > 0 ? sizeRange.max : ""}
                      onChange={(e) => handleSizeChange(e, "max")}
                    />
                  </div>
                </div>
              </div>
              <h3 />
            </div>
          </div>
          <div className="space32" />
          <h3>Amenities</h3>
          <div className="space12" />
          <div className="row">
            <div className="col-lg-6 col-md-6">
              {amenities.slice(0, 8).map((amenity) => (
                <fieldset key={amenity.id} className="checkbox-item style-1">
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        amenitiesList.find((a) => a.id === amenity.id)
                          ?.isChecked || false
                      }
                      onChange={() =>
                        handleAmenityToggle(amenity.id, amenity.name)
                      }
                    />
                    <span className="btn-checkbox" />
                    <span className="text-4">{amenity.name}</span>
                  </label>
                </fieldset>
              ))}
            </div>
            <div className="col-lg-6 col-md-6">
              {amenities.slice(8, 16).map((amenity) => (
                <fieldset key={amenity.id} className="checkbox-item style-1">
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        amenitiesList.find((a) => a.id === amenity.id)
                          ?.isChecked || false
                      }
                      onChange={() =>
                        handleAmenityToggle(amenity.id, amenity.name)
                      }
                    />
                    <span className="btn-checkbox" />
                    <span className="text-4">{amenity.name}</span>
                  </label>
                </fieldset>
              ))}
              <div className="space32" />
            </div>
            <div className="col-lg-12">
              <div className="btn-area1">
                <Link
                  href="#"
                  className="theme-btn1"
                  onClick={(e) => {
                    e.preventDefault();
                    applyFilters();
                  }}
                >
                  Find Your Dream Property{" "}
                  <span className="arrow1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      fill="currentColor"
                    >
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg>
                  </span>
                  <span className="arrow2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      fill="currentColor"
                    >
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="space16" />
              <div className="btn-area1">
                <span onClick={handleResetFilters} className="reset-filter">
                  Reset Filters
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${activeTab === "sale" ? "show active" : ""}`}
          id="pills-profile1"
          role="tabpanel"
          aria-labelledby="pills-profile1-tab"
          tabIndex={0}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="input-area">
                <input
                  type="text"
                  placeholder="Types keyword"
                  value={keyword}
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="input-area">
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="input-area m-0">
                <select
                  name="country"
                  id="country4"
                  className="country-area nice-select"
                  onChange={handleCityChange}
                  value={propertyFilter.city}
                >
                  <option value="" data-display="All Cities">
                    All Cities
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.value || city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-area">
                <select
                  name="country"
                  id="country5"
                  className="country-area nice-select"
                  onChange={handleBedroomsChange}
                  value={propertyFilter.bedrooms.min}
                >
                  <option value="0" data-display="Bedrooms">
                    Bedrooms
                  </option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                </select>
              </div>
              <div className="input-area">
                <select
                  name="country"
                  id="country6"
                  className="country-area nice-select"
                  onChange={handleBathroomsChange}
                  value={propertyFilter.bathrooms.min}
                >
                  <option value="0" data-display="Bathrooms">
                    Bathrooms
                  </option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                </select>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Min Price"
                      value={priceRange.min > 0 ? priceRange.min : ""}
                      onChange={(e) => handlePriceChange(e, "min")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Max Price"
                      value={priceRange.max > 0 ? priceRange.max : ""}
                      onChange={(e) => handlePriceChange(e, "max")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Min Size"
                      value={sizeRange.min > 0 ? sizeRange.min : ""}
                      onChange={(e) => handleSizeChange(e, "min")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-area">
                    <input
                      type="text"
                      placeholder="Max Size"
                      value={sizeRange.max > 0 ? sizeRange.max : ""}
                      onChange={(e) => handleSizeChange(e, "max")}
                    />
                  </div>
                </div>
              </div>
              <h3 />
            </div>
          </div>
          <div className="space32" />
          <h3>Amenities</h3>
          <div className="space12" />
          <div className="row">
            <div className="col-lg-6 col-md-6">
              {amenities.slice(0, 8).map((amenity) => (
                <fieldset key={amenity.id} className="checkbox-item style-1">
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        amenitiesList.find((a) => a.id === amenity.id)
                          ?.isChecked || false
                      }
                      onChange={() =>
                        handleAmenityToggle(amenity.id, amenity.name)
                      }
                    />
                    <span className="btn-checkbox" />
                    <span className="text-4">{amenity.name}</span>
                  </label>
                </fieldset>
              ))}
            </div>
            <div className="col-lg-6 col-md-6">
              {amenities.slice(8, 16).map((amenity) => (
                <fieldset key={amenity.id} className="checkbox-item style-1">
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        amenitiesList.find((a) => a.id === amenity.id)
                          ?.isChecked || false
                      }
                      onChange={() =>
                        handleAmenityToggle(amenity.id, amenity.name)
                      }
                    />
                    <span className="btn-checkbox" />
                    <span className="text-4">{amenity.name}</span>
                  </label>
                </fieldset>
              ))}
              <div className="space32" />
            </div>
            <div className="col-lg-12">
              <div className="btn-area1">
                <Link
                  href="#"
                  className="theme-btn1"
                  onClick={(e) => {
                    e.preventDefault();
                    applyFilters();
                  }}
                >
                  Find Your Dream Property{" "}
                  <span className="arrow1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      fill="currentColor"
                    >
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg>
                  </span>
                  <span className="arrow2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      fill="currentColor"
                    >
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="space16" />
              <div className="btn-area1">
                <span onClick={handleResetFilters} className="reset-filter">
                  Reset Filters
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
