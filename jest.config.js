/** 
 * ESM only packages (in `node_modules`) that must be transformed to CommonJS
 * @internal
 */
const esModules = [
    'squares-rng'
].join('|');


/** @type {import('jest').Config} */
export default {
    testEnvironment: 'node',
    roots: ['<rootDir>/__tests__'],
    // only spec files (i.e. not the helpers) are tests
    testMatch: ['**/*.spec.ts'],
    // TypeScript and ESM JavaScript are transpiled to CommonJS by SWC so that
    // no `--experimental-vm-modules` flag is needed (e.g. when using Wallaby)
    transform: {
        '^.+\.(t|j)sx?$': ['@swc/jest', {
            jsc: { parser: { syntax: 'typescript' }, target: 'es2022' }
        }]
    },
    transformIgnorePatterns: [
        `/node_modules/(?!${esModules})`
    ],
    // resolves e.g. `./two-sum.js` to `./two-sum.ts`
    resolver: 'jest-ts-webcompat-resolver',
    collectCoverageFrom: ['src/**/*.ts'],
    coverageProvider: 'v8'
};
