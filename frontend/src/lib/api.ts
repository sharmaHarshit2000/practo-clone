export async function fetchDoctors(search: string, location: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/doctors?search=${encodeURIComponent(search)}&location=${encodeURIComponent(location)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch doctors");
  }

  const data = await res.json();
  return data.doctors || [];  
}
