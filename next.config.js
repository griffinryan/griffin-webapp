import path from 'node.path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// const cMapsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps');
const standardFontsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'standard_fonts');

module.exports = {
  plugins: [
      new CopyWebpackPlugin({
          patterns: [
              {
                  from: standardFontsDir,
                  to: 'standard_fonts/'
              },
          ],
      }),
  ],
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  images: {
    unoptimized: true,
    // formats: ['image/jpeg'],
  }
};
