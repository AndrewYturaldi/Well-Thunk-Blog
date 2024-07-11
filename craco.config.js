module.exports = {
    // Your existing webpack configuration
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/', // Output path for images in build folder
              },
            },
          ],
        },
      ],
    },
  };
  