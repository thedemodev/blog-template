module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');

  // Helpers: 11ty Universal Shortcode
  eleventyConfig.addShortcode("toLowerCase", function(str) {
    return str.toLowerCase();
  });

  eleventyConfig.addShortcode("formatDate", function(datetime) {
    var datetime  = new Date(datetime);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return datetime.toLocaleDateString("en-US", options);
  });

  eleventyConfig.addShortcode("json", function(context) {
    return JSON.stringify(context, null, 4);
  });

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['hbs', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'hbs'
  }
}
