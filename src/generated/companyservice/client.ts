import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { DeleteRelations } from "./definitions/delete-relations";
import { DeleteRelationsResponse } from "./definitions/delete-relations-response";
import { DeleteCompanies } from "./definitions/delete-companies";
import { DeleteCompaniesResponse } from "./definitions/delete-companies-response";
import { SaveRelations } from "./definitions/save-relations";
import { SaveRelationsResponse } from "./definitions/save-relations-response";
import { DeleteMaps } from "./definitions/delete-maps";
import { DeleteMapsResponse } from "./definitions/delete-maps-response";
import { SaveMaps } from "./definitions/save-maps";
import { SaveMapsResponse } from "./definitions/save-maps-response";
import { GetCompanySyncList } from "./definitions/get-company-sync-list";
import { GetCompanySyncListResponse } from "./definitions/get-company-sync-list-response";
import { GetCompanies } from "./definitions/get-companies";
import { GetCompaniesResponse } from "./definitions/get-companies-response";
import { GetCategories } from "./definitions/get-categories";
import { GetCategoriesResponse } from "./definitions/get-categories-response";
import { SaveCategories } from "./definitions/save-categories";
import { SaveCategoriesResponse } from "./definitions/save-categories-response";
import { GetCustomerCategories } from "./definitions/get-customer-categories";
import { GetCustomerCategoriesResponse } from "./definitions/get-customer-categories-response";
import { GetIndustries } from "./definitions/get-industries";
import { GetIndustriesResponse } from "./definitions/get-industries-response";
import { SaveCustomerCategories } from "./definitions/save-customer-categories";
import { SaveCustomerCategoriesResponse } from "./definitions/save-customer-categories-response";
import { DeleteCustomerCategories } from "./definitions/delete-customer-categories";
import { DeleteCustomerCategoriesResponse } from "./definitions/delete-customer-categories-response";
import { GetCustomerCategoryTree } from "./definitions/get-customer-category-tree";
import { GetCustomerCategoryTreeResponse } from "./definitions/get-customer-category-tree-response";
import { SaveCompanies } from "./definitions/save-companies";
import { SaveCompaniesResponse } from "./definitions/save-companies-response";
import { GetStatuses } from "./definitions/get-statuses";
import { GetStatusesResponse } from "./definitions/get-statuses-response";
import { GetCrmGroups } from "./definitions/get-crm-groups";
import { GetCrmGroupsResponse } from "./definitions/get-crm-groups-response";
import { CompanyService } from "./services/company-service";

export interface CompanyServiceClient extends SoapClient {
    CompanyService: CompanyService;
    DeleteRelationsAsync(deleteRelations: DeleteRelations): Promise<[result: DeleteRelationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    DeleteCompaniesAsync(deleteCompanies: DeleteCompanies): Promise<[result: DeleteCompaniesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SaveRelationsAsync(saveRelations: SaveRelations): Promise<[result: SaveRelationsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    DeleteMapsAsync(deleteMaps: DeleteMaps): Promise<[result: DeleteMapsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SaveMapsAsync(saveMaps: SaveMaps): Promise<[result: SaveMapsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCompanySyncListAsync(getCompanySyncList: GetCompanySyncList): Promise<[result: GetCompanySyncListResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCompaniesAsync(getCompanies: GetCompanies): Promise<[result: GetCompaniesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCategoriesAsync(getCategories: GetCategories): Promise<[result: GetCategoriesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SaveCategoriesAsync(saveCategories: SaveCategories): Promise<[result: SaveCategoriesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCustomerCategoriesAsync(getCustomerCategories: GetCustomerCategories): Promise<[result: GetCustomerCategoriesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetIndustriesAsync(getIndustries: GetIndustries): Promise<[result: GetIndustriesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SaveCustomerCategoriesAsync(saveCustomerCategories: SaveCustomerCategories): Promise<[result: SaveCustomerCategoriesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    DeleteCustomerCategoriesAsync(deleteCustomerCategories: DeleteCustomerCategories): Promise<[result: DeleteCustomerCategoriesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCustomerCategoryTreeAsync(getCustomerCategoryTree: GetCustomerCategoryTree): Promise<[result: GetCustomerCategoryTreeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    SaveCompaniesAsync(saveCompanies: SaveCompanies): Promise<[result: SaveCompaniesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetStatusesAsync(getStatuses: GetStatuses): Promise<[result: GetStatusesResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    GetCRMGroupsAsync(getCrmGroups: GetCrmGroups): Promise<[result: GetCrmGroupsResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create CompanyServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<CompanyServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
