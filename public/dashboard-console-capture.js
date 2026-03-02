(function() {
  if (window.self === window.top) return;

  var logs = [];
  var MAX_LOGS = 500;

  var originalConsole = {
    log: console.log,
    warn: console.warn,
    error: console.error,
    info: console.info,
    debug: console.debug
  };

  function sendToParent(data) {
    try {
      window.parent.postMessage(data, '*');
    } catch (e) {}
  }

  function captureLog(level, args) {
    var timestamp = new Date().toISOString();
    var message = Array.prototype.slice.call(args).map(function(arg) {
      if (typeof arg === 'object' && arg !== null) {
        try {
          return JSON.stringify(arg, function(key, value) {
            if (typeof value === 'function') return '[Function]';
            if (value instanceof Error) return value.toString();
            return value;
          }, 2);
        } catch (e) {
          return '[Object]';
        }
      }
      return String(arg);
    }).join(' ');

    var logEntry = {
      timestamp: timestamp,
      level: level,
      message: message,
      url: window.location.href
    };

    logs.push(logEntry);
    if (logs.length > MAX_LOGS) {
      logs.shift();
    }

    sendToParent({
      type: 'console-log',
      log: logEntry
    });
  }

  console.log = function() { captureLog('log', arguments); originalConsole.log.apply(console, arguments); };
  console.warn = function() { captureLog('warn', arguments); originalConsole.warn.apply(console, arguments); };
  console.error = function() { captureLog('error', arguments); originalConsole.error.apply(console, arguments); };
  console.info = function() { captureLog('info', arguments); originalConsole.info.apply(console, arguments); };
  console.debug = function() { captureLog('debug', arguments); originalConsole.debug.apply(console, arguments); };

  window.addEventListener('error', function(event) {
    captureLog('error', ['Unhandled error: ' + event.message + ' at ' + event.filename + ':' + event.lineno]);
  });

  window.addEventListener('unhandledrejection', function(event) {
    captureLog('error', ['Unhandled promise rejection: ' + String(event.reason)]);
  });

  function sendRouteChange() {
    sendToParent({
      type: 'route-change',
      route: {
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        href: window.location.href
      },
      timestamp: new Date().toISOString()
    });
  }

  function sendReady() {
    sendToParent({
      type: 'console-capture-ready',
      url: window.location.href,
      timestamp: new Date().toISOString()
    });
    sendRouteChange();
  }

  var origPushState = history.pushState;
  history.pushState = function() {
    origPushState.apply(this, arguments);
    sendRouteChange();
  };

  var origReplaceState = history.replaceState;
  history.replaceState = function() {
    origReplaceState.apply(this, arguments);
    sendRouteChange();
  };

  window.addEventListener('popstate', sendRouteChange);
  window.addEventListener('hashchange', sendRouteChange);

  if (document.readyState === 'complete') {
    sendReady();
  } else {
    window.addEventListener('load', sendReady);
  }
})();