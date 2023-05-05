import path from 'path';
import { ISoapFault11 } from 'soap';

import { createClientAsync as createAccountClient } from './generated/accountservice';
// import { createClientAsync as createCompanyClient } from './generated/companyservice';
import { createClientAsync as createCountryClient } from './generated/countryinfoservice';

(async function (): Promise<void> {
  const accountClient = await createAccountClient(path.resolve('./resources/AccountService.wsdl'));

  // SOAP ERROR
  try {
    const [account] = await accountClient.GetEntryIdAsync({ argEntryId: { Date: '', EntryNo: '', SortNo: '' } });

    console.log('log', account.GetEntryIdResult);
  } catch (e) {
    const error = e.root.Envelope.Body.Fault as ISoapFault11;
    console.error('SOAP Error', e.root.Envelope.Body, error);
  }

  // Requesting a List of Countries
  const countryClient = await createCountryClient(path.resolve('./resources/CountryInfoService.wsdl'));

  const [countries] = await countryClient.ListOfLanguagesByCodeAsync({});
  console.log(countries.ListOfLanguagesByCodeResult);

  // Server Error - missing params
  try {
    const [countryName] = await countryClient.CountryNameAsync({});

    console.log(countryName);
  } catch (e) {
    console.error('internal server error', e.response.status, e.response.statusText, e.body);
  }

  // proper request
  const [countryName] = await countryClient.CountryNameAsync({ sCountryISOCode: 'CA' });
  console.log('CountryName', countryName);
})();
