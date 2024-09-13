import React from 'react';

import {
	Box,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { theme } from '../../styles/theme';
import { Description, GitHub, LinkedIn } from '@mui/icons-material';
import { openNewTab } from '../../utils/openInNewTab';

export function Presentation() {
	const isDesktopScreen = useMediaQuery('(min-width: 821px)');
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
				sx={{ color: theme.palette.primary.dark }}
				fontSize={isDesktopScreen ? 24 : 18}
				fontFamily="Anton"
				textTransform="uppercase"
				marginLeft="20%"
			>
				Olá, eu sou o Caique
			</Typography>
			<Box display="flex">
				<Typography
					lineHeight={isDesktopScreen ? '170px' : '85px'}
					paddingLeft="20%"
					fontSize={isDesktopScreen ? 170 : 55}
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
						<LinkedIn fontSize={isDesktopScreen ? 'large' : 'small'} />
					</IconButton>

					<IconButton
						onClick={() => openNewTab('https://github.com/caiquedegaspari')}
					>
						<GitHub fontSize={isDesktopScreen ? 'large' : 'small'} />
					</IconButton>
					<IconButton
						onClick={() => {
							openNewTab('/CURRICULO-CAIQUE.pdf', true);
						}}
					>
						<Description fontSize={isDesktopScreen ? 'large' : 'small'} />
					</IconButton>
				</Box>
			</Box>
			<Typography
				lineHeight={isDesktopScreen ? '150px' : '50px'}
				textAlign="center"
				fontSize={isDesktopScreen ? 170 : 55}
				fontFamily="Anton"
				textTransform="uppercase"
				sx={{ color: theme.palette.text.primary }}
				color="text"
			>
				developer
			</Typography>
			<Typography
				sx={{ color: theme.palette.text.primary }}
				fontSize={isDesktopScreen ? 16 : 10}
				letterSpacing={-1}
				fontFamily="Work Sans"
				textTransform="uppercase"
				marginTop="25px"
				textAlign="center"
				fontWeight={500}
			>
				Estudo programação há 5 anos e comecei a trabalhar na área há 3 anos,
				<br />
				atuando principalmente com desenvolvimento web utilizando NodeJS e
				ReactJS.
			</Typography>
		</Grid>
	);
}
