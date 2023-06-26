import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import { Description, GitHub, LinkedIn } from '@mui/icons-material';

export function Home() {
	const openNewTab = (url: string, isPdf?: boolean) => {
		window.open(url, isPdf ? '_blank' : undefined);
	};

	return (
		<Grid container xs={12}>
			<Grid
				height="100vh"
				sx={{ background: theme.palette.primary.main }}
				item
				xs={12}
			>
				<Box display="flex">
					<Typography
						paddingLeft="20%"
						fontSize={120}
						fontFamily="Anton"
						textTransform="uppercase"
						sx={{ color: theme.palette.text.primary }}
						color="text"
					>
						Fullstack
					</Typography>
					<Box alignSelf="center" margin="0 20px">
						<IconButton
							onClick={() =>
								openNewTab(
									'https://www.linkedin.com/in/caique-degaspari-moura-6083081b9/'
								)
							}
						>
							<LinkedIn fontSize="large" />
						</IconButton>

						<IconButton
							onClick={() => openNewTab('https://github.com/caiquedegaspari')}
						>
							<GitHub fontSize="large" />
						</IconButton>
						<IconButton
							onClick={() => {
								openNewTab('/CURRICULO-CAIQUE.pdf', true);
							}}
						>
							<Description fontSize="large" />
						</IconButton>
					</Box>
				</Box>
				<Typography
					lineHeight="70px"
					textAlign="center"
					fontSize={120}
					fontFamily="Anton"
					textTransform="uppercase"
					sx={{ color: theme.palette.text.primary }}
					color="text"
				>
					developer
				</Typography>
			</Grid>
		</Grid>
	);
}
