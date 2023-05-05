import { PhoneNumbers } from "./phone-numbers";
import { EmailAddresses } from "./email-addresses";

/**
 * Relation
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface Relation {
    /** s:int */
    ContactId?: string;
    /** s:int */
    CompanyId?: string;
    /** s:string */
    FirstName?: string;
    /** s:string */
    LastName?: string;
    /** s:string */
    Role?: string;
    /** s:int */
    RoleId?: string;
    /** PhoneNumbers */
    PhoneNumbers?: PhoneNumbers;
    /** EmailAddresses */
    EmailAddresses?: EmailAddresses;
    /** s:string */
    Fax?: string;
}
