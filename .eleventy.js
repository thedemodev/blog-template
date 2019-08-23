module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/fonts');

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['liquid', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'liquid'
  }
}
