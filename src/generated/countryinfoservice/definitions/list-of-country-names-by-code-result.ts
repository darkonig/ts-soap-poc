import { TCountryCodeAndName } from "./t-country-code-and-name";

/**
 * ListOfCountryNamesByCodeResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ListOfCountryNamesByCodeResult {
    /** tCountryCodeAndName[] */
    tCountryCodeAndName?: Array<TCountryCodeAndName>;
}
