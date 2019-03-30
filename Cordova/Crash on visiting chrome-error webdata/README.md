# Phonegap-built Cordova Android app crashes when visiting chrome-error://webdata
An Android app, built with Phonegap, crashes when it is navigated to `chrome-error://webdata` either inside an iFrame or directly.

## Affected devices:
Devices running Android 8 or later

#### Tested devices (affected written in **bold**):
- **Pocophone f1, Android 8.1.0** ~ crash
- **Samsung Galaxy S8+, Android 9** ~ crash
- Meizu m1 metal, Android 5.1 (Flyme 7.8.7.24 beta)
- Samsung Galaxy Note 3, Android 5.0
- Huawei P9, Android 7.0 (EMUI 5.0.3)
- OnePlus (unknown model), Android 6.0.1

## Unaffected devices:
Devices running Android 7 and lower

## POC:
- [apk](https://github.com/zznidar/bugreports/raw/master/Cordova/Crash%20on%20visiting%20chrome-error%20webdata/apk/iFramecrasher-debug.3519194.1.apk)
- [Source files](https://github.com/zznidar/bugreports/tree/master/Cordova/Crash%20on%20visiting%20chrome-error%20webdata/www)

## Steps to reproduce
1. Download [the .apk file](https://github.com/zznidar/bugreports/raw/master/Cordova/Crash%20on%20visiting%20chrome-error%20webdata/apk/iFramecrasher-debug.3519194.1.apk) and install it.
2. Open the app.
3. Press one of the "*Will this crash it?*" links.

### Actual result
App crashes.

### Expected result
App should not crash.
This is held up by the fact that Chrome on Windows throws an exception: `Not allowed to load local resource: chrome-error://webdata/`. Same exception is thrown when debugging an app made in Android Studio with WebView.  