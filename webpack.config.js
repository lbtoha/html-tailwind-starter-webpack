const autoprefixer = require("autoprefixer");

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackSimpleIncludePlugin = require("html-webpack-simple-include-plugin");

// Define the root directory containing the HTML files
const rootDirectory = path.resolve(__dirname, "src");

// Function to recursively find partials in a directory
function findPartials(directory) {
  const partials = [];
  // Read the directory
  const files = fs.readdirSync(directory);
  // Loop through the files
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    // If it's a directory, recursively find partials in it
    if (stats.isDirectory()) {
      partials.push(...findPartials(filePath));
    } else {
      // If it's a file, add it as a partial
      partials.push({
        tag: `<include-${path.basename(file, path.extname(file))} />`,
        excludeHead: true,
        file: filePath,
      });
    }
  });
  return partials;
}

// Function to generate HtmlWebpackPlugin instances for each HTML file
function generateHtmlPlugins(rootDir) {
  const plugins = [];
  // Read the root directory
  const files = fs.readdirSync(rootDir);

  // Filter HTML Pages files
  const htmlPageFiles = files.filter((file) => path.extname(file) === ".html");
  // Loop through HTML files
  htmlPageFiles.forEach((file) => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: file,
        template: path.join(rootDir, file), // Fix: Change `directory` to `rootDir`
      })
    );
  });

  return plugins;
}

// Generate HtmlWebpackPlugin instances for each HTML file
const htmlFiles = generateHtmlPlugins(rootDirectory);

// Generate partials dynamically for each directory containing HTML files
const partials = [];
htmlFiles.forEach((plugin) => {
  const directory = path.dirname(plugin.options.template);
  const partialsInDirectory = findPartials(directory);
  partials.push(...partialsInDirectory);
});

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),

    // Html Webpack Plugin for multiple html page files...
    ...htmlFiles,

    // Html Webpack Plugin for partials
    ...partials.map(({ tag, file, excludeHead }) => {
      return new HtmlWebpackSimpleIncludePlugin([
        {
          tag: tag,
          excludeHead: excludeHead,
          content: fs.readFileSync(file, "utf-8"),
        },
      ]);
    }),
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
