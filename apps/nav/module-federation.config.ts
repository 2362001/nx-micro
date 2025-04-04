import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'nav',
  exposes: {
    './Routes': 'apps/nav/src/app/remote-entry/entry.routes.ts',
  },
  shared: (libraryName, sharedConfig) => {
    const sharedLibraries = {
      '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '19.2.5' },
      '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '19.2.5' },
      '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '19.2.5' },
      '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '19.2.5' }, 
      'ng-zorro-antd': { singleton: true, strictVersion: true, requiredVersion: '^19.2.1' },
      '@testnx/shared': { singleton: true, strictVersion: true, requiredVersion: '0.0.0' },
    };

    return sharedLibraries[libraryName] || false;
  }
};

export default config;
