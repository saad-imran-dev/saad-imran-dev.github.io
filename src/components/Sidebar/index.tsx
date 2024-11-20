import React from 'react';
import { config } from './config';
import { Container } from './style';

const Sidebar: React.FC = () => {
	return (
		<Container>
			{config.options.map((opt) => (
				<button key={opt.title}>{opt.title}</button>
			))}
		</Container>
	);
};

export default Sidebar;
