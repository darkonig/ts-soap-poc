import { UserDefinedDimensions } from "./user-defined-dimensions";
import { Links } from "./links";

/**
 * Entry
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface Entry {
    /** s:decimal */
    SequenceId?: string;
    /** s:int */
    CustomerId?: string;
    /** s:int */
    AccountId?: string;
    /** s:dateTime */
    Date?: string;
    /** s:dateTime */
    DueDate?: string;
    /** s:decimal */
    Amount?: string;
    /** s:string */
    CurrencyId?: string;
    /** s:decimal */
    CurrencyRate?: string;
    /** s:short */
    CurrencyUnit?: string;
    /** s:int */
    DepartmentId?: string;
    /** s:int */
    ProjectId?: string;
    /** UserDefinedDimensions */
    UserDefinedDimensions?: UserDefinedDimensions;
    /** s:string */
    InvoiceReferenceNo?: string;
    /** s:string */
    InvoiceOcr?: string;
    /** s:string */
    TaxNo?: string;
    /** s:short */
    Period?: string;
    /** s:string */
    Comment?: string;
    /** s:int */
    StampNo?: string;
    /** s:string */
    BankAccountNo?: string;
    /** guid|s:string|pattern */
    LinkId?: string;
    /** Links */
    Links?: Links;
}
