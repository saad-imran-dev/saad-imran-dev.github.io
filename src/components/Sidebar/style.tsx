import React from 'react';

type Props = {
	children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => (
	<div className="flex w-1/3 max-w-md flex-col gap-4 bg-black p-5 lg:w-1/4">
		{children}
	</div>
);
