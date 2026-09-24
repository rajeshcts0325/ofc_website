"use client";

import { addPerPage, addSort } from "@/features/filter/filterSlice";
import { toggleFavoriteProperty } from "@/features/property/propertySlice";
import type { RootState } from "@/features/store";
import Link from "next/link";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
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
  agent?: {
    name: string;
    image: string;
  };
}

export default function PropertyList({ view }: any) {
  const dispatch = useDispatch();
  const { properties, favoriteProperties } = useSelector(
    (state: RootState) => state.property,
  );
  const { propertyFilter } = useSelector((state: RootState) => state.filter);

  const [filteredProperties, setFilteredProperties] = useState<
    PropertyListItem[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState("default");
  const [viewMode, setViewMode] = useState(view); // "grid" or "list"

  useEffect(() => {
    let result = [...properties] as PropertyListItem[];

    if (propertyFilter.keyword) {
      const keyword = propertyFilter.keyword.toLowerCase();
      result = result.filter(
        (property) =>
          property.keyword.toLowerCase().includes(keyword) ||
          property.address.toLowerCase().includes(keyword),
      );
    }

    if (propertyFilter.city) {
      result = result.filter(
        (property) =>
          property.city.toLowerCase() ===
          propertyFilter.city.replace(/-/g, " ").toLowerCase(),
      );
    }

    if (propertyFilter.state) {
      result = result.filter(
        (property) =>
          property.state.toLowerCase() ===
          propertyFilter.state.replace(/-/g, " ").toLowerCase(),
      );
    }

    if (propertyFilter.status) {
      result = result.filter(
        (property) =>
          property.status.toLowerCase() ===
          propertyFilter.status.replace(/-/g, " ").toLowerCase(),
      );
    }

    if (propertyFilter.bedrooms.min > 0) {
      result = result.filter(
        (property) => property.bedrooms >= propertyFilter.bedrooms.min,
      );
    }

    if (propertyFilter.bathrooms.min > 0) {
      result = result.filter(
        (property) => property.bathrooms >= propertyFilter.bathrooms.min,
      );
    }

    if (propertyFilter.garages.min > 0) {
      result = result.filter(
        (property) => property.garages >= propertyFilter.garages.min,
      );
    }

    if (propertyFilter.rooms.min > 0) {
      result = result.filter(
        (property) => property.rooms >= propertyFilter.rooms.min,
      );
    }

    result = result.filter(
      (property) =>
        property.minPrice >= propertyFilter.price.min &&
        property.maxPrice <= propertyFilter.price.max,
    );

    result = result.filter(
      (property) =>
        property.minSize >= propertyFilter.size.min &&
        property.maxSize <= propertyFilter.size.max,
    );

    if (propertyFilter.amenities.length > 0) {
      result = result.filter((property) =>
        propertyFilter.amenities.every((amenity) =>
          property.amenities.some(
            (a) => a.toLowerCase() === amenity.replace(/-/g, " ").toLowerCase(),
          ),
        ),
      );
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
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty,
  );
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = Math.min(
      pageNumber * itemsPerPage,
      filteredProperties.length,
    );
    dispatch(addPerPage({ start: startIndex, end: endIndex }));
  };

  const handleFavoriteToggle = (e: React.MouseEvent, propertyId: number) => {
    e.preventDefault();
    dispatch(toggleFavoriteProperty(propertyId));
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setItemsPerPage(Number.parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
    dispatch(addSort(e.target.value));
  };

  const handleViewModeChange = useCallback((mode: string) => {
    setViewMode(mode);
  }, []);

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
        gridTab.removeEventListener("click", () =>
          handleViewModeChange("grid"),
        );
        listTab.removeEventListener("click", () =>
          handleViewModeChange("list"),
        );
      }
    };
  }, [handleViewModeChange]);

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
                <img
                  src={
                    image ||
                    "/assets/img/all-images/properties/property-img1.png"
                  }
                  alt={property.keyword}
                />
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination" />
        </Swiper>
      );
    } else {
      return (
        <img
          src="/assets/img/all-images/properties/property-img1.png"
          alt={property.keyword}
        />
      );
    }
  };

  // Function to render pagination
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="pagination-area">
        <nav aria-label="Page navigation">
          <ul className="pagination">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                </svg>
              </Link>
            </li>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNumber;
              if (totalPages <= 5) {
                pageNumber = i + 1;
              } else if (currentPage <= 3) {
                pageNumber = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + i;
              } else {
                pageNumber = currentPage - 2 + i;
              }
              return (
                <li
                  key={pageNumber}
                  className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
                >
                  <Link
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(pageNumber);
                    }}
                  >
                    {pageNumber}
                  </Link>
                </li>
              );
            })}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <li className="page-item">
                <Link
                  className="page-link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  ....
                </Link>
              </li>
            )}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <li className="page-item">
                <Link
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(totalPages);
                  }}
                >
                  {totalPages}
                </Link>
              </li>
            )}
            <li
              className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
            >
              <Link
                className="page-link"
                href="#"
                aria-label="Next"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(Math.min(totalPages, currentPage + 1));
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  // Function to render a grid item
  const renderGridItem = (property: PropertyListItem) => (
    <div className="col-md-6" key={property.id}>
      <div className="property-boxarea">
        <div className="img1 image-anime">{renderPropertyImages(property)}</div>
        <div className="category-list">
          <ul>
            {property.label && (
              <li>
                <Link href="#">{property.label}</Link>
              </li>
            )}
            <li>
              <Link href="#">{property.status}</Link>
            </li>
          </ul>
        </div>
        <div className="content-area">
          <Link href={`/property-details-v${property.linkProperty}`}>
            {property.keyword}
          </Link>
          <div className="space18" />
          <p>
            {property.address}, {property.city}, {property.state}
          </p>
          <div className="space24" />
          <ul>
            <li>
              <Link href="#">
                <img src="/assets/img/icons/bed1.svg" alt="bed" />x
                {property.bedrooms}
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src="/assets/img/icons/bath1.svg" alt="bath" />x
                {property.bathrooms}
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src="/assets/img/icons/sqare1.svg" alt="size" />
                {property.minSize} sq
              </Link>
            </li>
          </ul>
          <div className="btn-area">
            <Link href="#" className="nm-btn">
              ${property.minPrice.toLocaleString()}
            </Link>
            <Link
              href="#"
              className="heart"
              onClick={(e) => handleFavoriteToggle(e, property.id)}
            >
              <img
                src="/assets/img/icons/heart1.svg"
                alt="favorite"
                className={`heart1 ${favoriteProperties.includes(property.id) ? "d-none" : ""}`}
              />
              <img
                src="/assets/img/icons/heart2.svg"
                alt="favorite"
                className={`heart2 ${favoriteProperties.includes(property.id) ? "" : ""}`}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // Function to render a list item
  const renderListItem = (property: PropertyListItem) => (
    <div className="col-lg-12" key={property.id}>
      <div className="property-boxarea2">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="img1 image-anime">
              {renderPropertyImages(property)}
              <button
                className={`favorite-btn ${favoriteProperties.includes(property.id) ? "active" : ""}`}
                onClick={(e) => handleFavoriteToggle(e, property.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="category-list">
              <ul>
                {property.label && (
                  <li>
                    <Link href="#">{property.label}</Link>
                  </li>
                )}
                <li>
                  <Link href="#">{property.status}</Link>
                </li>
              </ul>
            </div>
            <div className="content-area">
              <Link href={`/property-details-v${property.linkProperty}`}>
                {property.keyword}
              </Link>
              <div className="space18" />
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                </svg>{" "}
                {property.address}, {property.city}, {property.state}
              </p>
              <div className="space24" />
              <ul>
                <li>
                  <Link href="#">
                    <img src="/assets/img/icons/bed1.svg" alt="bed" />x
                    {property.bedrooms}
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="/assets/img/icons/bath1.svg" alt="bath" />x
                    {property.bathrooms}
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="/assets/img/icons/sqare1.svg" alt="size" />
                    {property.minSize} sq
                  </Link>
                </li>
              </ul>
              <div className="btn-area">
                <div className="name-area">
                  {property.agent && (
                    <>
                      <div className="img">
                        <img
                          src={
                            property.agent.image ||
                            "/assets/img/all-images/properties/property-img7.png"
                          }
                          alt="agent"
                        />
                      </div>
                      <div className="text">
                        <Link href="#">{property.agent.name}</Link>
                      </div>
                    </>
                  )}
                </div>
                <Link href="#" className="nm-btn">
                  ${property.minPrice.toLocaleString()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="heading1 mb-3">
        <h3>Properties ({filteredProperties.length})</h3>
        <div className="tabs-btn">
          <ul
            className="nav nav-pills d-none d-lg-block"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${viewMode === "grid" ? "active" : ""}`}
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected={viewMode === "grid"}
                onClick={() => handleViewModeChange("grid")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z" />
                </svg>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${viewMode === "list" ? "active" : ""}`}
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected={viewMode === "list"}
                onClick={() => handleViewModeChange("list")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" />
                </svg>
              </button>
            </li>
          </ul>
          <div className="d-flex">
            <div className="filter-group me-3">
              <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
                <option value="6">Show:(6)</option>
                <option value="12">Show:(12)</option>
                <option value="24">Show:(24)</option>
                <option value="48">Show:(48)</option>
              </select>
            </div>
            <div className="filter-group">
              <select onChange={handleSortOrderChange} value={sortOrder}>
                <option value="default">Sort by (Default)</option>
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade ${viewMode === "grid" ? "show active" : ""}`}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex={0}
        >
          <div className="row">
            {currentProperties.length > 0 ? (
              <>
                {currentProperties.map((property) => renderGridItem(property))}
                <div className="col-lg-12">{renderPagination()}</div>
              </>
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No properties found matching your criteria</h4>
                <p>Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`tab-pane fade ${viewMode === "list" ? "show active" : ""}`}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex={0}
        >
          <div className="row">
            {currentProperties.length > 0 ? (
              <>
                {currentProperties.map((property) => renderListItem(property))}
                <div className="col-lg-12">{renderPagination()}</div>
              </>
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No properties found matching your criteria</h4>
                <p>Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
