
/**
 * DifferenceOptions
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface DifferenceOptions {
    /** s:decimal */
    Threshold?: string;
    /** s:int */
    AccountId?: string;
    /** s:dateTime */
    DueDate?: string;
    /** s:dateTime */
    Date?: string;
    /** s:int */
    CurrencyId?: string;
    /** s:short */
    CurrencyUnit?: string;
    /** s:decimal */
    CurrencyRate?: string;
    /** s:string */
    Comment?: string;
    /** s:int */
    CustomerId?: string;
    /** s:short */
    Period?: string;
    /** guid|s:string|pattern */
    LinkId?: string;
    /** s:string */
    InvoiceOcr?: string;
    /** s:int */
    DepartmentId?: string;
    /** s:int */
    ProjectId?: string;
    /** s:string */
    BankAccountNo?: string;
}
