module.exports = {
    // ... other config
    module: {
      rules: [
        // ... other rules
        {
          test: /\.(png|jpe?g|gif|svg)$/i, // Match image file extensions
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]', // Output filename (you can customize this)
                outputPath: 'images', // Output directory within your build
                publicPath: 'images', // Public URL path (important for correct linking)
              },
            },
          ],
        },
      ],
    },
  };