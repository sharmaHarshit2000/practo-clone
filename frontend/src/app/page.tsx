"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { fetchDoctors } from "@/lib/api"; 
import {
  Search,
  MapPin,
  Stethoscope,
  ShoppingCart,
  FileText,
  Calendar,
  BookOpen,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const trimmedSearch = searchTerm.trim();
    const trimmedLocation = location.trim();

    if (!trimmedSearch && !trimmedLocation) return;

    try {
      setLoading(true);
      const results = await fetchDoctors(trimmedSearch, trimmedLocation);
      console.log("Doctors Found:", results);
      router.push(
        `/doctors?search=${encodeURIComponent(trimmedSearch)}&location=${encodeURIComponent(trimmedLocation)}`
      );
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="bg-gray-100 py-4"></div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Healthcare background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Your home for health</h1>
          <h2 className="text-2xl font-medium text-white mb-12">Find and Book</h2>

          {/* Search Section */}
          <div className="bg-white rounded shadow-lg p-6 mb-4 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Location Input */}
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full md:w-auto">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                  className="outline-none w-full"
                />
              </div>

              {/* Search Input */}
              <div className="flex-1 relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Search doctors, clinics, hospitals, etc."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {loading && <span className="text-sm text-gray-500">Searching...</span>}
            </div>
          </div>

          {/* Popular Searches */}
          <div className="max-w-4xl mx-auto px-6 text-left">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white">
              <span>Popular searches:</span>
              {[
                "Dermatologist",
                "Pathologist",
                "Pediatrician",
                "Gynecologist/Obstetrician",
                "Others",
              ].map((term) => (
                <button
                  key={term}
                  className="bg-opacity-20 text-white px-3 py-1 rounded-full hover:bg-opacity-30"
                  onClick={() => {
                    setSearchTerm(term);
                    handleSearch();
                  }}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Fixed Spacing */}
      <div className="bg-blue-950 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-center">
            {[
              { icon: Stethoscope, label: "Consult" },
              { icon: ShoppingCart, label: "Medicines" },
              { icon: FileText, label: "Records" },
              { icon: Calendar, label: "Book test" },
              { icon: BookOpen, label: "Articles" },
              { icon: Users, label: "Providers" }
            ].map((service) => (
              <div key={service.label} className="text-white p-2 cursor-pointer">
                <service.icon className="h-6 w-6 mx-auto mb-1" />
                <p className="text-xs">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}