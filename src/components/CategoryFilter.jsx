import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    return (
        <div className="mb-4">
            {/* <label htmlFor="category-filter">Filter by Category:</label> */}
            <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;
