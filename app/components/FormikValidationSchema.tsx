import * as Yup from "yup";

export const formikFundInfoValidationSchema = Yup.object({
  fundName: Yup.string()
      .required("fundName is required"),
  FundGoal: Yup.string()
      .required("fundGoal is required"),
  FundSymbol: Yup.string()
      .required("fundSymbol is required"),
  fundType: Yup.string()
      .required("fundType is required"),
  fundLogo: Yup.string(),
})

export const formikFundSetUpValidationSchema = Yup.object({
  AccoutDepositoryBankName: Yup.string()
      .required("depositoryBankName is required"),
  AccountDepositoryAccountNumber: Yup.string()
      .required("depositoryAccountNo is required"),

  CashAccountBankName:Yup.string()
      .required("cashBankName is required"),
  CashAccountNumber: Yup.string()
      .required("cashAccountNo is required"),

  CustodianBankName: Yup.string()
      .required("custodianBankName is required"),
  CustodianParcentage: Yup.string()
      .required("custodianPercentage is required"),

  TrustBankName: Yup.string()
      .required("trusteeBankName is required"),
  TrustPercentage: Yup.string()
      .required("trusteePercentage is required"),
})

export const formikEquityAssetsValidationSchema = Yup.object({
    tickerSymbol: Yup.string()
        .required("tickerSymbol is required"),
    companyName: Yup.string()
        .required("companyName is required"),
    numberOfOutstandingShares:Yup.string()
        .required("numberOfOutstandingShares is required"),
    ISIN: Yup.string()
        .required("ISIN is required"),
    description: Yup.string()
        .required("description is required"),
    currency:Yup.string()
        .required("currency is required"),
    exchange: Yup.string()
        .required("exchange is required"),
    sectorIndustry: Yup.string()
        .required("sectorIndustry is required"),
    assetClass:Yup.string()
        .required("assetClass is required"),
    countryOfDomicile:Yup.string()
        .required("countryOfDomicile is required"),
});

export const formikFixedIncomeAssetsValidationSchema = Yup.object({
    bondType: Yup.string()
        .required("bondType is required"),
    issuer: Yup.string()
        .required("issuer is required"),
    faceValue: Yup.string()
        .required("faceValue is required"),
    maturityDate: Yup.string()
        .required("maturityDate is required"),
    couponRate: Yup.string()
        .required("couponRate is required"),
    paymentFrequency: Yup.string()
        .required("paymentFrequency is required"),
    yieldToMaturity: Yup.string()
        .required("yieldToMaturity is required"),
    creditRating: Yup.string()
        .required("creditRating is required"),
    fixedIncomeType: Yup.string()
        .required("fixedIncomeType is required"),
    ISIN: Yup.string()
        .required("ISIN is required"),
    fixedIncomeName: Yup.string()
        .required("fixedIncomeName is required"),
    description: Yup.string()
        .required("description is required"),
    countryOfIssuer: Yup.string()
        .required("countryOfIssuer is required"),
    effectiveDuration: Yup.string()
        .required("effectiveDuration is required"),
    amortizationSchedule: Yup.string()
        .required("amortizationSchedule is required"),
    optionality: Yup.string()
        .required("optionality is required"),
    callablePuttable: Yup.string()
        .required("callablePuttable is required"),
    currency: Yup.string()
        .required("currency is required"),
    issueDate: Yup.string()
        .required("issueDate is required"),
    listingExchange: Yup.string()
        .required("listingExchange is required"),
});

export const formikRealEstateAssetsValidationSchema = Yup.object({
    propertyAddress: Yup.string()
        .required("propertyAddress is required"),
    propertyType: Yup.string()
        .required("propertyType is required"),
    rentalIncome:Yup.string()
        .required("rentalIncome is required"),
});

export const formikAlternativeAssetsValidationSchema = Yup.object({
    investmentFundName: Yup.string()
        .required("investmentFundName is required"),
    investmentManager: Yup.string()
        .required("investmentManager is required"),
    fundStrategy:Yup.string()
        .required("fundStrategy is required"),
})

export const formikAssetInfoValidationSchema = Yup.object({
    name: Yup.string()
        .required("assetName is required"),
    price: Yup.string()
        .required("assetPrice is required"),
    value: Yup.string()
        .required("assetValue is required"),
    note: Yup.string()
        .required("assetNotes is required"),
    type: Yup.string()
        .required("Asset type is required"),
})

