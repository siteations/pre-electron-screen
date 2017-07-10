export const indexMenu = [
	{
		title: 'home',
		src: '/',
		id: 0,
	},
	{
		title: 'italian religious broadsides',
		src: '/broadsides',
		id: 1,
	},
	{
		title: 'cathedrals of print',
		src: '/polyglot',
		id: 2,
	},
	{
		title: 'luther controversy',
		src: '/luther',
		id: 3,
	},
	{
		title: 'religious life in venice',
		src: '/venice',
		id: 4,
	},
	{
		title: 'bible in print',
		src: '/bible',
		id: 5,
	},
	{
		title: 'religious playlist',
		src: '/playlist',
		id: 6,
	},
	{
		title: 'print in america',
		src: '/america',
		id: 7,
	},
	{
		title: 'other',
		src: '/other',
		id: 7,
	},
];



export const indexSubpages = {
	'/': [
		{menu:'Italian Religious Broadsides', push:'/broadsides' },
		{menu:'Cathedrals of Print', push:'/polyglot' },
		{menu:'luther controversey', push:'/luther' },
		{menu:'bibles in print', push:'/bibles' },
		{menu:'religious playlist', push:'/playlist' },
		{menu:'print in america', push:'/america' },
		{menu:'other', push:'/other' },
		],
	'/broadsides': [
		{menu:'index', push:'/broadsides', hash: null, src: './broad/Broadsides-Index.html'},
		{menu:'introduction', push:'/broadsides#intro', hash: '#intro', src: './broad/Broadsides-Introduction.html'},
		{menu:'guide to research', push:'/broadsides#guide', hash: '#guide', src: './broad/Broadsides-Guide-to-Research.html'},
		{menu:'broadside images', push:'/broadsides#images', hash: '#images', src: './broad/Broadsides-ImageViewer.html'},
		{menu:'bibliography', push:'/broadsides#biblio', hash: '#biblio', src: './broad/Broadsides-Bibliography.html'},
		{menu:'about', push:'/broadsides#about', hash: '#about', src: './broad/Broadsides-About-This-Site.html'}
	],
	'/polyglot': [
		{menu:'introduction', push:'/polyglot#introExhib', hash: '#introExhib' },
		{menu:'Cathedrals of Print', push:'/polyglot#introPoly', hash: '#introPoly', },
		{menu:'Historical Background', push:'/polyglot#introHist', hash: '#introHist', },
		{menu:'The Polyglot Project', push:'/polyglot#introPP', hash: '#introPP', },
		{menu:'Edition Introductions', push:'/polyglot#introEd', hash: '#introEd', },
		{menu:'Interact with Editions', push:'/polyglot#inter-Comp', hash: '#inter-Comp', },
		{menu:'Complutensian (1517)', push:'/polyglot#inter-Comp', hash: '#inter-Comp', },
		{menu:'Antwerp (1571)', push:'/polyglot#inter-Antwerp', hash: '#inter-Antwerp', },
		{menu:'London (1657)', push:'/polyglot#inter-London', hash: '#inter-London', },
		{menu:'Bibliography', push:'/polyglot#biblio', hash: '#biblio', },
	],
	'/venice': [
			{menu:'introduction', push:'/venice', hash: null },
		],
	'/luther': [
			{menu:'introduction', push:'/luther', hash: null, src: './storymap/luther.html' },
		],
	'/bible': [
			{menu:'introduction', push:'/bible', hash: null, src: './storymap/bible.html' },
		],
	'/america': [
			{menu:'introduction', push:'/america', hash: null, src: './timeline/index.html'  },
		]

}
