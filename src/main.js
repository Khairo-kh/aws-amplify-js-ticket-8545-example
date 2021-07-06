import { createApp } from 'vue'
import App from './App.vue'

import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';

import { 
  applyPolyfills,
  defineCustomElements
} from '@aws-amplify/ui-components/loader';

import 'regenerator-runtime/runtime'

Amplify.configure({
  ...awsconfig,
    //   API: {
    //   graphql_headers: async () => {
    //     const session = await Auth.currentSession().catch(() => null)
    //     let headers = {}

    //     if ( session ) {
    //       const accessToken = session.getAccessToken()

    //       if ( accessToken ) {
    //         console.log("Adding 'authorization' header")
    //         headers["authorization"] = accessToken.getJwtToken()
    //       }
          
    //     }

    //     return headers
    //   }
    // }
});

applyPolyfills().then(() => {
  defineCustomElements(window);
});

const app = createApp(App);
// app.config.isCustomElement = tag => tag.startsWith('amplify-');
//  >> configured "via vue.config.js"
app.mount('#app');










