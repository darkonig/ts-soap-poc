import { TCurrency } from "./t-currency";

/**
 * ListOfCurrenciesByNameResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ListOfCurrenciesByNameResult {
    /** tCurrency[] */
    tCurrency?: Array<TCurrency>;
}
