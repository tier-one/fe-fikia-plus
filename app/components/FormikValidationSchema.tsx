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
  fundLogo: Yup.string()
      .required("fundLogo is required"),
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

