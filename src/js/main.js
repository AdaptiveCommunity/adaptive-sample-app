/// <reference path="../bower_components/adaptiveme/adaptive.d.ts" />
function init() {
    // Set the AdaptiveMe API version to index.html
    document.getElementById("version").innerHTML = Adaptive.AppRegistryBridge.getInstance().getAPIVersion();
    // Set the device name to index.html
    var device = Adaptive.AppRegistryBridge.getInstance().getDeviceBridge();
    var deviceInfo = device.getDeviceInfo();
    document.getElementById("device").innerHTML = deviceInfo.getVendor() + " " + deviceInfo.getName() + " " + deviceInfo.getModel();
    // Set OS information to index.html
    var os = Adaptive.AppRegistryBridge.getInstance().getOSBridge();
    var osInfo = os.getOSInfo();
    document.getElementById("os-info").innerHTML = osInfo.getVendor() + " " + osInfo.getName() + " " + osInfo.getVersion();
    // Set language information to index.html
    var globalization = Adaptive.AppRegistryBridge.getInstance().getGlobalizationBridge();
    var locale = globalization.getDefaultLocale();
    document.getElementById("locale").innerHTML = locale.getLanguage() + "-" + locale.getCountry();
}
