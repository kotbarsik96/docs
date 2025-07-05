function getParam(key) {
  return new URLSearchParams(window.location.search).get(key)
}

window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  const filename = getParam('project') || 'audiofree'
  const url = `${filename}.yaml`

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: 'StandaloneLayout',
  })

  //</editor-fold>
}
