/* eslint-disable */
var geoip2 = (function () {
  var exports = {}
  function Lookup (successCallback, errorCallback) {
    this.successCallback = successCallback
    this.errorCallback = errorCallback
  }
  Lookup.prototype.getGeoIPResult = function () {
    var _this = this
    var request = new XMLHttpRequest()
    request.open('GET', 'https://dev-api.oomi.com/settings/geoip', true)
    request.onload = function () {
      if (typeof request.status === 'undefined' || request.status === 200) {
        _this.successCallback(request.responseText)
      } else {
        _this.errorCallback()
      }
    }
    request.send(null)
  }
  exports.country = function (successCallback, errorCallback) {
    var l = new Lookup(successCallback, errorCallback)
    l.getGeoIPResult()
  }
  return exports
})()

// geoip2.country(function (response) {
//   if (JSON.parse(response).net_addr === 'CN') {
//     window.location.href = '//www.fantem.cn'
//   }
// }, function (error) {
//   console.log(error)
// })
if(/^[1-6][0-7][0-3]\d0[0-4]$/.test(returnCitySN.cid)){
  if(location.pathname === '/') {
    location.href = '//www.fantem.cn'
  }
}