'use strict';

module.exports = {
    extension: ['js', 'jsx', 'ts', 'tsx'],
    spec: ['test/**/*.spec.ts'],
    recursive: true,
    loader: ['ts-node/esm'],
    // slow: '75',
    // timeout: '2000',
    // ignore: ['/path/to/some/ignored/file'],
};
