import { AccountDataErrors } from "./account-data-errors";

/**
 * CheckAccountNoResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface CheckAccountNoResult {
    /** AccountDataErrors[] */
    AccountDataErrors?: Array<AccountDataErrors>;
}
