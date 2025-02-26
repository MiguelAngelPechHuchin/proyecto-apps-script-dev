const doGet = () => HtmlService.createTemplateFromFile("frontend/Index")
.evaluate()
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
.setSandboxMode (HtmlService.SandboxMode.IFRAME)
.addMetaTag(
    "viewport",
    'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
) 
.setTitle("proyecto_apps_scrip_dev")
.setFaviconUrl("https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png");

const include = (ruta) => HtmlService.createHtmlOutputFromFile(ruta).getContent();