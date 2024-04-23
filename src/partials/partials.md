### Create Partials

In this project, you can use partials to manage our HTML templates. Here's how it works:

1. Create a new file in the `src/partials` directory. The filename will be the name of the partial, without the extension. For example, `header.html` would be `<include-header />`.

2. In your main HTML file, include your partials using the syntax `<include-{filename} />`. For example, for `header.html`, you'd use `<include-header />`.

3. You don't need to configure anything in the `webpack.config.js` file. Webpack will automatically process the HTML file.

This makes it easier to manage larger HTML templates, and to keep them organized.