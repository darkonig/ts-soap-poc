import { ListOfContinentsByName } from "../definitions/list-of-continents-by-name";
import { ListOfContinentsByNameResponse } from "../definitions/list-of-continents-by-name-response";
import { ListOfContinentsByCode } from "../definitions/list-of-continents-by-code";
import { ListOfContinentsByCodeResponse } from "../definitions/list-of-continents-by-code-response";
import { ListOfCurrenciesByName } from "../definitions/list-of-currencies-by-name";
import { ListOfCurrenciesByNameResponse } from "../definitions/list-of-currencies-by-name-response";
import { ListOfCurrenciesByCode } from "../definitions/list-of-currencies-by-code";
import { ListOfCurrenciesByCodeResponse } from "../definitions/list-of-currencies-by-code-response";
import { CurrencyName } from "../definitions/currency-name";
import { CurrencyNameResponse } from "../definitions/currency-name-response";
import { ListOfCountryNamesByCode } from "../definitions/list-of-country-names-by-code";
import { ListOfCountryNamesByCodeResponse } from "../definitions/list-of-country-names-by-code-response";
import { ListOfCountryNamesByName } from "../definitions/list-of-country-names-by-name";
import { ListOfCountryNamesByNameResponse } from "../definitions/list-of-country-names-by-name-response";
import { ListOfCountryNamesGroupedByContinent } from "../definitions/list-of-country-names-grouped-by-continent";
import { ListOfCountryNamesGroupedByContinentResponse } from "../definitions/list-of-country-names-grouped-by-continent-response";
import { CountryName } from "../definitions/country-name";
import { CountryNameResponse } from "../definitions/country-name-response";
import { CountryIsoCode1 } from "../definitions/country-iso-code-1";
import { CountryIsoCodeResponse1 } from "../definitions/country-iso-code-response-1";
import { CapitalCity } from "../definitions/capital-city";
import { CapitalCityResponse } from "../definitions/capital-city-response";
import { CountryCurrency } from "../definitions/country-currency";
import { CountryCurrencyResponse } from "../definitions/country-currency-response";
import { CountryFlag } from "../definitions/country-flag";
import { CountryFlagResponse } from "../definitions/country-flag-response";
import { CountryIntPhoneCode } from "../definitions/country-int-phone-code";
import { CountryIntPhoneCodeResponse } from "../definitions/country-int-phone-code-response";
import { FullCountryInfo } from "../definitions/full-country-info";
import { FullCountryInfoResponse } from "../definitions/full-country-info-response";
import { FullCountryInfoAllCountries } from "../definitions/full-country-info-all-countries";
import { FullCountryInfoAllCountriesResponse } from "../definitions/full-country-info-all-countries-response";
import { CountriesUsingCurrency } from "../definitions/countries-using-currency";
import { CountriesUsingCurrencyResponse } from "../definitions/countries-using-currency-response";
import { ListOfLanguagesByName } from "../definitions/list-of-languages-by-name";
import { ListOfLanguagesByNameResponse } from "../definitions/list-of-languages-by-name-response";
import { ListOfLanguagesByCode } from "../definitions/list-of-languages-by-code";
import { ListOfLanguagesByCodeResponse } from "../definitions/list-of-languages-by-code-response";
import { LanguageName } from "../definitions/language-name";
import { LanguageNameResponse } from "../definitions/language-name-response";
import { LanguageIsoCode1 } from "../definitions/language-iso-code-1";
import { LanguageIsoCodeResponse1 } from "../definitions/language-iso-code-response-1";

export interface CountryInfoServiceSoap12 {
    ListOfContinentsByName(listOfContinentsByName: ListOfContinentsByName, callback: (err: any, result: ListOfContinentsByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfContinentsByCode(listOfContinentsByCode: ListOfContinentsByCode, callback: (err: any, result: ListOfContinentsByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCurrenciesByName(listOfCurrenciesByName: ListOfCurrenciesByName, callback: (err: any, result: ListOfCurrenciesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCurrenciesByCode(listOfCurrenciesByCode: ListOfCurrenciesByCode, callback: (err: any, result: ListOfCurrenciesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CurrencyName(currencyName: CurrencyName, callback: (err: any, result: CurrencyNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCountryNamesByCode(listOfCountryNamesByCode: ListOfCountryNamesByCode, callback: (err: any, result: ListOfCountryNamesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCountryNamesByName(listOfCountryNamesByName: ListOfCountryNamesByName, callback: (err: any, result: ListOfCountryNamesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfCountryNamesGroupedByContinent(listOfCountryNamesGroupedByContinent: ListOfCountryNamesGroupedByContinent, callback: (err: any, result: ListOfCountryNamesGroupedByContinentResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryName(countryName: CountryName, callback: (err: any, result: CountryNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryISOCode(countryIsoCode: CountryIsoCode1, callback: (err: any, result: CountryIsoCodeResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CapitalCity(capitalCity: CapitalCity, callback: (err: any, result: CapitalCityResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryCurrency(countryCurrency: CountryCurrency, callback: (err: any, result: CountryCurrencyResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryFlag(countryFlag: CountryFlag, callback: (err: any, result: CountryFlagResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountryIntPhoneCode(countryIntPhoneCode: CountryIntPhoneCode, callback: (err: any, result: CountryIntPhoneCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    FullCountryInfo(fullCountryInfo: FullCountryInfo, callback: (err: any, result: FullCountryInfoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    FullCountryInfoAllCountries(fullCountryInfoAllCountries: FullCountryInfoAllCountries, callback: (err: any, result: FullCountryInfoAllCountriesResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CountriesUsingCurrency(countriesUsingCurrency: CountriesUsingCurrency, callback: (err: any, result: CountriesUsingCurrencyResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfLanguagesByName(listOfLanguagesByName: ListOfLanguagesByName, callback: (err: any, result: ListOfLanguagesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    ListOfLanguagesByCode(listOfLanguagesByCode: ListOfLanguagesByCode, callback: (err: any, result: ListOfLanguagesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    LanguageName(languageName: LanguageName, callback: (err: any, result: LanguageNameResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    LanguageISOCode(languageIsoCode: LanguageIsoCode1, callback: (err: any, result: LanguageIsoCodeResponse1, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
