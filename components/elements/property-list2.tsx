"use client";

import { addPerPage, addSort } from "@/features/filter/filterSlice";
import { toggleFavoriteProperty } from "@/features/property/propertySlice";
import type { RootState } from "@/features/store";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Updated interface to match the JSON structure
interface PropertyListItem {
    id: number;
    keyword: string;
    images?: {
        [key: string]: string;
    };
    address: string;
    city: string;
    state: string;
    status: string;
    label: string;
    type: string;
    bedrooms: number;
    linkProperty: number;
    bathrooms: number;
    garages: number;
    rooms: number;
    minPrice: number;
    maxPrice: number;
    minSize: number;
    maxSize: number;
    amenities: string[];
}

export default function PropertyList2() {
    const dispatch = useDispatch();
    const { properties, favoriteProperties } = useSelector((state: RootState) => state.property);
    const { propertyFilter } = useSelector((state: RootState) => state.filter);

    const [filteredProperties, setFilteredProperties] = useState<PropertyListItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6); // Changed to 6 to match the UI layout
    const [sortOrder, setSortOrder] = useState("default");
    const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

    useEffect(() => {
        let result = [...properties] as PropertyListItem[];

        if (propertyFilter.keyword) {
            const keyword = propertyFilter.keyword.toLowerCase();
            result = result.filter((property) => property.keyword.toLowerCase().includes(keyword) || property.address.toLowerCase().includes(keyword));
        }

        if (propertyFilter.city) {
            result = result.filter((property) => property.city.toLowerCase() === propertyFilter.city.replace(/-/g, " ").toLowerCase());
        }

        if (propertyFilter.state) {
            result = result.filter((property) => property.state.toLowerCase() === propertyFilter.state.replace(/-/g, " ").toLowerCase());
        }

        if (propertyFilter.status) {
            result = result.filter((property) => property.status.toLowerCase() === propertyFilter.status.replace(/-/g, " ").toLowerCase());
        }

        // if (propertyFilter.type) {
        // 	result = result.filter(
        // 		(property) => property.type.toLowerCase() === propertyFilter.type.replace(/-/g, " ").toLowerCase(),
        // 	)
        // }

        if (propertyFilter.bedrooms.min > 0) {
            result = result.filter((property) => property.bedrooms >= propertyFilter.bedrooms.min);
        }

        if (propertyFilter.bathrooms.min > 0) {
            result = result.filter((property) => property.bathrooms >= propertyFilter.bathrooms.min);
        }

        if (propertyFilter.garages.min > 0) {
            result = result.filter((property) => property.garages >= propertyFilter.garages.min);
        }

        if (propertyFilter.rooms.min > 0) {
            result = result.filter((property) => property.rooms >= propertyFilter.rooms.min);
        }

        result = result.filter((property) => property.minPrice >= propertyFilter.price.min && property.maxPrice <= propertyFilter.price.max);

        result = result.filter((property) => property.minSize >= propertyFilter.size.min && property.maxSize <= propertyFilter.size.max);

        if (propertyFilter.amenities.length > 0) {
            result = result.filter((property) => propertyFilter.amenities.every((amenity) => property.amenities.some((a) => a.toLowerCase() === amenity.replace(/-/g, " ").toLowerCase())));
        }

        if (sortOrder === "oldest") {
            result.sort((a, b) => a.id - b.id);
        } else if (sortOrder === "newest") {
            result.sort((a, b) => b.id - a.id);
        } else if (sortOrder === "price-low") {
            result.sort((a, b) => a.minPrice - b.minPrice);
        } else if (sortOrder === "price-high") {
            result.sort((a, b) => b.minPrice - a.minPrice);
        }

        setFilteredProperties(result);
        setCurrentPage(1);

        const startIndex = 0;
        const endIndex = Math.min(itemsPerPage, result.length);
        dispatch(addPerPage({ start: startIndex, end: endIndex }));
    }, [properties, propertyFilter, sortOrder, itemsPerPage, dispatch]);

    const indexOfLastProperty = currentPage * itemsPerPage;
    const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = Math.min(pageNumber * itemsPerPage, filteredProperties.length);
        dispatch(addPerPage({ start: startIndex, end: endIndex }));
    };

    const handleFavoriteToggle = (e: React.MouseEvent, propertyId: number) => {
        e.preventDefault();
        dispatch(toggleFavoriteProperty(propertyId));
    };

    const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
        setCurrentPage(1);
        dispatch(addSort(e.target.value));
    };

    const handleViewModeChange = (mode: string) => {
        setViewMode(mode);
    };

    // Initialize tab functionality
    useEffect(() => {
        // Set up tab functionality
        const gridTab = document.getElementById("pills-home-tab");
        const listTab = document.getElementById("pills-profile-tab");

        if (gridTab && listTab) {
            gridTab.addEventListener("click", () => handleViewModeChange("grid"));
            listTab.addEventListener("click", () => handleViewModeChange("list"));
        }

        return () => {
            if (gridTab && listTab) {
                gridTab.removeEventListener("click", () => handleViewModeChange("grid"));
                listTab.removeEventListener("click", () => handleViewModeChange("list"));
            }
        };
    }, []); // Removed handleViewModeChange from dependencies

    const swiperFade = {
        modules: [Autoplay, Pagination, Navigation],
        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    // Function to render property images
    const renderPropertyImages = (property: PropertyListItem) => {
        if (property.images && Object.keys(property.images).length > 0) {
            return (
                <Swiper {...swiperFade} className="swiper swiper-fade">
                    <div className="swiper-wrapper">
                        {Object.values(property.images).map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image || "/assets/img/all-images/properties/property-img1.png"} alt={property.keyword} />
                            </SwiperSlide>
                        ))}
                    </div>
                    <div className="swiper-pagination" />
                </Swiper>
            );
        } else {
            return <img src="/assets/img/all-images/properties/property-img1.png" alt={property.keyword} />;
        }
    };

    // Function to render pagination
    const renderPagination = () => {
        if (totalPages <= 1) return null;

        return (
            <div className="pagination-area mt-4">
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <Link
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(Math.max(1, currentPage - 1));
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                                </svg>
                            </Link>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                                <Link
                                    className="page-link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(page);
                                    }}
                                >
                                    {page}
                                </Link>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                            <Link
                                className="page-link"
                                href="#"
                                aria-label="Next"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePageChange(Math.min(totalPages, currentPage + 1));
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    };

    return (
        <>
            <div className="property-mapgrid-area">
                <div className="heading1">
                    <h3>Properties ({filteredProperties.length})</h3>
                    <div className="tabs-btn">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => handleViewModeChange("grid")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z" />
                                    </svg>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => handleViewModeChange("list")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                        <div className="filter-group">
                            <select onChange={handleSortOrderChange} value={sortOrder}>
                                <option value="default">Sort by (Default)</option>
                                <option value="oldest">Oldest</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="space32" />
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        // tabIndex={0}
                    >
                        <div className="row">
                            {currentProperties.map((property) => (
                                <div key={property.id} className="col-lg-6 col-md-6">
                                    <div className="property-boxarea">
                                        <div className="img1">{renderPropertyImages(property)}</div>
                                        <div className="category-list">
                                            <ul>
                                                <li>
                                                    <Link href="#">{property.type}</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">{property.status}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="content-area">
                                            <Link href={`/property-details-v${property.linkProperty}`}>{property.keyword}</Link>
                                            <div className="space18" />
                                            <p>
                                                {property.address}, {property.city}, {property.state}
                                            </p>
                                            <div className="space24" />
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/img/icons/bed1.svg" alt="bed" />x{property.bedrooms}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/img/icons/bath1.svg" alt="bath" />x{property.bathrooms}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/img/icons/sqare1.svg" alt="size" />
                                                        {property.minSize}-{property.maxSize} sq
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="btn-area">
                                                <Link href="#" className="nm-btn">
                                                    ${property.minPrice.toLocaleString()}
                                                    {property.status === "For Rent" && <small>/month</small>}
                                                </Link>
                                                <Link href="#" className="heart" onClick={(e) => handleFavoriteToggle(e, property.id)}>
                                                    <img src={favoriteProperties.includes(property.id) ? "/assets/img/icons/heart2.svg" : "/assets/img/icons/heart1.svg"} alt="favorite" className={favoriteProperties.includes(property.id) ? "heart2" : "heart1"} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {renderPagination()}
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                        <div className="row">
                            {currentProperties.map((property) => (
                                <div key={property.id} className="col-lg-12 col-md-12">
                                    <div className="property-boxarea">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="img1 image-anime">{renderPropertyImages(property)}</div>
                                                <div className="category-list">
                                                    <ul>
                                                        <li>
                                                            <Link href="#">{property.type}</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">{property.status}</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="content-area">
                                                    <Link href={`/property-details-v${property.linkProperty}`}>{property.keyword}</Link>
                                                    <div className="space18" />
                                                    <p>
                                                        {property.address}, {property.city}, {property.state}
                                                    </p>
                                                    <div className="space24" />
                                                    <ul>
                                                        <li>
                                                            <Link href="#">
                                                                <img src="/assets/img/icons/bed1.svg" alt="bed" />x{property.bedrooms}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <img src="/assets/img/icons/bath1.svg" alt="bath" />x{property.bathrooms}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <img src="/assets/img/icons/sqare1.svg" alt="size" />
                                                                {property.minSize}-{property.maxSize} sq
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <div className="btn-area">
                                                        <Link href="#" className="nm-btn">
                                                            ${property.minPrice.toLocaleString()}
                                                            {property.status === "For Rent" && <small>/month</small>}
                                                        </Link>
                                                        <Link href="#" className="heart" onClick={(e) => handleFavoriteToggle(e, property.id)}>
                                                            <img src={favoriteProperties.includes(property.id) ? "/assets/img/icons/heart2.svg" : "/assets/img/icons/heart1.svg"} alt="favorite" className={favoriteProperties.includes(property.id) ? "heart2" : "heart1"} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {renderPagination()}
                    </div>
                </div>
            </div>
        </>
    );
}
