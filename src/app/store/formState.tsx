import { create } from "zustand";

type FormData = {
	accountType: string;
	firstname: string;
	investmentAmount: string;
	investmentFund: string;
	lastname: string;
};

export type FormState = {
	formData: FormData | undefined;
	add: (formData: FormData) => void;
	dataSubmitted: boolean;
	submitData: () => void;
};

export const useFormStore = create<FormState>((set) => ({
	formData: undefined,
	add: (formData) => set(() => ({ formData: formData })),
	dataSubmitted: false,
	submitData: () => set(() => ({ dataSubmitted: true })),
}));
