import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type TypographyProps = {
	component: React.ElementType;
	href: string;
};
export const StyledLink = styled(Typography)<TypographyProps>(({ theme }) => ({
	marginRight: 2,
	fontFamily: "monospace",
	fontWeight: 700,
	letterSpacing: ".3rem",
	color: "inherit",
	textDecoration: "none",
	display: "none",
	[theme.breakpoints.up("md")]: {
		display: "flex",
	},
}));
