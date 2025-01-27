export function getURL(path = '') {
  // Get all possible URLs
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const additionalURLs = process.env.NEXT_PUBLIC_ADDITIONAL_URLS?.split(',') || [];
  
  // Use the first available URL that matches the current window location, or default to baseURL
  let selectedURL = baseURL;
  if (typeof window !== 'undefined') {
    const currentPort = window.location.port;
    const matchingURL = additionalURLs.find(url => url.includes(`:${currentPort}`));
    if (matchingURL) {
      selectedURL = matchingURL;
    }
  }

  // Ensure HTTPS for non-localhost URLs and format the path
  const formattedURL = selectedURL.startsWith('http') ? selectedURL : `https://${selectedURL}`;
  const cleanPath = path.replace(/^\/+/, '');

  // Return the full URL
  return cleanPath ? `${formattedURL}/${cleanPath}` : formattedURL;
}
