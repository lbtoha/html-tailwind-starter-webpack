# Use Project

```base
git clone https://github.com/lbtoha/html-tailwind-starter-webpack.git
```

```base
npm i
```

### To Run Project

```base
npm run dev
```

### To Build Project

```base
npm run build
```

### Creating an HTML file

To create an HTML file, follow these steps:

1. Create a new file with a `.html` extension in the `src` directory. For example, `home.html`.

2. You don't need to configure anything in the `webpack.config.js` file. Webpack will automatically process the HTML file and include it in the build.

### Create Partials

In this project, you can use partials to manage our HTML templates. Here's how it works:

1. Create a new file in the `src/partials` directory. The filename will be the name of the partial, without the extension. For example, `header.html` would be `<include-header />`.

2. In your main HTML file, include your partials using the syntax `<include-{filename} />`. For example, for `header.html`, you'd use `<include-header />`.

3. You don't need to configure anything in the `webpack.config.js` file. Webpack will automatically process the HTML file.

This makes it easier to manage larger HTML templates, and to keep them organized.

## Use Tailwind CSS & Scss:

Note: This project comes with Tailwind CSS and SCSS (Sass) pre-installed.

Tailwind CSS and SCSS (Sass) are used in this project to organize and style the HTML, and they are dependencies of the project.

The main entry file `index.js` imports `style.scss` which includes Tailwind CSS styles.

You can also include any other CSS file in your project and it will be processed by Webpack.

For example, to include a CSS or SCSS (Sass) file in your project, just import it in your JavaScript file. CSS file you can link directly to your .html file.

**⚠️ Change in Partials:** 
If you change any code in a partial file, you need to run `npm run dev` to see the changes.