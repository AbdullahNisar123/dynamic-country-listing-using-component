import "@/Style/globals.css"

interface CountryInfo {
    name: string;
    population: number;
    capital: string;
}

interface CountryDetailsProps {
    countryinfo? : CountryInfo;
    url: string;
}
export default function CountryDetail (data:CountryDetailsProps){
    return(
        <div>
             {
                data.countryinfo ? (
                    <>
                    <h1 className="c-name">Country:{data.countryinfo.name}</h1>
                    <p className="c-text">Population:{data.countryinfo.population}</p>
                    <p className="c-text">Capital:{data.countryinfo.capital}</p>
                    
                    </>
                ):(
                    <h1>{data.url} Not Found</h1>
                )
            }
        </div>
        )
}