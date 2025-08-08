import React, { Suspense } from "react";
import DoctorsPageClient from "./DoctorsPageClient";

export default function DoctorsPage() {
  return (
    <Suspense fallback={<div>Loading doctors page...</div>}>
      <DoctorsPageClient />
    </Suspense>
  );
}
