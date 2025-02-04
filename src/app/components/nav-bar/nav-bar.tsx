"use client";
import { MouseEvent, useState } from "react";
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	Menu,
	Typography,
	Tooltip,
	IconButton,
	MenuItem,
	Toolbar,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledLink } from "../styles/typography";
import Link from "next/link";

const pages = [
	{ name: "Product", href: "/product" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];
const settings = [{ name: "Login", href: "/login" }];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" sx={{ backgroundColor: "#dc1e83" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<StyledLink variant="h6" noWrap component="a" href="/">
						ISA Retail
					</StyledLink>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="open menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: "block", md: "none" } }}
						>
							{pages.map(({ name, href }) => (
								<MenuItem key={name} onClick={handleCloseNavMenu}>
									<Link href={href}>
										<Typography align="center">{name}</Typography>
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<StyledLink variant="h5" noWrap component="a" href="/">
						<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					</StyledLink>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map(({ name, href }) => (
							<Button
								component="a"
								href={href}
								key={name}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{name}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Avatar image" src="" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(({ name, href }) => (
								<MenuItem key={name} onClick={handleCloseUserMenu}>
									<Typography
										component="a"
										href={href}
										sx={{ textAlign: "center", textDecoration: "none" }}
									>
										{name}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
