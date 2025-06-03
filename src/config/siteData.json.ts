export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "MONTES & VEGAS",
	// Your website's title and description (meta fields)
	title: "Montes y Vegas - Un hermoso lugar donde comienza todo",
	description:
		"Montes y Vegas es un hermoso lugar donde comienza todo. Un lugar para celebrar tu amor, rodeado de naturaleza y belleza.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Yeffrey Espinoza",
		email: "yeffrey4008@gmail.com",
		twitter: "yeffreydev",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
