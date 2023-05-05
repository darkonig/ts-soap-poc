import { TContinent } from "./t-continent";
import { ListOfCountryNamesByCodeResult } from "./list-of-country-names-by-code-result";

/**
 * tCountryCodeAndNameGroupedByContinent
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface TCountryCodeAndNameGroupedByContinent {
    /** Continent */
    Continent?: TContinent;
    /** CountryCodeAndNames */
    CountryCodeAndNames?: ListOfCountryNamesByCodeResult;
}
