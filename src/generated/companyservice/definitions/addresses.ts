import { Post } from "./post";

/**
 * Addresses
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface Addresses {
    /** Post */
    Post?: Post;
    /** Delivery */
    Delivery?: Post;
    /** Visit */
    Visit?: Post;
    /** Invoice */
    Invoice?: Post;
}
