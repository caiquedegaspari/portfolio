import { Box, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../../styles/theme';

interface CardProps {
	title: string;
	description: string;
	imgUrl?: string;
}

export function Card({ description, title }: CardProps) {
	return (
		<>
			<Box
				marginLeft="auto"
				marginRight="auto"
				width="50%"
				height="100%"
				sx={{ background: theme.palette.text.primary }}
				borderRadius="8px"
				boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.342)"
			>
				{description}
			</Box>
			<Typography
				textTransform="uppercase"
				fontFamily="Work Sans"
				lineHeight={2}
				textAlign="center"
			>
				{title}
			</Typography>
		</>
	);
}
