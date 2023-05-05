import { CountryInfoServiceSoap } from "../ports/country-info-service-soap";
import { CountryInfoServiceSoap12 } from "../ports/country-info-service-soap-12";

export interface CountryInfoService {
    readonly CountryInfoServiceSoap: CountryInfoServiceSoap;
    readonly CountryInfoServiceSoap12: CountryInfoServiceSoap12;
}
