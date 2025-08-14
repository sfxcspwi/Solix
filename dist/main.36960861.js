// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"io2N8":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ba2beaa036960861";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bNJxx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _headerHtml = require("bundle-text:/header.html");
var _headerHtmlDefault = parcelHelpers.interopDefault(_headerHtml);
var _heroHtml = require("bundle-text:/hero.html");
var _heroHtmlDefault = parcelHelpers.interopDefault(_heroHtml);
var _aboutHtml = require("bundle-text:/about.html");
var _aboutHtmlDefault = parcelHelpers.interopDefault(_aboutHtml);
var _ingredientsHtml = require("bundle-text:/ingredients.html");
var _ingredientsHtmlDefault = parcelHelpers.interopDefault(_ingredientsHtml);
var _howitsmadeHtml = require("bundle-text:/howitsmade.html");
var _howitsmadeHtmlDefault = parcelHelpers.interopDefault(_howitsmadeHtml);
var _productsHtml = require("bundle-text:/products.html");
var _productsHtmlDefault = parcelHelpers.interopDefault(_productsHtml);
var _galleryHtml = require("bundle-text:/gallery.html");
var _galleryHtmlDefault = parcelHelpers.interopDefault(_galleryHtml);
var _reviewsHtml = require("bundle-text:/reviews.html");
var _reviewsHtmlDefault = parcelHelpers.interopDefault(_reviewsHtml);
var _informationHtml = require("bundle-text:/information.html");
var _informationHtmlDefault = parcelHelpers.interopDefault(_informationHtml);
var _footerHtml = require("bundle-text:/footer.html");
var _footerHtmlDefault = parcelHelpers.interopDefault(_footerHtml);
function insertHtmlFragment(targetId, htmlContent) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) targetElement.innerHTML = htmlContent;
    else console.warn(`\u{415}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{437} ID "${targetId}" \u{43D}\u{435} \u{437}\u{43D}\u{430}\u{439}\u{434}\u{435}\u{43D}\u{43E}.`);
}
document.addEventListener('DOMContentLoaded', ()=>{
    insertHtmlFragment("header", (0, _headerHtmlDefault.default));
    insertHtmlFragment("hero", (0, _heroHtmlDefault.default));
    insertHtmlFragment("about", (0, _aboutHtmlDefault.default));
    insertHtmlFragment("ingredients", (0, _ingredientsHtmlDefault.default));
    insertHtmlFragment("howitsmade", (0, _howitsmadeHtmlDefault.default));
    insertHtmlFragment("products", (0, _productsHtmlDefault.default));
    insertHtmlFragment("gallery", (0, _galleryHtmlDefault.default));
    insertHtmlFragment("reviews", (0, _reviewsHtmlDefault.default));
    insertHtmlFragment("information", (0, _informationHtmlDefault.default));
    insertHtmlFragment("footer", (0, _footerHtmlDefault.default));
});

},{"bundle-text:/header.html":"jqutN","bundle-text:/hero.html":"gLl9E","bundle-text:/about.html":"lX6c9","bundle-text:/ingredients.html":"3Nwxv","bundle-text:/howitsmade.html":"a0iFj","bundle-text:/products.html":"3R8FL","bundle-text:/gallery.html":"6Rq26","bundle-text:/reviews.html":"3lWte","bundle-text:/information.html":"i7qUn","bundle-text:/footer.html":"LBjKJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jqutN":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"header container\">\n        <div class=\"header__logo-wrapper\">\n            <span class=\"header__logo\">SIMPLY CHOCOLATE</span>\n            <svg class=\"header__chocolate-svg\" width=\"24\" height=\"24\"><use href=\"/symbols.1abf267b.svg#logo-svg\"></use></svg>\n        </div>\n        <nav class=\"header__nav\">\n            <ul class=\"header__list\">\n                <li class=\"header__item\"><a href=\"#\" class=\"header__link\">Home</a></li>\n                <li class=\"header__item\"><a href=\"#\" class=\"header__link\">How it’s made?</a></li>\n                <li class=\"header__item\"><a href=\"#\" class=\"header__link\">Our products</a></li>\n                <li class=\"header__item\"><a href=\"#\" class=\"header__link\">Top sellers</a></li>\n                <li class=\"header__item\"><a href=\"#\" class=\"header__link\">Chocolate is loved</a></li>\n            </ul>\n        </nav>\n        <div class=\"header__svg-wrapper\">\n            <svg class=\"header__instagram-svg header__svg\" width=\"24\" height=\"24\"><use href=\"/symbols.1abf267b.svg#instagram\"></use></svg>\n            <svg class=\"header__twitter-svg header__svg\" width=\"24\" height=\"24\"><use href=\"/symbols.1abf267b.svg#twitter\"></use></svg>\n        </div>\n\n        <button class=\"hamburger-btn\" id=\"hamburgerBtn\" onclick=\"openMenu()\">\n            <div class=\"hamburger-line\"></div>\n            <div class=\"hamburger-line\"></div>\n            <div class=\"hamburger-line\"></div>\n        </button>\n    </section>\n    <div class=\"menu-overlay\" id=\"menuOverlay\">\n    <button class=\"close-btn\" onclick=\"closeMenu()\">✕</button>\n    <nav class=\"header__nav\">\n        <ul class=\"header__list\">\n            <li class=\"header__item\"><a href=\"#\" class=\"header__link\">Home</a></li>\n            <li class=\"header__item\"><a href=\"#\" class=\"header__link\">How it’s made?</a></li>\n            <li class=\"header__item\"><a href=\"#\" class=\"header__link\">Our products</a></li>\n            <li class=\"header__item\"><a href=\"#\" class=\"header__link\">Top sellers</a></li>\n            <li class=\"header__item\"><a href=\"#\" class=\"header__link\">Chocolate is loved</a></li>\n        </ul>\n    </nav>\n    <div class=\"header__svg-wrapper\">\n        <svg class=\"header__instagram-svg header__svg\" width=\"24\" height=\"24\"><use href=\"/symbols.1abf267b.svg#instagram\"></use></svg>\n        <svg class=\"header__twitter-svg header__svg\" width=\"24\" height=\"24\"><use href=\"/symbols.1abf267b.svg#twitter\"></use></svg>\n    </div>\n</div><script src=\"/main.99987dc4.js\"></script></body></html>";

},{}],"gLl9E":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"hero container\">\n        <div class=\"hero__decorative-line\"></div>\n        <h1 class=\"hero__title\">Treat yourself or a loved one to <br class=\"hero__row\"> our finest ingredients for a moment <br class=\"hero__row\"> of pure delight!</h1>\n        <div class=\"hero__list\">\n            <div class=\"hero__block hero__first-block\">\n                <div class=\"hero__item\"><button class=\"hero__first-btn btn-open\" data-open-modal=\"\">Buy now</button></div>\n                <div class=\"hero__item\"><button class=\"hero__second-btn\">How it’s made</button></div>\n            </div>\n            <div class=\"hero__block hero__second-block\">\n                <div class=\"hero__item\"><p class=\"hero__text\">scroll down</p></div>\n                <div class=\"hero__item hero__item-svg\">\n                    <svg class=\"hero__svg\" width=\"22\" height=\"22\"><use href=\"/symbols.1abf267b.svg#arrow\"></use></svg>\n                </div>\n            </div>\n        </div>\n    </section>\n<script src=\"/main.c925b132.js\"></script></body></html>";

},{}],"lX6c9":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><div class=\"about-wrapper\">\n    <section class=\"about container\">\n        <div class=\"about__item\">\n            <div class=\"about__svg-wrapper\">\n                <svg class=\"about__svg about__svg-chocolate\" width=\"28\" height=\"28\">\n                    <use href=\"/symbols.1abf267b.svg#chocolate\"></use>\n                </svg>\n            </div>\n            <h2 class=\"about__title\">Unsurpassed taste</h2>\n            <p class=\"about__text\">Crafted with the finest quality cocoa beans and a dedication to perfection, each bite is a decadent experience that simply cannot be matched. Savor the richness and complexity of our Unsurpassed Taste and discover a new level of chocolate bliss.</p>\n        </div>\n        <div class=\"about__item\">\n            <div class=\"about__svg-wrapper\">\n            <svg class=\"about__svg about__svg-coin\" width=\"28\" height=\"28\">\n                <use href=\"/symbols.1abf267b.svg#coin\"></use>\n            </svg>\n            </div>\n            <h2 class=\"about__title\">Affordable price</h2>\n            <p class=\"about__text\">Indulge in high-quality chocolate without breaking the bank with Simply Chocolate's selection of affordable treats. Enjoy mouth-watering truffles and velvety chocolate bars without sacrificing taste or quality. Browse our selection and indulge in affordable luxury today.</p>\n        </div>\n        <div class=\"about__item about__item-last\">\n            <div class=\"about__svg-wrapper\">\n            <svg class=\"about__svg about__svg-spoon\" width=\"28\" height=\"28\">\n                <use href=\"/symbols.1abf267b.svg#spoon\"></use>\n            </svg>\n            </div>\n            <h2 class=\"about__title\">Own production</h2>\n            <p class=\"about__text\">We take pride in our own production process, ensuring that every step is carefully crafted to perfection. From selecting the finest ingredients to handcrafting each piece, our attention to detail is evident in every bite.</p>\n        </div>\n    </section>\n    </div>\n<script src=\"/main.84813c7a.js\"></script></body></html>";

},{}],"3Nwxv":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"ingradients container\">\n        <h2 class=\"ingradients__title\">IT ALL ADDS UP TO ONE EXCEPTIONAL <span class=\"ingradients__title-span\">TASTE</span> SENSATION</h2>\n        <p class=\"ingradients__text\">At Simply Chocolate, we believe that the secret to exceptional chocolate is in the details. From the sourcing of the finest ingredients to the careful crafting of each individual piece, every step of our process adds up to one exceptional taste sensation.</p>\n        <ul class=\"ingradients__list\">\n            <li class=\"ingradients__card ingradients__card-chocolate\">\n                <img src=\"/chocolate.6e4bf17b.png\" srcset=\"/chocolate.6e4bf17b.png 1x, /chocolate@2x.ded7db18.png 2x\" alt=\"\" class=\"ingradients__img\">\n                <p class=\"ingradients__card-name ingradients__card-name-chocolate\">Milk chocolate</p>\n                <div class=\"ingradients__overlay\">\n                <h3 class=\"ingradients__card-title\">Milk chocolate</h3>\n                <div class=\"ingradients__button-list\">\n                    <div class=\"ingradients__item\"><button class=\"ingradients__button-name\">chocolate</button></div>\n                    <div class=\"ingradients__item\"><button class=\"ingradients__button-benefits\">the benefits</button></div>\n                </div>\n                <p class=\"ingradients__card-text\">Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is the most consumed type of chocolate. Chocolate was originally sold and consumed as a beverage in pre-Columbian times. Although four-fifths of all milk chocolate is sold in the United States and Europe, increasingly large amounts are consumed in China and Latin America.</p>\n                </div>\n            </li>\n            <li class=\"ingradients__card ingradients__card-milk\">\n                <img src=\"/milk.7447cea1.png\" srcset=\"/milk.7447cea1.png 1x, /milk@2x.8651a1db.png 2x\" alt=\"\" class=\"ingradients__img\">\n                <p class=\"ingradients__card-name\">Milk</p>\n                <div class=\"ingradients__overlay\">\n                <h3 class=\"ingradients__card-title\">Milk</h3>\n                <div class=\"ingradients__button-list\">\n                    <div class=\"ingradients__item\"><button class=\"ingradients__button-name\">milk</button></div>\n                    <div class=\"ingradients__item\"><button class=\"ingradients__button-benefits\">the benefits</button></div>\n                </div>\n                <p class=\"ingradients__card-text\">Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system,  and thus reduces the risk of many diseases. Milk contains many nutrients, including protein and lactose.</p>\n                </div>\n            </li>\n            <li class=\"ingradients__card ingradients__card-nuts\">\n                <img src=\"/nuts.f499c868.png\" srcset=\"/nuts.f499c868.png 1x, /nuts@2x.7b95a982.png 2x\" alt=\"\" class=\"ingradients__img\">\n                <p class=\"ingradients__card-name ingradients__card-name-nuts\">nuts</p>\n                <div class=\"ingradients__overlay\">\n                <h3 class=\"ingradients__card-title\">nuts</h3>\n                <div class=\"ingradients__button-list\">\n                    <div class=\"ingradients__item\"><button class=\"ingradients__button-name\">Nuts</button></div>\n                    <div class=\"ingradients__item\"><button class=\"ingradients__button-benefits\">the benefits</button></div>\n                </div>\n                <p class=\"ingradients__card-text\">Almonds, pistachios, and walnuts are some types of nuts that contain healthy nutrients. When eaten as part of a nutrient-dense diet, these 9 nuts may offer benefits such as reducing your risk of heart disease. They’re a good source of fiber, healthy fats, and plant protein. Plus, they’re great on their own, paired with fruit, or added to dishes like salads, desserts, and grains.</p>\n                </div>\n            </li>\n            <li class=\"ingradients__card ingradients__card-sweet-chocolate\">\n                <img src=\"/chocolate-drops.cf56509f.png\" srcset=\"/chocolate-drops.cf56509f.png 1x, /chocolate-drops@2x.140dfb4a.png 2x\" alt=\"\" class=\"ingradients__img\">\n                <p class=\"ingradients__card-name\">sEMI - SWEET CHOCOLATE</p>\n                <div class=\"ingradients__overlay\">\n                <h3 class=\"ingradients__card-title\">sEMI - SWEET <br> CHOCOLATE</h3>\n                <div class=\"ingradients__button-list ingradients__button-list-sweet-chocolate\">\n                    <div class=\"ingradients__item\"><button class=\"ingradients__button-name ingradients__button-sweet-chocolate\">sweet chocolate</button></div>\n                    <div class=\"ingradients__item\"><button class=\"ingradients__button-benefits\">the benefits</button></div>\n                </div>\n                <p class=\"ingradients__card-text\">Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate. Semisweet is darker than milk chocolate. In a taste comparison, it has a slightly bitter taste whereas milk chocolate is sweeter and more mellow. This delectable flavor of chocolate is very versatile.</p>\n                </div>\n            </li>\n        </ul>\n    </section>\n<script src=\"/main.a8d5dc0a.js\"></script></body></html>";

},{}],"a0iFj":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"how-its-made container\">\n    <h2 class=\"how-its-made__title\">hOW IT’S <span class=\"how-its-made__span\">made?</span></h2>\n    <div class=\"how-its-made__steps\">\n        <div class=\"how-its-made__block\">\n            <img src=\"/how-its-made.5c188e51.png\" srcset=\"/how-its-made.5c188e51.png 1x, /how-its-made@2x.dd84d65e.png 2x\" alt=\"\" class=\"how-its-made__img\">\n        </div>\n        <div class=\"how-its-made__instruction\">\n        <h3 class=\"how-its-made__secondary-title\">Try  our chocolates today and discover the perfect balance of flavor</h3>\n        <ul class=\"how-its-made-list\">\n            <li class=\"how-its-made__item\"><p class=\"how-its-made__text\">Heat the milk in a saucepan without bringing it to a boil. Add sugar and cocoa powder.</p></li>\n            <li class=\"how-its-made__item\"><p class=\"how-its-made__text\">At the same time, prepare a water bath. Melt the butter on it.</p></li>\n            <li class=\"how-its-made__item\"><p class=\"how-its-made__text\">\"Mix\" the milk mixture and already liquid butter. Mix thoroughly with a silicone spatula so that the mass becomes uniform and silky.</p></li>\n            <li class=\"how-its-made__item\"><p class=\"how-its-made__text\">Heat the mixture over low heat, letting it barely boil.</p></li>\n            <li class=\"how-its-made__item\"><p class=\"how-its-made__text\">Pour the chocolate into special containers (can be replaced with ice molds). Allow to cool and harden.</p></li>\n        </ul>\n        </div>\n    </div>\n    </section><script src=\"/main.8d08fe53.js\"></script></body></html>";

},{}],"3R8FL":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"products container\">\n    <h2 class=\"products__title\">Our <span class=\"products__span\">pRODUCTS</span></h2>\n    <div class=\"products__card-list\">\n        <div class=\"products__card\">\n            <img src=\"/orange-chocolate.0302d10e.png\" srcset=\"/orange-chocolate.0302d10e.png 1x, /orange-chocolate@2x.e478e78d.png 2x\" alt=\"\" class=\"products__img\">\n            <h3 class=\"products__name\">orange</h3>\n            <p class=\"products__subtitle\">Dark chocolate</p>\n            <button class=\"products__btn\">45 UAH</button>\n        </div>\n        <div class=\"products__card products__card-apple-cranberry\">\n            <img src=\"/apple-chocolate.f895bcd4.png\" srcset=\"/apple-chocolate.f895bcd4.png 1x, /apple-chocolate@2x.fd5baa53.png 2x\" alt=\"\" class=\"products__img\">\n            <h3 class=\"products__name\">APPLE&amp;CRANBERRY</h3>\n            <p class=\"products__subtitle\">Milk chocolate</p>\n            <button class=\"products__btn\">50 UAH</button>\n        </div>\n        <div class=\"products__card products__card-lime-sea\">\n            <img src=\"/lime-chocolate.0fc86b44.png\" srcset=\"/lime-chocolate.0fc86b44.png 1x, /lime-chocolate@2x.ff1797db.png 2x\" alt=\"\" class=\"products__img\">\n            <h3 class=\"products__name\">lime&amp;sea salt</h3>\n            <p class=\"products__subtitle\">Dark chocolate</p>\n            <button class=\"products__btn\">66 UAH</button>\n        </div>\n        <div class=\"products__card products__card-pineapple\">\n            <img src=\"/pineapple-chocolate.6a792a9b.png\" srcset=\"/pineapple-chocolate.6a792a9b.png 1x, /pineapple-chocolate@2x.c15734f3.png 2x\" alt=\"\" class=\"products__img\">\n            <h3 class=\"products__name\">pineapple</h3>\n            <p class=\"products__subtitle\">Dark chocolate</p>\n            <button class=\"products__btn\">54 UAH</button>\n        </div>\n    </div>\n    <div class=\"products__decorative-list\">\n        <div class=\"products__decorate-item-line\"></div>\n        <div class=\"products__decorate-item\"></div>\n        <div class=\"products__decorate-item\"></div>\n        <div class=\"products__decorate-item\"></div>\n        <div class=\"products__decorate-item\"></div>\n        <div class=\"products__decorate-item\"></div>\n        <div class=\"products__decorate-item\"></div>\n        <div class=\"products__decorate-item\"></div>\n    </div>\n</section>\n<script src=\"/main.b7098a30.js\"></script></body></html>";

},{}],"6Rq26":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section>\n        <div class=\"container-second\">\n\n            <h2 class=\"gallery__title\"><span class=\"gallery__title-prefix\">Top </span>Sellers</h2>\n\n            <ul class=\"gallery__list\">\n                <li class=\"gallery__list-item\"><img class=\"gallery__img\" srcset=\"/coffee-choc.3e220562.png 1x, /coffee-choc@2x.644f3de7.png 2x\" alt=\"\"></li>\n                <li class=\"gallery__list-item\"><img class=\"gallery__img\" srcset=\"/nuts-choc.d3849355.png 1x, /nuts-choc@2x.d8ddff02.png 2x\" alt=\"\"></li>\n                <li class=\"gallery__list-item\"><img class=\"gallery__img\" srcset=\"/truffle-choc.927ec6fb.png 1x, /truffle-choc@2x.f36df088.png 2x\" alt=\"\"></li>\n            </ul>\n\n            <div class=\"gallery__info\">\n                <p class=\"gallery__text\">Crazy enough chocolate originates from a bean just like the coffee bean called Cacao. Cacao has been around for thousands of years and was first discovered by the Native American tribe called the Mayans.</p>\n                <img class=\"gallery__single-img\" srcset=\"/nuts-choc.d3849355.png 1x, /nuts-choc@2x.d8ddff02.png 2x\" alt=\"\">\n                <button class=\"gallery__btn\" data-modal-open=\"\">Buy now</button>\n            </div>\n\n        </div>\n\n        <div class=\"back-drop is-hidden\" data-modal=\"\">\n\n            <div class=\"modal\">\n                <div>\n                    <div class=\"modal__close-wrapper\">\n                        <button class=\"btn-close\" data-modal-close=\"\"> \n\n                            <svg width=\"28px\" height=\"28px\"> \n                                <use href=\"/symbols.1abf267b.svg#close\"></use>\n                            </svg>\n\n                        </button>\n                    </div>\n\n                    <div class=\"modal__content\">\n                        <h3 class=\"modal__title\"><span class=\"modal__title-prefix\">BUY </span>NOW</h3>\n\n                        <ul class=\"modal__list\"> \n                            <li class=\"modal__list-item\">\n                                <img class=\"modal__list-img\" srcset=\"/dark-choc.1723762b.png 1x, /dark-choc@2x.67708669.png 2x\" alt=\"\">\n                                <button class=\"modal__list-btn\">100 g</button>\n                            </li>\n\n                            <li class=\"modal__list-item\">\n                                <img class=\"modal__list-img\" srcset=\"/white-choc.55d4efcc.png 1x, /white-choc@2x.d4c704e0.png 2x\" alt=\"\">\n                                <button class=\"modal__list-btn\">200 g</button>\n                            </li>\n                            \n                            <li class=\"modal__list-item\">\n                                <img class=\"modal__list-img\" srcset=\"/milk-choc.1d0b8936.png 1x, /milk-choc@2x.a9081819.png 2x\" alt=\"\">\n                                <button class=\"modal__list-btn\">300 g</button>\n                            </li>\n                        </ul>\n\n                        <svg class=\"modal__slider\" width=\"81px\" height=\"13px\"> \n                            <use href=\"/symbols.1abf267b.svg#slider\"></use>\n                        </svg>\n\n                        <form class=\"modal__form\" action=\"#\" method=\"post\">\n\n                            <div class=\"modal__form-fields\">\n\n                                <label class=\"modal__label\" for=\"name\">\n                                    \n                                    Personal information\n\n                                    <div class=\"modal__name\">\n                                        <input class=\"modal__input\" aria-required=\"true\" placeholder=\"Name\" type=\"text\" id=\"name\" name=\"name\" required=\"\">\n                                        \n                                        <input class=\"modal__input\" aria-required=\"true\" placeholder=\"Surname\" type=\"text\" id=\"surname\" name=\"Surname\" required=\"\">\n                                    </div>\n\n\n                                </label>\n\n                                <label class=\"modal__label\" for=\"email\">Email\n\n                                    <input class=\"modal__input\" type=\"email\" placeholder=\"Enter your email\">\n                                \n                                </label>\n                                            \n                                <label class=\"modal__label\" for=\"phone\">Phone number\n\n                                    <div class=\"phone__code\">\n\n                                        <svg width=\"32px\" height=\"24px\"> \n                                            <use href=\"/symbols.1abf267b.svg#flag\"></use>\n                                        </svg>\n                                        \n\n                                        <p class=\"phone__code-text\">+380</p>\n                                    </div>\n            \n                                    <input class=\"modal__input modal__input-phone\" aria-required=\"true\" placeholder=\"Phone number\" type=\"tel\" id=\"phone\" name=\"phone\" required=\"\">\n                                    \n                                </label>\n\n                                <label class=\"modal__label\">Card number\n\n                                    <div>\n                                        \n                                        <input class=\"modal__input\" aria-required=\"true\" placeholder=\"Enter number\" type=\"\" id=\"card-number\" name=\"phone\" required=\"\">\n\n                                        <svg class=\"form__svg\" width=\"32px\" height=\"20px\"> \n                                            <use href=\"/symbols.1abf267b.svg#mastercard\"></use>\n                                        </svg>\n\n                                    </div>\n                                    \n                                </label>\n\n\n\n                                <label class=\"modal__label\" for=\"comment\">Comment\n                                    <textarea class=\"modal__input modal__textarea\" placeholder=\"Enter text\" id=\"comment\" name=\"comment\" rows=\"4\" required=\"\"></textarea>\n                                </label>\n\n                            </div>\n\n\n                        </form>\n\n                        <button class=\"modal__btn\">Submit</button>\n\n\n                    </div>\n                    \n                </div>\n\n            </div>\n\n        </div>\n\n    </section>\n\n\n\n    <script src=\"/main.c8b7409b.js\"></script>\n<script src=\"/main.46bb8aad.js\"></script></body></html>";

},{}],"3lWte":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section>\n\n        <div class=\"container-second\">\n\n            <h2 class=\"reviews__title\"><span class=\"reviews__title-prefix\">CHOCOLATE </span>IS LOVED</h2>\n\n            <ul class=\"reviews__list\">\n\n                <li class=\"reviews__list-item\">\n                    <img class=\"client__photo\" srcset=\"/victoria-dobrzhanska.e35dc420.png 1x, /victoria-dobrzhanska@2x.dc3bab2b.png 2x\" alt=\"\">\n                    <h3 class=\"client__name\">Victoria Dobrzhanska</h3>\n                    <p class=\"client__reviews\">I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.</p>\n                </li>\n\n                <li class=\"reviews__list-item\">\n                    <img class=\"client__photo\" srcset=\"/nazar-babenko.7c69cb57.png 1x, /nazar-babenko@2x.af0c5c24.png 2x\" alt=\"\">\n                    <h3 class=\"client__name\">Nazar Babenko</h3>\n                    <p class=\"client__reviews\">This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.</p>\n                </li>\n\n                <li class=\"reviews__list-item\">\n                    <img class=\"client__photo\" srcset=\"/olena-kampusch.5a333474.png 1x, /olena-kampusch@2x.7693fd6d.png 2x\" alt=\"\">\n                    <h3 class=\"client__name\">Olena Kampusch</h3>\n                    <p class=\"client__reviews\">Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.</p>\n                </li>\n\n            </ul>\n\n            <div class=\"reviews__control\">\n\n                <svg class=\"reviews__svg\" width=\"106px\" height=\"13px\"> \n                    <use href=\"/symbols.1abf267b.svg#reviews__slider\"></use>\n                </svg>\n\n                <button class=\"reviews__btn\" data-modal-open=\"\">Leave a review</button>\n            </div>\n\n        </div>\n\n        <div class=\"back-drop is-hidden\" data-modal=\"\">\n\n            <div class=\"reviews__modal\">\n\n                <div>\n                    <div class=\"modal__close-wrapper\">\n                        <button class=\"btn-close\" data-modal-close=\"\"> \n\n                            <svg width=\"28px\" height=\"28px\"> \n                                <use href=\"/symbols.1abf267b.svg#close\"></use>\n                            </svg>\n\n                        </button>\n                    </div>\n\n                    <div class=\"reviews-modal__content\">\n                        <h3 class=\"reviews-modal__title\">LEAVE A REVIEW ABOUT<span class=\"modal__title-prefix\"> OUR CHOCOLATE </span></h3>\n\n                        <form class=\"modal__form\" action=\"#\" method=\"post\">\n\n                            <div class=\"modal__form-fields\">\n\n                                <label class=\"modal__label\" for=\"name\">\n                                   \n                                    <input class=\"modal__input\" aria-required=\"true\" placeholder=\"Name\" type=\"text\" id=\"name\" name=\"name\" required=\"\">          \n\n                                </label>\n\n                                <label class=\"modal__label\" for=\"email\">\n\n                                    <input class=\"modal__input\" type=\"email\" placeholder=\"Enter your email\">\n                                \n                                </label>\n                                            \n                                <label class=\"modal__label\" for=\"phone\">\n\n                                    <div class=\"reviews-phone__code\">\n\n                                        <svg width=\"32px\" height=\"24px\"> \n                                            <use href=\"/symbols.1abf267b.svg#flag\"></use>\n                                        </svg>\n                                        \n\n                                        <p class=\"reviews-phone__code-text\">+380</p>\n                                    </div>\n            \n                                    <input class=\"modal__input modal__input-phone\" aria-required=\"true\" placeholder=\"Phone number\" type=\"tel\" id=\"phone\" name=\"phone\" required=\"\">\n                                    \n                                </label>\n\n\n                                <label class=\"modal__label\" for=\"comment\">\n                                    <textarea class=\"modal__input reviews-modal__textarea\" placeholder=\"Enter text\" id=\"comment\" name=\"comment\" rows=\"4\" required=\"\"></textarea>\n                                </label>\n\n                            </div>\n\n\n                        </form>\n\n                        <button class=\"reviews-modal__btn\">Send</button>\n\n\n                    </div>\n                    \n                </div>\n\n            </div>\n\n        </div>\n\n    </section>\n\n    <script src=\"/main.c8b7409b.js\"></script>\n<script src=\"/main.a0280cc5.js\"></script></body></html>";

},{}],"i7qUn":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"info\">\n        <div class=\"container-second info__content\">\n            <h2 class=\"info__title\">EXPLORE OUR NEW CHOCOLATE FIRST</h2>\n            <p class=\"info__text\">From the velvety texture to the rich and complex flavor, our New Chocolate is a true indulgence that will leave you craving more. Made with only the finest ingredients and handcrafted with the utmost care, each piece is a work of art that is sure to please.</p>\n            <button class=\"info__btn\" data-modal-open=\"\">Subscribe</button>\n        </div>\n\n        <div class=\"back-drop is-hidden\" data-modal=\"\">\n\n            <div class=\"info__modal\">\n\n                <div>\n\n                    <img class=\"info__modal-img\" srcset=\"/chocolate__bg.402e794d.png 1x, /chocolate__bg@2x.e26ec444.png 2x\" alt=\"\">\n                    \n                     <div class=\"modal__close-wrapper\">\n                        <button class=\"btn-close\" data-modal-close=\"\"> \n\n                            <svg width=\"28px\" height=\"28px\"> \n                                <use href=\"/symbols.1abf267b.svg#close-inversed\"></use>\n                            </svg>\n\n                        </button>\n                    </div>\n\n                    <div class=\"info-modal__content\">\n\n                        <h3 class=\"info-modal__title\">Explore our <br> <span class=\"info-modal__title-prefix\"> new chocolate </span> first!</h3>\n\n                        <div class=\"info-modal__form\">\n                            <form action=\"\">\n\n                                <label class=\"info-modal__label\" for=\"email\">\n\n                                    <input class=\"info-modal__input\" type=\"email\" placeholder=\"Enter your email\">\n                                \n                                </label>\n\n                            </form>\n\n                            <button class=\"info-modal__btn\">Submit</button>\n                        </div>\n\n                    </div>\n\n                    </div>\n                    \n                </div>\n\n            </div>\n\n        \n    </section>\n\n    <script src=\"/main.c8b7409b.js\"></script>\n<script src=\"/main.af7142c9.js\"></script></body></html>";

},{}],"LBjKJ":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><footer class=\"footer\">\n        <div class=\"container-second\">\n\n            <div class=\"footer__contacts\">\n\n                <h2 class=\"footer__title\"><span class=\"footer__title-prefix\">Chocolate</span> a delicious cure for a bad day</h2>\n\n                <div class=\"footer__social\">\n\n                    <div>\n                        <h4 class=\"footer__subtitle\">Contact us</h4>\n\n                        <ul class=\"footer__contact-list\">\n                            <li><a class=\"footer__contact-link\" href=\"\">+380 (68) 443-94-26</a></li>\n                            <li><a class=\"footer__contact-link\" href=\"\">simplychoc@gmail.com</a></li>\n                        </ul>\n                    </div>\n\n                    <div>\n                        <ul class=\"footer__social-list\">\n\n                            <li>\n                                <a href=\"\">                            \n                                    <svg width=\"24px\" height=\"24px\"> \n                                        <use href=\"/symbols.1abf267b.svg#insta\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n\n                            <li>\n                                <a href=\"\">                            \n                                    <svg width=\"24px\" height=\"24px\"> \n                                        <use href=\"/symbols.1abf267b.svg#twitter\"></use>\n                                    </svg>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"footer__nav\">\n                \n                <div class=\"footer__line\"></div>\n\n                <ul class=\"footer__nav-list\">\n                    <li><a class=\"footer__nav-item\" href=\"\">Home</a></li>\n                    <li><a class=\"footer__nav-item\" href=\"\">How it’s made?</a></li>\n                    <li><a class=\"footer__nav-item\" href=\"\">Our products</a></li>\n                    <li><a class=\"footer__nav-item\" href=\"\">Top sellers</a></li>\n                    <li><a class=\"footer__nav-item\" href=\"\">Chocolate is loved</a></li>\n                </ul>\n            </div>\n            \n        </div>\n\n\n    </footer>\n<script src=\"/main.2ccc51ef.js\"></script></body></html>";

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["io2N8","bNJxx"], "bNJxx", "parcelRequire24a9", {})

//# sourceMappingURL=main.36960861.js.map
