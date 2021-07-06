<template>
  <div>
    Example for <code>aws-amplify/amplify-js</code> Ticket #8545.
  </div>

  <hr>

  <div class="explained">
    <h1>Read data section. Reading data should be possible just with api key.</h1>

    <div>
      <button @click="loadBlogPosts" :disabled="queryLoading">Load BlogPosts</button>
      <span v-if="queryLoading" style="margin-left: 1rem;">loading ...</span>

      <br><br>

      <label>JSON result:</label>
      <textarea v-model="blogPostsJson" class="json">
      </textarea>
    </div>
  </div>

  <div class="explained">
    <h1>Auth section. Here you can should be able to create a new post once you logged in as a user of group "Authors".</h1>

    <div>
      <div v-if="authState !== 'signedin'">You are signed out.</div>
      <amplify-authenticator>
        <div v-if="authState === 'signedin' && user">
          <div>Username: <code>{{user.username}}</code></div>
          <br>

          <div>E-Mail: <code>{{user.attributes.email}}</code></div>
          <br><br>

          <div>
            Cognito Groups of User ({{userGroups.length}}):
            <ul>
              <li v-for="(group, index) in userGroups" :key="index">
                <code>{{group}}</code>
              </li>
            </ul>
          </div>
        </div>

        <hr>

        <div>
          <button style="margin-right: 2rem;" @click="createBlogPostPlain" :disabled="createLoading">
            Create BlogPost (plain API call)
          </button>

          <button @click="createBlogPostWithAuthMode" :disabled="createLoading">
            Create BlogPost (with authMode parameter)
          </button>

          <span v-if="createLoading" style="margin-left: 1rem;">loading ...</span>

          <br><br>

          <template v-if="createResultExisting">
            <code v-if="!createResultContainsUnauthorized" class="success">
              Result does NOT contain "unauthorized"
            </code>

            <code v-else class="error">
              Result CONTAINS "unauthorized"
            </code>
            <br><br>
          </template>

          <label>JSON result:</label>
          <textarea v-model="createBlogPostJson" class="json">
          </textarea>
        </div>

        <hr>

        <amplify-sign-out></amplify-sign-out>
      </amplify-authenticator>
    </div>
  </div>

</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { API, Auth } from "aws-amplify"
import { listBlogPosts } from "./graphql/queries"
import { createBlogPost } from "./graphql/mutations"

export default {
  name: 'App',
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      blogPostsJson: "",
      createBlogPostJson: "",
      queryLoading: false,
      createLoading: false,
      userGroups: []
    }
  },
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;

      if ( authState === 'signedin' ) {
        this.createBlogPostJson = ""
        this.createLoading = false
        this.userGroups = []

        // load groups
        Auth.currentSession().then((session) => {
          console.log(session)
          if ( session.accessToken &&
               session.accessToken.payload ||
               session.accessToken.payload["cognito:groups"] )
          {
            this.userGroups = session.accessToken.payload["cognito:groups"]
          } else {
            this.userGroups = ["__error_reading_groups__"]
          }
        })
      } else {
        // not authenticated
        this.userGroups = []
      }
    })
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  },
  computed: {
    createResultExisting() {
      return this.createBlogPostJson.trim().length > 0
    },
    createResultContainsUnauthorized() {
      return this.createBlogPostJson.toLowerCase().includes("unauthorized")
    }
  },
  methods: {
    async loadBlogPosts() {
      this.queryLoading = true
      this.blogPostsJson = ""

      await API.graphql({
        query: listBlogPosts
      }).then(result => {
        this.blogPostsJson = "success (then):\n\n"+JSON.stringify(result, " ", 4)
      }).catch((error) => {
        this.blogPostsJson = "error (catch):\n\n"+JSON.stringify(error, " ", 4)
      }).finally(() => {
        this.queryLoading = false
      })
    },

    async createBlogPostPlain() {
      this.createLoading = true
      this.createBlogPostJson = ""

      const randomSuffix = Math.ceil(Math.random() * 1000).toString() + " @ " + (new Date).getMilliseconds();
      await API.graphql({
        query: createBlogPost,
        variables: {
          input: {
            title: "Title: "+randomSuffix,
            content: "Content: "+randomSuffix
          }
        }
      }).then(result => {
        this.createBlogPostJson = "success (then):\n\n"+JSON.stringify(result, " ", 4)
      }).catch((error) => {
        this.createBlogPostJson = "error (catch):\n\n"+JSON.stringify(error, " ", 4)
      }).finally(() => {
        this.createLoading = false
      })
    },

    async createBlogPostWithAuthMode() {
      this.createLoading = true
      this.createBlogPostJson = ""

      const randomSuffix = Math.ceil(Math.random() * 1000).toString() + " @ " + (new Date).getMilliseconds();
      await API.graphql({
        query: createBlogPost,
        variables: {
          input: {
            title: "Title: "+randomSuffix,
            content: "Content: "+randomSuffix
          }
        },
        authMode: "AMAZON_COGNITO_USER_POOLS"
      }).then(result => {
        this.createBlogPostJson = "success (then):\n\n"+JSON.stringify(result, " ", 4)
      }).catch((error) => {
        this.createBlogPostJson = "error (catch):\n\n"+JSON.stringify(error, " ", 4)
      }).finally(() => {
        this.createLoading = false
      })
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 14px;
  font-family: monospace;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  padding: 2rem;
}

code {
  background: #444;
  color: white;
  font-weight: bolder;
  padding: 0.2em;
}

code.error {
  background: rgb(194, 10, 10);
  color: white;
}

code.success {
  background: rgb(6, 177, 71);
  color: white;
}

div.explained {
  margin: 2rem 0rem;
  border: 2px solid gray;
  border-radius: 0.4rem;
  padding: 0.5rem;
}

div.explained > h1 {
  font-size: 1.2rem;
}

div.explained > div {
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
  border-left: 4px solid teal;
}

textarea.json {
  width: 100%;
  overflow-y: visible;
  min-height: 15rem;
}

hr {
  margin: 1rem 0rem;
}
</style>
