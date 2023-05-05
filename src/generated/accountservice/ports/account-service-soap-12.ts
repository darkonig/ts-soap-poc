import { SaveBundleList } from "../definitions/save-bundle-list";
import { SaveBundleListResponse } from "../definitions/save-bundle-list-response";
import { GetEntryId } from "../definitions/get-entry-id";
import { GetEntryIdResponse } from "../definitions/get-entry-id-response";
import { GetAccountList } from "../definitions/get-account-list";
import { GetAccountListResponse } from "../definitions/get-account-list-response";
import { GetTypeList } from "../definitions/get-type-list";
import { GetTypeListResponse } from "../definitions/get-type-list-response";
import { GetTaxCodeList } from "../definitions/get-tax-code-list";
import { GetTaxCodeListResponse } from "../definitions/get-tax-code-list-response";
import { CheckAccountNo } from "../definitions/check-account-no";
import { CheckAccountNoResponse } from "../definitions/check-account-no-response";

export interface AccountServiceSoap12 {
    SaveBundleList(saveBundleList: SaveBundleList, callback: (err: any, result: SaveBundleListResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    GetEntryId(getEntryId: GetEntryId, callback: (err: any, result: GetEntryIdResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    GetAccountList(getAccountList: GetAccountList, callback: (err: any, result: GetAccountListResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    GetTypeList(getTypeList: GetTypeList, callback: (err: any, result: GetTypeListResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    GetTaxCodeList(getTaxCodeList: GetTaxCodeList, callback: (err: any, result: GetTaxCodeListResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CheckAccountNo(checkAccountNo: CheckAccountNo, callback: (err: any, result: CheckAccountNoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
