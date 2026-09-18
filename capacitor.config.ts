import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.chefassistant.app',
  appName: 'Умный кулинарный помощник',
  webDir: 'dist',
  android: {
    allowMixedContent: true,
  },
  server: {
    cleartext: true,
    androidScheme: 'http',
  },
};

export default config;