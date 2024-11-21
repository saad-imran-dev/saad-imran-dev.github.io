import { RouteObject } from 'react-router-dom';
import {
	BlogPage,
	ContactPage,
	ExperiencePage,
	IntroductionPage,
	ProjectsPage,
	SkillsPage,
} from './pages';
import { Routes } from './enums';

export const routes: RouteObject[] = [
	{
		path: Routes.INTRODUCTION,
		element: <IntroductionPage />,
	},
	{
		path: Routes.SKILLS,
		element: <SkillsPage />,
	},
	{
		path: Routes.PROJECTS,
		element: <ProjectsPage />,
	},
	{
		path: Routes.EXPERIENCE,
		element: <ExperiencePage />,
	},
	{
		path: Routes.CONTACT,
		element: <ContactPage />,
	},
	{
		path: Routes.BLOG,
		element: <BlogPage />,
	},
];
