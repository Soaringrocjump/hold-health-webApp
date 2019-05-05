function setupWebViewJavascriptBridge(callback) {
  console.log("进入setupWebViewJavascriptBridge")
  console.log("window.WebViewJavascriptBridge",window)
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  let WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'wvjbscheme://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(() => {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}
export default {
  callhandler(name, data, callback) {
    console.log("进入callhandler")
    setupWebViewJavascriptBridge(function (bridge) {
      console.log("调用setupWebViewJavascriptBridge")
      bridge.callHandler(name, data, callback)
    })
  },
  registerhandler(name, callback) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.registerHandler(name, function (data, responseCallback) {
        callback(data, responseCallback)
      })
    })
  }
}