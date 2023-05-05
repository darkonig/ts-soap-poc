import { ApiException } from "./api-exception";
import { Addresses } from "./addresses";
import { PhoneNumbers } from "./phone-numbers";
import { EmailAddresses } from "./email-addresses";
import { Relations } from "./relations";
import { Maps } from "./maps";

/**
 * Company
 * @targetNSAlias `tns`
 * @targetNamespace `http://24sevenOffice.com/webservices`
 */
export interface Company {
    /** APIException */
    APIException?: ApiException;
    /** s:int */
    Id?: string;
    /** s:string */
    ExternalId?: string;
    /** s:string */
    OrganizationNumber?: string;
    /** s:string */
    Name?: string;
    /** s:string */
    FirstName?: string;
    /** s:string */
    NickName?: string;
    /** Addresses */
    Addresses?: Addresses;
    /** PhoneNumbers */
    PhoneNumbers?: PhoneNumbers;
    /** EmailAddresses */
    EmailAddresses?: EmailAddresses;
    /** s:string */
    Url?: string;
    /** s:string */
    Country?: string;
    /** s:string */
    Note?: string;
    /** s:string */
    InvoiceLanguage?: string;
    /** CompanyType|s:string|None,Lead,Consumer,Business,Supplier */
    Type?: string;
    /** s:string */
    Username?: string;
    /** s:string */
    Password?: string;
    /** s:dateTime */
    IncorporationDate?: string;
    /** s:dateTime */
    DateCreated?: string;
    /** s:int */
    Status?: string;
    /** s:int */
    PriceList?: string;
    /** s:int */
    Owner?: string;
    /** s:string */
    BankAccountNo?: string;
    /** s:string */
    BankAccountType?: string;
    /** s:string */
    BankAccountCountry?: string;
    /** s:string */
    BankAccountBic?: string;
    /** s:int */
    TermsOfDeliveryId?: string;
    /** s:short */
    AccountDebit?: string;
    /** s:short */
    AccountCredit?: string;
    /** s:decimal */
    Discount?: string;
    /** s:int */
    TypeGroup?: string;
    /** s:decimal */
    ShareCapital?: string;
    /** s:int */
    NumberOfEmployees?: string;
    /** s:decimal */
    Turnover?: string;
    /** s:decimal */
    Profit?: string;
    /** s:int */
    IndustryId?: string;
    /** s:int */
    MemberNo?: string;
    /** s:dateTime */
    DateChanged?: string;
    /** s:boolean */
    BlockInvoice?: string;
    /** Relations */
    Relations?: Relations;
    /** Maps */
    Maps?: Maps;
    /** DistributionMethod|s:string|Unchanged,Print,EMail,ElectronicInvoice,Default */
    DistributionMethod?: string;
    /** CurrencyType|s:string|LOCAL,AED,AFN,ALL,AMD,ANG,AOA,ARS,AUD,AWG,AZN,BAM,BBD,BDT,BGN,BHD,BIF,BMD,BND,BOB,BOV,BRL,BSD,BTN,BWP,BYN,BYR,BZD,CAD,CDF,CHE,CHF,CHW,CLF,CLP,CNY,COP,COU,CRC,CUC,CUP,CVE,CZK,DJF,DKK,DOP,DZD,EEK,EGP,ERN,ETB,EUR,FJD,FKP,GBP,GEL,GHS,GIP,GMD,GNF,GTQ,GYD,HKD,HNL,HRK,HTG,HUF,IDR,ILS,INR,IQD,IRR,ISK,JMD,JOD,JPY,KES,KGS,KHR,KMF,KPW,KRW,KWD,KYD,KZT,LAK,LBP,LKR,LRD,LSL,LTL,LVL,LYD,MAD,MDL,MGA,MKD,MMK,MNT,MOP,MRO,MTL,MUR,MVR,MWK,MXN,MXV,MYR,MZN,NAD,NGN,NIO,NOK,NPR,NZD,OMR,PAB,PEN,PGK,PHP,PKR,PLN,PYG,QAR,RON,RSD,RUB,RWF,SAR,SBD,SCR,SDG,SEK,SGD,SHP,SKK,SLL,SOS,SRD,STD,SYP,SZL,THB,TJS,TMT,TND,TOP,TRY,TTD,TWD,TZS,UAH,UGX,USD,UYU,UZS,VEF,VND,VUV,WST,XAF,XAG,XAU,XBA,XBB,XBC,XBD,XCD,XDR,XFU,XOF,XPD,XPF,XPT,XTS,XXX,YER,ZAR,ZMK,ZWL,ZWD */
    CurrencyId?: string;
    /** s:short */
    PaymentTime?: string;
    /** s:string */
    GlnNumber?: string;
    /** s:boolean */
    Factoring?: string;
    /** s:short */
    LedgerCustomerAccount?: string;
    /** s:short */
    LedgerSupplierAccount?: string;
    /** s:string */
    VatNumber?: string;
    /** s:boolean */
    Private?: string;
    /** s:boolean */
    ExplicitlySpecifyNewCompanyId?: string;
}
