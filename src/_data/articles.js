const path = require("path");
const flatcache = require("flat-cache");
const sdk = require("@directus/sdk-js");

const directus = new sdk({
  url: "https://api.directus.cloud",
  project: "dcaoiqv0Icl"
});

module.exports = async function() {
  const cache = flatcache.load("articles", path.resolve("./.data-cache"));
  const key = getCacheKey();
  const cachedData = cache.getKey(key);

  if (!cachedData) {
    console.log("Fetching articles");

    const jaarverslagen = await directus.getItems("articles").then(res => res.data);

    cache.setKey(key, jaarverslagen);
    cache.save();
    return jaarverslagen;
  }

  return cachedData;
}

function getCacheKey() {
  const date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
}
