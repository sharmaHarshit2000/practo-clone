"use client";

import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";

interface SearchBarProps {
  onSearch?: (location: string, specialization: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [location, setLocation] = useState("Jp Nagar");
  const [specialization, setSpecialization] = useState("Dermatologist");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(location.trim(), specialization.trim());
    }
  };

  return (
    <div className="bg-white px-4 py-3 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-3"
        >
          <div className="flex flex-1 flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors whitespace-nowrap"
            >
              Find
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
