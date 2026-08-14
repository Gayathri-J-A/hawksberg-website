const siteUrl = "https://www.hawksberginternational.com";

const routeLabels = {
  "/": "ISO Consulting, Cybersecurity and Professional Training",
  "/about": "About Hawksberg International",
  "/contact": "Contact Hawksberg International",
  "/training": "Online Training Portal",
};

const labelFromRoute = (route) =>
  route
    .split("/")
    .filter(Boolean)
    .at(-1)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const createPageMetadata = (route, details = {}) => {
  const label = details.title || routeLabels[route] || labelFromRoute(route);
  const description =
    details.description ||
    `Explore Hawksberg International's ${label.toLowerCase()} content, services and training information.`;

  return {
    title: label,
    description,
    alternates: { canonical: route },
    openGraph: {
      title: label,
      description,
      url: `${siteUrl}${route}`,
      siteName: "Hawksberg International",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: label,
      description,
    },
  };
};

export { siteUrl };
