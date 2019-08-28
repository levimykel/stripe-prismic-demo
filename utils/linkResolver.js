
// -- Link resolution rules
// Manages links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type == 'pages') return `/${doc.uid}`
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type == 'pages') return `/page?uid=${doc.uid}`
  return '/'
}
