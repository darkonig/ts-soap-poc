import { Vouchers } from "./vouchers";

/**
 * Bundle
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface Bundle {
    /** s:int */
    YearId?: string;
    /** Vouchers */
    Vouchers?: Vouchers;
    /** s:int */
    Sort?: string;
    /** s:string */
    Name?: string;
    /** s:boolean */
    BundleDirectAccounting?: string;
}
