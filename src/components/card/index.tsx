import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import nest from '../../assets/nestjs.svg';
import typescript from '../../assets/ts.svg';
import prisma from '../../assets/prisma.svg';
import docker from '../../assets/docker.svg';
import mui from '../../assets/mui.svg';
import jest from '../../assets/jest.svg';
import swagger from '../../assets/swagger.svg';
import typeorm from '../../assets/typeorm.png';
import graphql from '../../assets/graphql.svg';

import { openNewTab } from '../../utils/openInNewTab';

type TechTypes =
	| 'react'
	| 'node'
	| 'nest'
	| 'typescript'
	| 'prisma'
	| 'docker'
	| 'mui'
	| 'jest'
	| 'swagger'
	| 'typeorm'
	| 'graphql';

interface Technologies {
	name: string;
	imgUri: string;
	url: string;
}

const techs: Technologies[] = [
	{ name: 'react', imgUri: react, url: 'https://react.dev/' },
	{ name: 'node', imgUri: node, url: 'https://nodejs.org/en' },
	{ name: 'nest', imgUri: nest, url: 'https://nestjs.com/' },
	{
		name: 'typescript',
		imgUri: typescript,
		url: 'https://www.typescriptlang.org/',
	},
	{ name: 'prisma', imgUri: prisma, url: 'https://www.prisma.io/' },
	{ name: 'docker', imgUri: docker, url: 'https://docs.docker.com/' },
	{ name: 'mui', imgUri: mui, url: 'https://mui.com/' },
	{ name: 'jest', imgUri: jest, url: 'https://jestjs.io/pt-BR/' },
	{ name: 'swagger', imgUri: swagger, url: 'https://swagger.io/' },
	{ name: 'typeorm', imgUri: typeorm, url: 'https://typeorm.io/' },
	{ name: 'graphql', imgUri: graphql, url: 'https://graphql.org/' },
];

interface CardProps {
	title: string;
	description: string;
	img: string;
	technologies: TechTypes[];
	projectUrl?: string;
	stack: 'fullstack' | 'backend' | 'frontend';
}

export function Card({
	description,
	title,
	img,
	technologies,
	stack,
	projectUrl,
}: CardProps) {
	const cardTechs: Technologies[] = [];
	technologies.forEach((item) => {
		const matchTech = techs.find((technology) => technology.name === item);
		if (matchTech) cardTechs?.push(matchTech);
	});

	const isDesktopScreen = useMediaQuery('(min-width: 600px)');

	return (
		<>
			<Box
				onClick={() => projectUrl && openNewTab(projectUrl)}
				height="100%"
				sx={{
					cursor: projectUrl ? 'pointer' : 'default',
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
				}}
				borderRadius="8px"
				boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.61)"
			>
				<Box
					borderRadius="6px"
					height="100%"
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
					sx={{ background: '#00000097', padding: '0 10px' }}
				>
					<Typography
						padding="15px 0"
						fontWeight={500}
						fontFamily="Work Sans"
						fontSize={isDesktopScreen ? 18 : 12}
						color="text.primary"
					>
						{description}
					</Typography>
					<Box>
						{cardTechs.map(({ imgUri, name, url }) => (
							<IconButton key={name} onClick={() => openNewTab(url)}>
								<img
									height={isDesktopScreen ? '30px' : '20px'}
									src={imgUri}
									alt={`${name} icon`}
								/>
							</IconButton>
						))}
					</Box>
				</Box>
			</Box>
			<Typography
				textTransform="uppercase"
				fontFamily="Work Sans"
				textAlign="center"
				fontSize="10px"
				marginTop={1}
			>
				{stack}
			</Typography>
			<Typography
				textTransform="uppercase"
				fontFamily="Work Sans"
				lineHeight={1}
				textAlign="center"
			>
				{title}
			</Typography>
		</>
	);
}
