import { Bundles } from "./bundles";

/**
 * bundlelist
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface Bundlelist {
    /** Bundles */
    Bundles?: Bundles;
    /** s:boolean */
    AllowDifference?: string;
    /** s:boolean */
    DirectLedger?: string;
    /** s:unsignedByte */
    SaveOption?: string;
    /** s:int */
    DefaultCustomerId?: string;
}
