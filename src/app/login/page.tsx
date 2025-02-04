"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FormInput } from "../types/types";

const Login = () => {
	const { register, handleSubmit } = useForm<FormInput>();
	const onSubmit: SubmitHandler<FormInput> = (data) => {
		// This is where you would send the data to the server
		console.log(data);
		// This is where you would redirect the user to the next page to show your ISA account
	};
	return (
		<Box>
			<Typography my={2} variant="h3" align="center">
				Login
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack
					sx={{ width: "100%", maxWidth: 360, margin: "auto" }}
					spacing={2}
				>
					<TextField
						defaultValue=""
						{...register("username")}
						label="username"
						variant="outlined"
					/>
					<TextField
						defaultValue=""
						{...register("password")}
						type="password"
						label="password"
						variant="outlined"
					/>
					<Button
						sx={{ borderRadius: 40, backgroundColor: "#dc1e83" }}
						variant="contained"
						type="submit"
					>
						Login
					</Button>
				</Stack>
			</form>
		</Box>
	);
};

export default Login;
