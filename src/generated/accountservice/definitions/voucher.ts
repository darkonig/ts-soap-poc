import { Entries } from "./entries";
import { DifferenceOptions } from "./difference-options";

/**
 * Voucher
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface Voucher {
    /** s:int */
    TransactionNo?: string;
    /** Entries */
    Entries?: Entries;
    /** s:int */
    Sort?: string;
    /** DifferenceOptions */
    DifferenceOptions?: DifferenceOptions;
}
