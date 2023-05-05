
/**
 * SaveBundleListResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface SaveBundleListResult {
    /** ResponsType|s:string|Ok,DublicateData,DataAlreadySaved,NotAuthenticated,SystemError,Exception,NotSaved */
    Type?: string;
    /** s:string */
    Description?: string;
}
