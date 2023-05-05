import { CompanyIds } from "./company-ids";

/**
 * searchParams
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface SearchParams {
    /** s:string */
    ExternalId?: string;
    /** s:int */
    CompanyId?: string;
    /** CompanyIds */
    CompanyIds?: CompanyIds;
    /** s:string */
    CompanyName?: string;
    /** s:dateTime */
    ChangedAfter?: string;
    /** s:string */
    CompanyEmail?: string;
    /** s:string */
    CompanyPhone?: string;
    /** s:string */
    OrganizationNumber?: string;
}
