export type ProjectLang = 'fr' | 'en';

export interface Project {
	id: string;
	title: Record<ProjectLang, string>;
	description: Record<ProjectLang, string>;
	tags: string[];
	repo: {
		url: string;
		label: Record<ProjectLang, string>;
	};
	/** Affiché sur la page d'accueil (aperçu limité). */
	featured: boolean;
}

export const projects: Project[] = [
	{
		id: 'frontend-mentor',
		title: {
			fr: 'FrontendMentor',
			en: 'FrontendMentor',
		},
		description: {
			fr: 'Quelques projets réalisés par moi et sélectionnés sur le site FrontendMentor.com.',
			en: 'Some projects made by me and selected from the FrontendMentor.com website.',
		},
		tags: ['HTML', 'CSS', 'JS', 'React'],
		repo: {
			url: 'https://github.com/Hibi4/FrontendMentor_project',
			label: {
				fr: 'Voir sur GitHub',
				en: 'View on GitHub',
			},
		},
		featured: true,
	},
	{
		id: 'flask-intro',
		title: {
			fr: 'Introduction à Flask',
			en: 'Introduction to Flask',
		},
		description: {
			fr: 'Introduction à Flask en suivant la documentation sur le site officiel.',
			en: 'Introduction to Flask by following the documentation on the official website.',
		},
		tags: ['Python'],
		repo: {
			url: 'https://github.com/Hibi4/Flak__Introduction__projects',
			label: {
				fr: 'Voir sur GitHub',
				en: 'View on GitHub',
			},
		},
		featured: true,
	},
	{
		id: 'tailwind-intro',
		title: {
			fr: 'Introduction à TailwindCSS',
			en: 'Introduction to TailwindCSS',
		},
		description: {
			fr: 'Je me suis inspiré de la documentation de TailwindCSS pour réaliser ce projet et relever quelques défis.',
			en: 'I took inspiration from the TailwindCSS documentation to make this project and complete some challenges.',
		},
		tags: ['HTML'],
		repo: {
			url: 'https://github.com/Hibi4/Talwind_projects',
			label: {
				fr: 'Voir sur GitHub',
				en: 'View on GitHub',
			},
		},
		featured: true,
	},
	{
		id: 'react-intro',
		title: {
			fr: 'Introduction à React',
			en: 'Introduction to React',
		},
		description: {
			fr: 'En suivant les explications de <a href="https://www.w3school.com">w3school</a> sur la partie React, j\'ai pu réaliser ces défis.',
			en: 'By following <a href="https://www.w3school.com">w3school</a>\'s explanations on the React section, I was able to complete these challenges.',
		},
		tags: ['React', 'Javascript'],
		repo: {
			url: 'https://github.com/Hibi4/React_projects',
			label: {
				fr: 'Voir sur GitLab',
				en: 'View on GitLab',
			},
		},
		featured: true,
	},
	{
		id: 'stock-predictor',
		title: {
			fr: 'Stock Predictor',
			en: 'Stock Predictor',
		},
		description: {
			fr: 'Un outil de prédiction boursière développé en Python avec la bibliothèque yfinance (Yahoo Finance) et utilisant des modèles d\'apprentissage automatique. Il prédit le cours futur d\'une action à partir de données historiques.',
			en: 'A stock prediction tool built with Python and the yfinance library (Yahoo Finance), using machine learning models to forecast future stock prices from historical data.',
		},
		tags: [
			'Python',
			'Machine Learning',
			'Data Analysis',
			'Data Visualization',
			'Data Preprocessing',
			'Data Cleaning',
			'Data Transformation',
			'Data Standardization',
		],
		repo: {
			url: 'https://github.com/Hibi4/Stock-prediction',
			label: {
				fr: 'Voir sur GitHub',
				en: 'View on GitHub',
			},
		},
		featured: false,
	},
];

export function getProjects(options?: { featuredOnly?: boolean }): Project[] {
	if (options?.featuredOnly) {
		return projects.filter((project) => project.featured);
	}
	return projects;
}
