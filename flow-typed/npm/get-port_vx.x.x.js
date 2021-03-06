// flow-typed signature: 0954b240f4c7be486dc5ea91abab7529
// flow-typed version: <<STUB>>/get-port_v4.0.0/flow_v0.86.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'get-port'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'get-port' {
  declare module.exports: (config: ?{
    port?: number | Array<number>,
    host?: string,
  }) => Promise<number>;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */


// Filename aliases
declare module 'get-port/index' {
  declare module.exports: $Exports<'get-port'>;
}
declare module 'get-port/index.js' {
  declare module.exports: $Exports<'get-port'>;
}
