"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, ThumbsUp, CalendarDays, PhoneCall } from "lucide-react";

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

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-1 mb-4 lg:mb-0">
          <div className="relative mr-4 shrink-0">
            <div className="w-20 h-20 relative rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              {doctor.profileImage ? (
                <Image
                  src={doctor.profileImage}
                  alt={doctor.name}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  priority
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                </div>
              )}
            </div>

            <Badge
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 rounded-full px-1 py-0.5 text-xs font-medium ${
                doctor.isClinic
                  ? "bg-gray-600 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {doctor.batch}
            </Badge>
          </div>

          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-medium text-blue-600 leading-tight">
              {doctor.name}
            </h3>
            <p className="text-sm text-gray-700">{doctor.specialization}</p>
            <p className="text-sm text-gray-500">{doctor.experience}</p>
            <p className="text-sm text-gray-700">{doctor.location}</p>

            <div className="flex items-center text-sm text-gray-700">
              <IndianRupee className="inline h-3 w-3 mr-0.5" />
              <span>{doctor.fees} Consultation Fees</span>
              {!doctor.isClinic && (
                <span className="text-gray-500 ml-1">at clinic</span>
              )}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1 bg-green-600 text-white font-semibold text-xs px-2 py-1 rounded-sm">
                <ThumbsUp className="w-3 h-3" fill="white" />
                <span>{doctor.rating}%</span>
              </div>
              <span className="text-sm text-gray-700 font-medium">
                {doctor.stories} Patient Stories
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:justify-end lg:items-end lg:flex-shrink-0 space-y-2">
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
            <CalendarDays className="h-4 w-4" />
            <span>Available Today</span>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-md transition-colors w-full lg:w-auto">
            Book Clinic Visit
          </button>

          {!doctor.isClinic && (
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition-colors text-sm flex items-center justify-center gap-2">
              <PhoneCall className="w-4 h-4 text-green-600" />
              <span>Contact Clinic</span>
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}
