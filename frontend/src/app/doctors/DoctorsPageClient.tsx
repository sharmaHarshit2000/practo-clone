"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import DoctorCard from "@/components/DoctorCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { CheckCircle2 } from "lucide-react";
import { fetchDoctors } from "@/lib/api";

interface Doctor {
  _id: string;
  profileImage?: string;
  name: string;
  specialization: string;
  experience: string;
  location: string;
  fees: number;
  isClinic: boolean;
  batch: string;
  rating: number;
  stories: number;
}

export default function DoctorsPageClient() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        setLoading(true);
        const results = await fetchDoctors(search, location);

        setDoctors(Array.isArray(results) ? results : []);
      } catch (error) {
        console.error("Error loading doctors:", error);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    loadDoctors();
  }, [search, location]);

  return (
    <div className="bg-white min-h-screen">
      <SearchBar />
      <FilterBar />

      <div className="container max-w-4xl py-6 mx-auto px-4">
        <div className="space-y-2 mb-6">
          <h1 className="text-xl font-bold text-gray-900">
            {loading
              ? "Loading doctors..."
              : `${doctors.length} ${search || "Doctors"} available in ${
                  location || "your area"
                }`}
          </h1>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>
              Book appointments with minimum wait-time & verified doctor details
            </span>
          </p>
        </div>

        <div className="space-y-4">
          {loading ? (
            <p>Loading...</p>
          ) : doctors.length > 0 ? (
            doctors.map((doctor: Doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          ) : (
            <p className="text-gray-500">No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
