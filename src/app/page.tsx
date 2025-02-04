"use client";
import { Box, Typography } from "@mui/material";
import Form from "./components/form";
import Modal from "./components/modal/modal";
import { useState } from "react";
import { useFormStore } from "./store/formState";

const Home = () => {
	const [open, setOpen] = useState(true);
	const { dataSubmitted } = useFormStore((state) => state);

	return (
		<Box>
			{dataSubmitted ? (
				<Typography my={3} align="center" variant="h4">
					Thankyou your application has been submitted
				</Typography>
			) : (
				<>
					<Typography my={3} align="center" variant="h4">
						Please fill out the form below to apply for an investment fund
					</Typography>
					<Form setOpen={setOpen} />
					<Modal setOpen={setOpen} open={open} />
				</>
			)}
		</Box>
	);
};

export default Home;
