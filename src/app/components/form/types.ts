export enum TypeOfInvestment {
	equitiesFund = "Equities Fund",
	globalEquitiesFund = "Global Equities Fund",
	dividendIncomeFund = "Dividend Income Fund",
	technologyFund = "Technology Fund",
}

export enum AccountTypeOptions {
	openAnIsa = "Open an ISA",
	transferAnIsa = "Transfer an ISA",
}

export type Inputs = {
	firstname: string;
	lastname: string;
	depositAmount: string;
	accountType: AccountTypeOptions;
	investmentFund: TypeOfInvestment;
	investmentAmount: string;
};
