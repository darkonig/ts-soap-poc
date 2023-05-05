import { CompanyServiceSoap } from "../ports/company-service-soap";
import { CompanyServiceSoap12 } from "../ports/company-service-soap-12";

export interface CompanyService {
    readonly CompanyServiceSoap: CompanyServiceSoap;
    readonly CompanyServiceSoap12: CompanyServiceSoap12;
}
