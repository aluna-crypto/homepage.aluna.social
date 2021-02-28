export const GTM_ID = "GTM-MD8BF34";
export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
