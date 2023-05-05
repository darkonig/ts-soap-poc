
/**
 * AccountDataErrors
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface AccountDataErrors {
    /** s:int */
    AccountId?: string;
    /** s:short */
    AccountNo?: string;
    /** s:string */
    AccountName?: string;
    /** s:int */
    AccountTax?: string;
    /** s:int */
    TaxNo?: string;
    /** ErrorType|s:string|Ok,AccountDontExist,NameDontMatch */
    Error?: string;
}
