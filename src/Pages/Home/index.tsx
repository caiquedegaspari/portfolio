import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Presentation } from '../../components/title';
import { theme } from '../../styles/theme';
import { Card } from '../../components/card';
import work from '../../assets/work-project-1.png';
import work2 from '../../assets/work-project-2.png';
import challenge from '../../assets/radio-browser.png';
import rentx from '../../assets/rentx.png';

export function Home() {
	return (
		<Grid container xs={12}>
			<Grid item xs={12}>
				<Presentation />
			</Grid>
			<Grid
				container
				xs={12}
				minHeight="100vh"
				maxHeight="200vh"
				bgcolor={theme.palette.background.default}
				sx={{
					background: `linear-gradient(141deg, ${theme.palette.background.default} 30%, ${theme.palette.primary.light} )`,
				}}
				gap={3}
				alignItems="space-around"
				justifyContent="center"
			>
				<Grid item xs={12}>
					<Typography
						sx={{ color: theme.palette.primary.dark }}
						fontSize={24}
						marginTop={3}
						marginBottom={-4}
						fontFamily="Anton"
						textTransform="uppercase"
						textAlign="center"
					>
						alguns projetos em que trabalhei
					</Typography>
				</Grid>
				<Grid item xs={5} height="300px">
					<Card
						stack="fullstack"
						technologies={[
							'typescript',
							'node',
							'react',
							'mui',
							'prisma',
							'jest',
							'docker',
							'graphql',
						]}
						img={work2}
						description={`
							Website para uma Seguradora de transportes. 
							Com o objetivo de facilitar diversos procedimentos. 
							Com sistema de demandas, multiplos tipos de perfil, interação entre personas de maneira linear, 
							com notificações via Websocket e etc.`}
						title="Cliente Real"
					/>
				</Grid>
				<Grid item xs={5} height="300px">
					<Card
						stack="fullstack"
						technologies={[
							'typescript',
							'react',
							'mui',
							'nest',
							'prisma',
							'docker',
							'graphql',
						]}
						img={work}
						description={`Projeto direcionado para clínicas e nutricionistas, 
						com o objetivo de auxiliar profissionais e pacientes oncológicos
						 a monitorar o estado de saúde e nutrição baseada em diversas métricas
						  e estudos com regras distribuídas por diversas partes da aplicação.`}
						title="Cliente Real"
					/>
				</Grid>
				<Grid item xs={5} height="300px">
					<Card
						stack="frontend"
						technologies={['react', 'typescript', 'mui']}
						img={challenge}
						description={`Radio Browser. Website capaz de consultar uma API pública de estações de rádio, que permite
						  possível listar as rádios com paginação, buscar rádios por filtros específicos, 
						adicionar rádios e ouvir as rádios.`}
						title="Desafio"
					/>
				</Grid>
				<Grid item xs={5} height="300px">
					<Card
						stack="backend"
						technologies={[
							'typescript',
							'node',
							'jest',
							'swagger',
							'docker',
							'typeorm',
						]}
						img={rentx}
						description={`API de aluguel de carros, com funcionalidades de login, cadastro de carros, 
						fluxo de aluguel, devolução, cadastro de imagens para carros em AWS Storage, 
						injeção de dependência com Tsrynge e etc.`}
						title="Projeto de curso"
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}
