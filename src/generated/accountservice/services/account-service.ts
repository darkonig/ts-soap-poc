import { AccountServiceSoap } from "../ports/account-service-soap";
import { AccountServiceSoap12 } from "../ports/account-service-soap-12";

export interface AccountService {
    readonly AccountServiceSoap: AccountServiceSoap;
    readonly AccountServiceSoap12: AccountServiceSoap12;
}
