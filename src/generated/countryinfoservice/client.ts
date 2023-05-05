import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { ListOfContinentsByName } from "./definitions/list-of-continents-by-name";
import { ListOfContinentsByNameResponse } from "./definitions/list-of-continents-by-name-response";
import { ListOfContinentsByCode } from "./definitions/list-of-continents-by-code";
import { ListOfContinentsByCodeResponse } from "./definitions/list-of-continents-by-code-response";
import { ListOfCurrenciesByName } from "./definitions/list-of-currencies-by-name";
import { ListOfCurrenciesByNameResponse } from "./definitions/list-of-currencies-by-name-response";
import { ListOfCurrenciesByCode } from "./definitions/list-of-currencies-by-code";
import { ListOfCurrenciesByCodeResponse } from "./definitions/list-of-currencies-by-code-response";
import { CurrencyName } from "./definitions/currency-name";
import { CurrencyNameResponse } from "./definitions/currency-name-response";
import { ListOfCountryNamesByCode } from "./definitions/list-of-country-names-by-code";
import { ListOfCountryNamesByCodeResponse } from "./definitions/list-of-country-names-by-code-response";
import { ListOfCountryNamesByName } from "./definitions/list-of-country-names-by-name";
import { ListOfCountryNamesByNameResponse } from "./definitions/list-of-country-names-by-name-response";
import { ListOfCountryNamesGroupedByContinent } from "./definitions/list-of-country-names-grouped-by-continent";
import { ListOfCountryNamesGroupedByContinentResponse } from "./definitions/list-of-country-names-grouped-by-continent-response";
import { CountryName } from "./definitions/country-name";
import { CountryNameResponse } from "./definitions/country-name-response";
import { CountryIsoCode } from "./definitions/country-iso-code";
import { CountryIsoCodeResponse } from "./definitions/country-iso-code-response";
import { CapitalCity } from "./definitions/capital-city";
import { CapitalCityResponse } from "./definitions/capital-city-response";
import { CountryCurrency } from "./definitions/country-currency";
import { CountryCurrencyResponse } from "./definitions/country-currency-response";
import { CountryFlag } from "./definitions/country-flag";
import { CountryFlagResponse } from "./definitions/country-flag-response";
import { CountryIntPhoneCode } from "./definitions/country-int-phone-code";
import { CountryIntPhoneCodeResponse } from "./definitions/country-int-phone-code-response";
import { FullCountryInfo } from "./definitions/full-country-info";
import { FullCountryInfoResponse } from "./definitions/full-country-info-response";
import { FullCountryInfoAllCountries } from "./definitions/full-country-info-all-countries";
import { FullCountryInfoAllCountriesResponse } from "./definitions/full-country-info-all-countries-response";
import { CountriesUsingCurrency } from "./definitions/countries-using-currency";
import { CountriesUsingCurrencyResponse } from "./definitions/countries-using-currency-response";
import { ListOfLanguagesByName } from "./definitions/list-of-languages-by-name";
import { ListOfLanguagesByNameResponse } from "./definitions/list-of-languages-by-name-response";
import { ListOfLanguagesByCode } from "./definitions/list-of-languages-by-code";
import { ListOfLanguagesByCodeResponse } from "./definitions/list-of-languages-by-code-response";
import { LanguageName } from "./definitions/language-name";
import { LanguageNameResponse } from "./definitions/language-name-response";
import { LanguageIsoCode } from "./definitions/language-iso-code";
import { LanguageIsoCodeResponse } from "./definitions/language-iso-code-response";
import { CountryInfoService } from "./services/country-info-service";

export interface CountryInfoServiceClient extends SoapClient {
    CountryInfoService: CountryInfoService;
    ListOfContinentsByNameAsync(listOfContinentsByName: ListOfContinentsByName): Promise<[result: ListOfContinentsByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ListOfContinentsByCodeAsync(listOfContinentsByCode: ListOfContinentsByCode): Promise<[result: ListOfContinentsByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ListOfCurrenciesByNameAsync(listOfCurrenciesByName: ListOfCurrenciesByName): Promise<[result: ListOfCurrenciesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ListOfCurrenciesByCodeAsync(listOfCurrenciesByCode: ListOfCurrenciesByCode): Promise<[result: ListOfCurrenciesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CurrencyNameAsync(currencyName: CurrencyName): Promise<[result: CurrencyNameResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ListOfCountryNamesByCodeAsync(listOfCountryNamesByCode: ListOfCountryNamesByCode): Promise<[result: ListOfCountryNamesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ListOfCountryNamesByNameAsync(listOfCountryNamesByName: ListOfCountryNamesByName): Promise<[result: ListOfCountryNamesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ListOfCountryNamesGroupedByContinentAsync(listOfCountryNamesGroupedByContinent: ListOfCountryNamesGroupedByContinent): Promise<[result: ListOfCountryNamesGroupedByContinentResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CountryNameAsync(countryName: CountryName): Promise<[result: CountryNameResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CountryISOCodeAsync(countryIsoCode: CountryIsoCode): Promise<[result: CountryIsoCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CapitalCityAsync(capitalCity: CapitalCity): Promise<[result: CapitalCityResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CountryCurrencyAsync(countryCurrency: CountryCurrency): Promise<[result: CountryCurrencyResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CountryFlagAsync(countryFlag: CountryFlag): Promise<[result: CountryFlagResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CountryIntPhoneCodeAsync(countryIntPhoneCode: CountryIntPhoneCode): Promise<[result: CountryIntPhoneCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    FullCountryInfoAsync(fullCountryInfo: FullCountryInfo): Promise<[result: FullCountryInfoResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    FullCountryInfoAllCountriesAsync(fullCountryInfoAllCountries: FullCountryInfoAllCountries): Promise<[result: FullCountryInfoAllCountriesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CountriesUsingCurrencyAsync(countriesUsingCurrency: CountriesUsingCurrency): Promise<[result: CountriesUsingCurrencyResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ListOfLanguagesByNameAsync(listOfLanguagesByName: ListOfLanguagesByName): Promise<[result: ListOfLanguagesByNameResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    ListOfLanguagesByCodeAsync(listOfLanguagesByCode: ListOfLanguagesByCode): Promise<[result: ListOfLanguagesByCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    LanguageNameAsync(languageName: LanguageName): Promise<[result: LanguageNameResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    LanguageISOCodeAsync(languageIsoCode: LanguageIsoCode): Promise<[result: LanguageIsoCodeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CountryInfoServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CountryInfoServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
