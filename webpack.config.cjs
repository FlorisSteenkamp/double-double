const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ResolveTypeScriptPlugin = require("resolve-typescript-plugin").default;

// console.log(ResolveTypeScriptPlugin);

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    resolve: {
        // extensions: ['.tsx', '.ts', '.js', '.d.ts' ]
        extensions: ['.js'],
        plugins: [new ResolveTypeScriptPlugin({
            includeNodeModules: false
        })]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // test: /\.(js|tsx?)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'browser'),
        library: 'doubleDouble',
        libraryTarget: 'var'
    },
    stats: {
        // Don't display most things
        all: false,
        colors: true,
        errors: true,
        builtAt: true
    },
    plugins: [
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        })
    ]
};