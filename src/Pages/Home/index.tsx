import React from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { Presentation } from '../../components/title';
import { theme } from '../../styles/theme';
import { Card } from '../../components/card';
import work from '../../assets/work-project-1.png';
import work2 from '../../assets/work-project-2.png';
import challenge from '../../assets/radio-browser.png';
import rentx from '../../assets/rentx.png';

export function Home() {
	const isDesktopScreen = useMediaQuery('(min-width: 821px)');
	const isDesktopHeight = useMediaQuery('(min-height: 673px)');

	return (
		<Grid container xs={12} width="100%">
			<Grid item xs={12}>
				<Presentation />
			</Grid>
			<Grid
				container
				xs={12}
				minHeight={
					isDesktopScreen && isDesktopHeight
						? '110vh'
						: isDesktopScreen && !isDesktopHeight
						? '150vh'
						: '165vh'
				}
				bgcolor={theme.palette.background.default}
				sx={{
					background: `linear-gradient(141deg, ${theme.palette.background.default} 30%, ${theme.palette.primary.light} )`,
				}}
				gap={3}
				alignItems="space-around"
				justifyContent="center"
			>
				<Grid item xs={12} /* margin={isDesktopScreen ? '20px 0' : 0} */>
					<Typography
						sx={{ color: theme.palette.primary.dark }}
						fontSize={isDesktopScreen ? 32 : 24}
						marginTop={3}
						marginBottom={-8}
						fontFamily="Anton"
						textTransform="uppercase"
						textAlign="center"
					>
						alguns projetos em que trabalhei
					</Typography>
				</Grid>
				<Grid
					paddingX={1}
					item
					xs={12}
					md={5}
					height={isDesktopScreen ? '300px' : '200px'}
					margin={isDesktopScreen ? '20px 0' : 0}
				>
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
				<Grid
					item
					xs={12}
					paddingX={1}
					md={5}
					height={isDesktopScreen ? '300px' : '200px'}
					margin={isDesktopScreen ? '20px 0' : 0}
				>
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
				<Grid
					item
					paddingX={1}
					xs={12}
					md={5}
					height={isDesktopScreen ? '300px' : '200px'}
					margin={isDesktopScreen ? '20px 0' : 0}
				>
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
				<Grid
					paddingX={1}
					item
					xs={12}
					md={5}
					height={isDesktopScreen ? '300px' : '200px'}
					margin={isDesktopScreen ? '20px 0' : 0}
				>
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
