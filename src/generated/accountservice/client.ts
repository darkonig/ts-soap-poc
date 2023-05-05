import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { SaveBundleList } from "./definitions/save-bundle-list";
import { SaveBundleListResponse } from "./definitions/save-bundle-list-response";
import { GetEntryId } from "./definitions/get-entry-id";
import { GetEntryIdResponse } from "./definitions/get-entry-id-response";
import { GetAccountList } from "./definitions/get-account-list";
import { GetAccountListResponse } from "./definitions/get-account-list-response";
import { GetTypeList } from "./definitions/get-type-list";
import { GetTypeListResponse } from "./definitions/get-type-list-response";
import { GetTaxCodeList } from "./definitions/get-tax-code-list";
import { GetTaxCodeListResponse } from "./definitions/get-tax-code-list-response";
import { CheckAccountNo } from "./definitions/check-account-no";
import { CheckAccountNoResponse } from "./definitions/check-account-no-response";
import { AccountService } from "./services/account-service";

export interface AccountServiceClient extends SoapClient {
    AccountService: AccountService;
    SaveBundleListAsync(saveBundleList: SaveBundleList): Promise<[result: SaveBundleListResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetEntryIdAsync(getEntryId: GetEntryId): Promise<[result: GetEntryIdResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetAccountListAsync(getAccountList: GetAccountList): Promise<[result: GetAccountListResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetTypeListAsync(getTypeList: GetTypeList): Promise<[result: GetTypeListResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetTaxCodeListAsync(getTaxCodeList: GetTaxCodeList): Promise<[result: GetTaxCodeListResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    CheckAccountNoAsync(checkAccountNo: CheckAccountNo): Promise<[result: CheckAccountNoResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create AccountServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<AccountServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
