import { Members } from "./members";
import { GetCrmGroupsResult } from "./get-crm-groups-result";

/**
 * Group
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface Group {
    /** s:int */
    Id?: string;
    /** s:string */
    Name?: string;
    /** s:int */
    Type?: string;
    /** Members */
    Members?: Members;
    /** Children */
    Children?: GetCrmGroupsResult;
}
