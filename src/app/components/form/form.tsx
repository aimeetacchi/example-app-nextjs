"use client";

import {
	Button,
	Divider,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Stack,
	TextField,
	Typography,
	Select,
	Tooltip,
	IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AccountTypeOptions, Inputs, TypeOfInvestment } from "./types";
import { useFormStore } from "@/app/store/formState";

interface FormProps {
	setOpen: (value: boolean) => void;
}
const Form = ({ setOpen }: FormProps) => {
	const {
		register,
		watch,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const { add } = useFormStore((state) => state);
	const accountType = watch("accountType");
	const investmentFund = watch("investmentFund");
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		add(data);
		setOpen(true);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* Form to collect peoples information */}

			<Stack sx={{ width: "100%", maxWidth: 660, margin: "auto" }} spacing={2}>
				<Typography variant="h6">Please fill out your details</Typography>
				<TextField
					defaultValue=""
					{...register("lastname")}
					label="add first name"
					variant="outlined"
					{...register("firstname", { required: true })}
				/>
				{errors.firstname && (
					<Typography component="span" sx={{ color: "red" }}>
						This field is required
					</Typography>
				)}
				<TextField
					defaultValue=""
					{...register("lastname", { required: true })}
					label="add last name"
					variant="outlined"
				/>
				{errors.lastname && (
					<Typography component="span" sx={{ color: "red" }}>
						This field is required
					</Typography>
				)}
				<Divider />
				{/* Choice open new account or transer exsisting */}
				<Typography variant="h6">
					Please Select what you would like to do?
				</Typography>
				<Stack gap={2} direction="row">
					<Controller
						name="accountType"
						defaultValue={AccountTypeOptions.openAnIsa}
						control={control}
						render={({ field }) => (
							<FormControl fullWidth>
								<RadioGroup
									{...field}
									row
									onChange={(value) => field.onChange(value)}
									value={field.value}
								>
									{Object.entries(AccountTypeOptions).map(([key, value]) => (
										<FormControlLabel
											key={key}
											value={value}
											control={<Radio />}
											label={value}
										/>
									))}
								</RadioGroup>
							</FormControl>
						)}
					/>
				</Stack>

				<Divider />

				{/* Fund selection */}
				{/* (single fund - Equities Fund) from a list of available options - */}

				<Stack direction="row" alignItems="center" rowGap={1}>
					<Typography variant="h6">Choose your fund</Typography>

					{/* I've used a tooltip explaining this - Currently they will be restricted to selecting a single fund however in the future we would anticipate allowing selection of multiple options.   */}
					<Tooltip
						slotProps={{
							popper: {
								sx: { ".MuiTooltip-tooltip": { bgcolor: "red" } },
							},
						}}
						title={
							<Typography sx={{ color: "white" }}>
								Currently you will be restricted to selecting a single fund
								however in the future we will allow a selection of multiple
								options.
							</Typography>
						}
						arrow
					>
						<IconButton>
							<InfoIcon sx={{ color: "red" }} />
						</IconButton>
					</Tooltip>
				</Stack>
				<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="FundSelection">Fund Selection</InputLabel>
					<Select
						defaultValue=""
						{...register("investmentFund", { required: true })}
					>
						{Object.entries(TypeOfInvestment).map(([key, value]) => (
							<MenuItem key={key} value={value}>
								{value}
							</MenuItem>
						))}
					</Select>
					{errors.investmentFund && (
						<Typography mt={2} component="span" sx={{ color: "red" }}>
							This field is required
						</Typography>
					)}
				</FormControl>

				{/* How much do you want to invest */}
				{investmentFund && (
					<Controller
						defaultValue=""
						name="investmentAmount"
						control={control}
						rules={{
							required: "Investment amount is required",
							max:
								accountType === AccountTypeOptions.openAnIsa
									? {
											value: 20000,
											message:
												"The maximum amount you can save in an Individual Savings Account (ISA) in the UK each tax year is £20,000",
									  }
									: undefined,
						}}
						render={({ field }) => (
							<TextField
								{...field}
								label="£ Deposit Amount"
								error={!!errors.investmentAmount}
								helperText={errors.investmentAmount?.message}
								variant="outlined"
								fullWidth
							/>
						)}
					/>
				)}

				<Button
					sx={{ borderRadius: 40, backgroundColor: "#dc1e83" }}
					variant="contained"
					type="submit"
				>
					Apply for application
				</Button>
			</Stack>
		</form>
	);
};

export default Form;
