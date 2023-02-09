export function getParameterByName(name: string) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
// Give the URL parameters variable names
export var source = getParameterByName('utm_source')
export var medium = getParameterByName('utm_medium')
export var campaign = getParameterByName('utm_campaign')
export var term = getParameterByName('utm_term')
export var region = getParameterByName('utm_region')
export var channel = getParameterByName('utm_channel')
export var content = getParameterByName('utm_content')
export var pageReferrer = window.location.href
