import { useEffect, useState } from "react";
import { Listings } from "./Listings";

export function HomePage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://my.cms.com/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!listings.length) return <i>No data</i>;

  return <Listings listings={listings} />;
}
