import { Home1 } from "./home-1";

/**
 * EmailAddresses
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface EmailAddresses {
    /** Home */
    Home?: Home1;
    /** Invoice */
    Invoice?: Home1;
    /** Primary */
    Primary?: Home1;
    /** Work */
    Work?: Home1;
    /** Alternative */
    Alternative?: Home1;
}
