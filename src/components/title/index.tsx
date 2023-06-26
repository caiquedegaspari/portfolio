import React from 'react';

import { Box, Grid, IconButton, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import { Description, GitHub, LinkedIn } from '@mui/icons-material';

export function Presentation() {
	const openNewTab = (url: string, isPdf?: boolean) => {
		window.open(url, isPdf ? '_blank' : undefined);
	};

	return (
		<Grid
			height="100vh"
			sx={{
				background: `radial-gradient(${theme.palette.primary.main} 50%, #000000d5 );`,
			}}
			container
			xs={12}
			direction="column"
			justifyContent="center"
		>
			<Typography
				sx={{ color: theme.palette.primary.light }}
				fontSize={24}
				fontFamily="Anton"
				textTransform="uppercase"
				marginLeft="20%"
			>
				Olá, eu sou o Caique
			</Typography>
			<Box display="flex">
				<Typography
					lineHeight="170px"
					paddingLeft="20%"
					fontSize={170}
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
				lineHeight="150px"
				textAlign="center"
				fontSize={170}
				fontFamily="Anton"
				textTransform="uppercase"
				sx={{ color: theme.palette.text.primary }}
				color="text"
			>
				developer
			</Typography>
			<Typography
				sx={{ color: theme.palette.text.primary }}
				fontSize={16}
				letterSpacing={-1}
				fontFamily="Work Sans"
				textTransform="uppercase"
				marginTop="25px"
				textAlign="center"
				fontWeight={500}
			>
				Estudo programação desde os meus 15 anos e comecei a trabalhar na área
				com 17,
				<br />
				atuando principalmente com desenvolvimento web utilizando ReactJS e
				NodeJS.
			</Typography>
		</Grid>
	);
}
