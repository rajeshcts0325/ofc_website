"use client"

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
} from "@/features/filter/filterSlice"
import { clearAmenityFilters, toggleAmenityCheck } from "@/features/property/propertySlice"
import type { RootState } from "@/features/store"
import type React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// Define interfaces for our data structures
interface PropertyType {
	id?: number
	name: string
	value?: string
}

interface City {
	id?: number
	name: string
	value?: string
}

interface State {
	id?: number
	name: string
	value?: string
}

interface Status {
	id?: number
	name: string
	value?: string
}

interface Amenity {
	id: number
	name: string
	value?: string
	checked?: boolean
}

export default function PropertyFilter2() {
	const dispatch = useDispatch()
	const { propertyFilter } = useSelector((state: RootState) => state.filter)

	// Safely access Redux state
	const propertyState = useSelector((state: RootState) => state.property)

	// Process property types
	const propertyTypes: PropertyType[] = Array.isArray(propertyState.propertyTypes) ? propertyState.propertyTypes : []

	// Process cities
	const cities: City[] = Array.isArray(propertyState.cities) ? propertyState.cities : []

	// Process states
	const states: State[] = Array.isArray(propertyState.states) ? propertyState.states : []

	// Process statuses
	const statuses: Status[] = Array.isArray(propertyState.statuses) ? propertyState.statuses : []

	const [priceRange, setPriceRange] = useState({
		min: propertyFilter.price.min,
		max: propertyFilter.price.max,
	})

	const [sizeRange, setSizeRange] = useState({
		min: propertyFilter.size.min,
		max: propertyFilter.size.max,
	})

	const [activeTab, setActiveTab] = useState("for-sale")

	useEffect(() => {
		// Update local state when propertyFilter changes
		setPriceRange({
			min: propertyFilter.price.min,
			max: propertyFilter.price.max,
		})
		setSizeRange({
			min: propertyFilter.size.min,
			max: propertyFilter.size.max,
		})
	}, [propertyFilter])

	const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(addKeyword(e.target.value))
	}

	const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(addCity(e.target.value))
	}

	const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(addState(e.target.value))
	}

	const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(addStatus(e.target.value))
	}

	const handlePropertyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(addPropertyType(e.target.value))
	}

	const handleBedroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = Number.parseInt(e.target.value)
		dispatch(addBedrooms({ min: value, max: 10 }))
	}

	const handleBathroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = Number.parseInt(e.target.value)
		dispatch(addBathrooms({ min: value, max: 10 }))
	}

	const handleGaragesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = Number.parseInt(e.target.value)
		dispatch(addGarages({ min: value, max: 5 }))
	}

	const handleRoomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = Number.parseInt(e.target.value)
		dispatch(addRooms({ min: value, max: 20 }))
	}

	const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: "min" | "max") => {
		const value = Number.parseInt(e.target.value)
		setPriceRange((prev) => ({ ...prev, [type]: value }))
	}

	const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>, type: "min" | "max") => {
		const value = Number.parseInt(e.target.value)
		setSizeRange((prev) => ({ ...prev, [type]: value }))
	}

	const handleAmenityToggle = (amenityId: number, amenityValue: string) => {
		dispatch(toggleAmenityCheck(amenityId))
		dispatch(addAmenity(amenityValue))
	}

	const handleResetFilters = () => {
		dispatch(resetFilters())
		dispatch(clearAmenityFilters())
		setPriceRange({ min: 0, max: 5000000 })
		setSizeRange({ min: 0, max: 10000 })
	}

	const applyFilters = () => {
		dispatch(addPrice(priceRange))
		dispatch(addSize(sizeRange))
	}

	// Define a list of static amenities
	const staticAmenities = [
		{ id: 1, name: "Air Conditioning" },
		{ id: 2, name: "Laundry" },
		{ id: 3, name: "Refrigerator" },
		{ id: 4, name: "Washer" },
		{ id: 5, name: "Barbeque" },
		{ id: 6, name: "Lawn" },
		{ id: 7, name: "Sauna" },
		{ id: 8, name: "Wifi" },
		{ id: 9, name: "Dryer" },
		{ id: 10, name: "Microwave" },
		{ id: 11, name: "Swimming Pool" },
		{ id: 12, name: "Window Coverings" },
		{ id: 13, name: "Gym" },
		{ id: 14, name: "Outdoor Shower" },
		{ id: 15, name: "TV Cable" },
		{ id: 16, name: "Fireplace" },
	]

	return (
		<>
			<div className="property-tab-section search-filter-form">
				{/* <div className="tab-header">
					<button
						className={`tab-btn ${activeTab === "for-sale" ? "active" : ""}`}
						onClick={() => setActiveTab("for-sale")}
					>
						For Sale
					</button>
					<button
						className={`tab-btn ${activeTab === "for-rent" ? "active" : ""}`}
						onClick={() => setActiveTab("for-rent")}
					>
						For Rent
					</button>
				</div> */}
				<div className="tab-content1" id="for-sale" style={{ display: activeTab === "for-sale" ? "block" : "none" }}>
					<div className="filters">
						<div className="filter-group">
							<label>Status</label>
							<select onChange={handleStatusChange} value={propertyFilter.status}>
								<option value="">All Status</option>
								{statuses.map((status, index) => (
									<option key={index} value={status.value || status.name}>
										{status.name}
									</option>
								))}
							</select>
						</div>
						<div className="filter-group">
							<label>Labels</label>
							<select>
								<option value="All Labels">All Labels</option>
								<option value="New Offer">New Offer</option>
								<option value="Hot Offer">Hot Offer</option>
							</select>
						</div>
						<div className="filter-group">
							<label>Types</label>
							<select onChange={handlePropertyTypeChange} value={propertyFilter.propertyType}>
								<option value="">All Types</option>
								{propertyTypes.map((type, index) => (
									<option key={index} value={type.value || type.name}>
										{type.name}
									</option>
								))}
							</select>
						</div>
						<div className="filter-group">
							<label htmlFor="customize-sale">Customize</label>
							<button id="customize-sale" className="customize-sale show-form">
								Advance{" "}
								<span className="icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071Z"></path>
									</svg>
								</span>
							</button>
						</div>
						<div className="search-button">
							<button onClick={applyFilters}>
								Search
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
									<path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
								</svg>
							</button>
							<span onClick={handleResetFilters} className="reset-filter">
								Reset Filters
							</span>
						</div>
					</div>
				</div>
				<div className="wd-search-form ">
					<div className="group-select">
						<div className="box-select">
							<h5>Bathrooms</h5>
							<select onChange={handleBathroomsChange} value={propertyFilter.bathrooms.min}>
								<option value="0">Any</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>
						<div className="box-select">
							<h5>Bedrooms</h5>
							<select onChange={handleBedroomsChange} value={propertyFilter.bedrooms.min}>
								<option value="0">Any</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>
						<div className="box-select">
							<h5>States</h5>
							<select onChange={handleStateChange} value={propertyFilter.state}>
								<option value="">Any State</option>
								{states.map((state, index) => (
									<option key={index} value={state.value || state.name}>
										{state.name}
									</option>
								))}
							</select>
						</div>
						<div className="box-select">
							<h5>City</h5>
							<select onChange={handleCityChange} value={propertyFilter.city}>
								<option value="">Any City</option>
								{cities.map((city, index) => (
									<option key={index} value={city.value || city.name}>
										{city.name}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="group-select">
						<div className="box-select">
							<h5>Garages</h5>
							<select onChange={handleGaragesChange} value={propertyFilter.garages.min}>
								<option value="0">Any</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
						<div className="box-select">
							<h5>Rooms</h5>
							<select onChange={handleRoomsChange} value={propertyFilter.rooms.min}>
								<option value="0">Any</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>
					</div>
					<div className="group-price">
						<div className="slider-item">
							<div className="slider-label">
								Price Range:{" "}
								<span id="price-output">
									${priceRange.min.toLocaleString()} - ${priceRange.max.toLocaleString()}
								</span>
							</div>
							<div className="slider price-slider">
								<input
									type="range"
									id="price-range-min"
									className="range-min"
									min={200}
									max={2500000}
									value={priceRange.min}
									onChange={(e) => handlePriceChange(e, "min")}
									step={100}
								/>
								<input
									type="range"
									id="price-range-max"
									className="range-max"
									min={200}
									max={2500000}
									value={priceRange.max}
									onChange={(e) => handlePriceChange(e, "max")}
									step={100}
								/>
								<div className="slider-fill" style={{ left: "0%", width: "100%" }} />
							</div>
						</div>
						<div className="slider-item">
							<div className="slider-label">
								Size Range:{" "}
								<span id="size-output">
									{sizeRange.min} SqFt - {sizeRange.max} SqFt
								</span>
							</div>
							<div className="slider size-slider">
								<input
									type="range"
									id="size-range-min"
									className="range-min"
									min={146}
									max={448}
									value={sizeRange.min}
									onChange={(e) => handleSizeChange(e, "min")}
									step={1}
								/>
								<input
									type="range"
									id="size-range-max"
									className="range-max"
									min={146}
									max={448}
									value={sizeRange.max}
									onChange={(e) => handleSizeChange(e, "max")}
									step={1}
								/>
								<div className="slider-fill" style={{ left: "0%", width: "100%" }} />
							</div>
						</div>
					</div>
					<div className="group-checkbox">
						<div className="title text-4 fw-6">Others Features</div>
						<div className="space16" />
						<div className="group-amenities">
							{staticAmenities.map((amenity, index) => (
								<fieldset key={index} className={`checkbox-item style-1 ${index > 0 ? "mt-12" : ""}`}>
									<label>
										<input type="checkbox" onChange={() => handleAmenityToggle(amenity.id, amenity.name)} />
										<span className="btn-checkbox" />
										<span className="text-4">{amenity.name}</span>
									</label>
								</fieldset>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

