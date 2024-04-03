import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  //   plugins: [new BundleAnalyzerPlugin()],
  mode: 'production',
  //   mode: 'development',
  // optimization: {
  //   usedExports: true
  // },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
};
