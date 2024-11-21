import React from 'react';
import { NavLink } from 'react-router-dom';
import { capitalize } from 'lodash';
import { config } from './config';
import { Container } from './style';

const Sidebar: React.FC = () => {
	return (
		<Container>
			{config.options.map((opt) => (
				<NavLink to={opt.path} className="text-inherit no-underline">
					{({ isActive }) => (
						<button
							key={opt.title}
							className={`w-full ${isActive ? `text-active` : ``}`}
						>
							{capitalize(opt.title)}
						</button>
					)}
				</NavLink>
			))}
		</Container>
	);
};

export default Sidebar;
