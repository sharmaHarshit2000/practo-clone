import React from "react";
import { ChevronDown } from "lucide-react";

export default function App() {
  return <FilterBar />;
}

function FilterBar() {
  return (
    <div className="bg-blue-700 text-white px-4 py-3 font-sans">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-2 sm:gap-y-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 justify-center sm:justify-start">
            {["Gender", "Patient Stories", "Experience", "All Filters"].map(
              (filter) => (
                <div
                  key={filter}
                  className="flex items-center gap-1 cursor-pointer rounded px-3 py-2 bg-blue-600 hover:bg-blue-600 transition-colors duration-200 text-sm whitespace-nowrap" // Added whitespace-nowrap
                >
                  <span>{filter}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              )
            )}
          </div>

          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <span className="text-sm">Sort By</span>
            <div className="flex items-center gap-1 cursor-pointer rounded px-3 py-2 bg-blue-600 hover:bg-blue-600 transition-colors duration-200 text-sm whitespace-nowrap">
              <span>Relevance</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
