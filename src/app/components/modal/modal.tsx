"use client";
import { useFormStore } from "@/app/store/formState";
import React from "react";
import { Box, Button, Modal as MuiModal, Typography } from "@mui/material/";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

interface ModalProps {
	setOpen: (value: boolean) => void;
	open: boolean;
}

const Modal = ({ setOpen, open }: ModalProps) => {
	const { formData, submitData } = useFormStore((state) => state);
	const handleClose = () => setOpen(false);

	const formatter = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	});
	const onSubmit = () => {
		// here is where the application would get sent of via an API either REST or GraphQL and sent to a database.
		console.log("Submitting Data", {
			accountType: formData?.accountType,
			firstname: formData?.firstname,
			lastname: formData?.lastname,
			investmentAmount: formatter.format(Number(formData?.investmentAmount)),
			investmentFund: formData?.investmentFund,
		});
		handleClose();
		submitData();
	};

	return (
		formData && (
			<MuiModal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Box sx={style}>
					<Typography variant="h5" mb={2}>
						Review your application
					</Typography>
					<Typography>
						Name: {formData.firstname} {formData.lastname}
					</Typography>

					<Typography sx={{ mt: 2 }}>
						Account Type: {formData.accountType}
					</Typography>
					<Typography sx={{ mt: 2 }}>
						Type of fund: {formData.investmentFund}
					</Typography>
					<Typography sx={{ my: 2 }}>
						Amount you want to deposit:{" "}
						{formatter.format(Number(formData.investmentAmount))}
					</Typography>
					<Button
						sx={{ borderRadius: 40, backgroundColor: "#dc1e83" }}
						variant="contained"
						onClick={onSubmit}
					>
						Submit Application
					</Button>
				</Box>
			</MuiModal>
		)
	);
};

export default Modal;
