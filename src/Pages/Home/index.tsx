import React from 'react';
import { Grid } from '@mui/material';
import { Presentation } from '../../components/title';
import { theme } from '../../styles/theme';
import { Card } from '../../components/card';

export function Home() {
	return (
		<Grid container xs={12}>
			<Grid item xs={12}>
				<Presentation />
			</Grid>
			<Grid
				container
				xs={12}
				height="140vh"
				bgcolor={theme.palette.background.default}
				sx={{
					background: `linear-gradient(141deg, ${theme.palette.background.default} 40%, ${theme.palette.primary.light} )`,
				}}
				alignItems="center"
				justifyContent="center"
			>
				<Grid item xs={6} height="40%">
					<Card description="Projeto de caminhão" title="Cliente Real" />
				</Grid>
				<Grid item xs={6} height="40%">
					<Card description="Projeto de saúde" title="Cliente Real" />
				</Grid>
				<Grid item xs={6} height="40%">
					<Card description="Projeto api de radio" title="Projeto pessoal" />
				</Grid>
				<Grid item xs={6} height="40%">
					<Card description="Projeto de blog" title="Projeto de curso" />
				</Grid>
			</Grid>
		</Grid>
	);
}
