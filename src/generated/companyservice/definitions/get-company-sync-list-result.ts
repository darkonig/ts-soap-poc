import { Items } from "./items";
import { Context } from "./context";

/**
 * GetCompanySyncListResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface GetCompanySyncListResult {
    /** s:long */
    CurrentPage?: string;
    /** s:long */
    TotalPages?: string;
    /** s:long */
    TotalItems?: string;
    /** s:long */
    ItemsPerPage?: string;
    /** Items */
    Items?: Items;
    /** Context */
    Context?: Context;
}
