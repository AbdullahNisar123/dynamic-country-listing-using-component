import Link from "next/link";
import "../../../Style/globals.css";
import NavBar from "@/components/NavBar";
import Country from "@/components/Country";
export default function countryname({ params }: { params: {country_name: string}}) {
  const countries: {
    name: string;
    population: number;
    capital: string;
  }[] = [
    { name: "korea", population: 51717590, capital: "Seoul" },
    { name: "Japan", population: 123998000, capital: "Tokyo" },
    { name: "India", population: 1380004385, capital: "New Delhi" },
    { name: "Pakistan", population: 225799153, capital: "Islamabad" },
    { name: "Turkey", population: 84339067, capital: "Ankara" },
  ];
  function findcountry(country_url: string) {
    return countries.find(
      (country) => country.name.toLowerCase() == country_url.toLowerCase()
    );
  }
  const result = findcountry(params.country_name);
  return (
    <div>
      <NavBar />
      <Country countryinfo={result} url = {params.country_name}/>
      <div className="btn-div">
        <Link href="/country">Back to Countries</Link>
      </div>
    </div>
  );
}
