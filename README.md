# aws-amplify-js-ticket-8545-example

Ticket: [https://github.com/hedgehogs-mind/aws-amplify-js-ticket-8545-example.git](https://github.com/hedgehogs-mind/aws-amplify-js-ticket-8545-example.git)

## How did I setup this example project?

### 1. Create Vue Project

```
vue create test_project

> features selected manuall
  - only babel
> vue version
  - 3.x
> Configs
  - dedicated config files
> installing with yarn
```

### 2. Removed unnecessary stuff out of scaffolded vue app

... trivial ...

### 3. Created amplify project

__A__: `amplify init`

<details>
  <summary>Console output</summary>
  
  ```
  % amplify init
  Note: It is recommended to run this command from the root of your app directory
  ? Enter a name for the project awsamplifyjsticket85
  The following configuration will be applied:

  Project information
  | Name: awsamplifyjsticket85
  | Environment: dev
  | Default editor: Visual Studio Code
  | App type: javascript
  | Javascript framework: vue
  | Source Directory Path: src
  | Distribution Directory Path: dist
  | Build Command: npm run-script build
  | Start Command: npm run-script serve

  ? Initialize the project with the above configuration? No
  ? Enter a name for the environment dev
  ? Choose your default editor: Visual Studio Code
  ? Choose the type of app that you're building javascript
  Please tell us about your project
  ? What javascript framework are you using vue
  ? Source Directory Path:  src
  ? Distribution Directory Path: dist
  ? Build Command:  yarn build
  ? Start Command: yarn serve
  Using default provider  awscloudformation
  ? Select the authentication method you want to use: AWS profile

  For more information on AWS Profiles, see:
  https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

  ? Please choose the profile you want to use default
  Adding backend environment dev to AWS Amplify Console app: __*obfuscated*__
  ⠴ Initializing project in the cloud...

  CREATE_IN_PROGRESS amplify-awsamplifyjsticket85-dev-212405 AWS::CloudFormation::Stack Tue Jul 06 2021 21:24:09 GMT+0200 (GMT+02:00) User Initiated             
  CREATE_IN_PROGRESS AuthRole                                AWS::IAM::Role             Tue Jul 06 2021 21:24:12 GMT+0200 (GMT+02:00)                            
  CREATE_IN_PROGRESS UnauthRole                              AWS::IAM::Role             Tue Jul 06 2021 21:24:12 GMT+0200 (GMT+02:00)                            
  CREATE_IN_PROGRESS DeploymentBucket                        AWS::S3::Bucket            Tue Jul 06 2021 21:24:12 GMT+0200 (GMT+02:00)                            
  CREATE_IN_PROGRESS AuthRole                                AWS::IAM::Role             Tue Jul 06 2021 21:24:12 GMT+0200 (GMT+02:00) Resource creation Initiated
  CREATE_IN_PROGRESS UnauthRole                              AWS::IAM::Role             Tue Jul 06 2021 21:24:13 GMT+0200 (GMT+02:00) Resource creation Initiated
  CREATE_IN_PROGRESS DeploymentBucket                        AWS::S3::Bucket            Tue Jul 06 2021 21:24:13 GMT+0200 (GMT+02:00) Resource creation Initiated
  ⠸ Initializing project in the cloud...

  CREATE_COMPLETE AuthRole   AWS::IAM::Role Tue Jul 06 2021 21:24:31 GMT+0200 (GMT+02:00) 
  CREATE_COMPLETE UnauthRole AWS::IAM::Role Tue Jul 06 2021 21:24:31 GMT+0200 (GMT+02:00) 
  ⠸ Initializing project in the cloud...

  CREATE_COMPLETE DeploymentBucket                        AWS::S3::Bucket            Tue Jul 06 2021 21:24:35 GMT+0200 (GMT+02:00) 
  CREATE_COMPLETE amplify-awsamplifyjsticket85-dev-****** AWS::CloudFormation::Stack Tue Jul 06 2021 21:24:37 GMT+0200 (GMT+02:00) 
  ✔ Successfully created initial AWS cloud resources for deployments.
  ✔ Initialized provider successfully.
  Initialized your environment successfully.

  Your project has been successfully initialized and connected to the cloud!

  Some next steps:
  "amplify status" will show you what you've added already and if it's locally configured or deployed
  "amplify add <category>" will allow you to add features like user login or a backend API
  "amplify push" will build all your local backend resources and provision it in the cloud
  "amplify console" to open the Amplify Console and view your project status
  "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

  Pro tip:
  Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
  ```
</details>

<br><br>
__B:__ Added auth via `amplify auth add`

<details>
  <summary>Console output</summary>

  ```
  % amplify auth add
  Using service: Cognito, provided by: awscloudformation
 
  The current configured provider is Amazon Cognito. 
 
  Do you want to use the default authentication and security configuration? Manual configuration
  Select the authentication/authorization services that you want to use: User Sign-Up & Sign-In only (Best used with a cloud API only)
  Please provide a friendly name for your resource that will be used to label this category in the project: awsamplifyjsticket__**obfuscated**__
  Please provide a name for your user pool: awsamplifyjsticket853__**obfuscated**__
  Warning: you will not be able to edit these selections. 
  How do you want users to be able to sign in? Username
  Do you want to add User Pool Groups? Yes
  ? Provide a name for your user pool group: Authors
  ? Do you want to add another User Pool Group No
  ✔ Sort the user pool groups in order of preference · Authors
  Do you want to add an admin queries API? No
  Multifactor authentication (MFA) user login options: OFF
  Email based user registration/forgot password: Enabled (Requires per-user email entry at registration)
  Please specify an email verification subject: Your super code
  Please specify an email verification message: Your super duper code is: {####}
  Do you want to override the default password policy for this User Pool? Yes
  Enter the minimum password length for this User Pool: 6
  Select the password character requirements for your userpool: 
  Warning: you will not be able to edit these selections. 
  What attributes are required for signing up? Email
  Specify the app's refresh token expiration period (in days): 30
  Do you want to specify the user attributes this app can read and write? No
  Do you want to enable any of the following capabilities? 
  Do you want to use an OAuth flow? No
  ? Do you want to configure Lambda Triggers for Cognito? No
  Successfully added auth resource awsamplifyjsticket853__**obfuscated**__ locally

  Some next steps:
  "amplify push" will build all your local backend resources and provision it in the cloud
  "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
  ```
</details>

<br><br>
__C:__ Added graphql api via `amplify api add`

<details>
  <summary>Console output</summary>

  ```
  % amplify api add
  ? Please select from one of the below mentioned services: GraphQL
  ? Provide API name: awsamplifyjsticket85
  ? Choose the default authorization type for the API API key
  ? Enter a description for the API key: pickle_rick_key
  ? After how many days from now the API key should expire (1-365): 7
  ? Do you want to configure advanced settings for the GraphQL API Yes, I want to make some additional changes.
  ? Configure additional auth types? Yes
  ? Choose the additional authorization types you want to configure for the API Amazon Cognito User Pool
  Cognito UserPool configuration
  Use a Cognito user pool configured as a part of this project.
  ? Enable conflict detection? No
  ? Do you have an annotated GraphQL schema? No
  ? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

  The following types do not have '@auth' enabled. Consider using @auth with @model
          - Todo
  Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


  GraphQL schema compiled successfully.

  Edit your schema at /Users/peter/git/aws-amplify-js-ticket-8545-example/amplify/backend/api/awsamplifyjsticket85/schema.graphql or place .graphql files in a directory at /Users/peter/git/aws-amplify-js-ticket-8545-example/amplify/backend/api/awsamplifyjsticket85/schema
  ? Do you want to edit the schema now? No
  Successfully added resource awsamplifyjsticket85 locally

  Some next steps:
  "amplify push" will build all your local backend resources and provision it in the cloud
  "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
  ```
</details>

<br><br>
__D:__ Edited schema to:

```
type BlogPost
  @model
  @auth(
    rules: [
      {
        allow: groups,
        groups: ["Authors"]
      },
      {
        allow: public,
        operations: [read]
      }
    ]
  )
{
  id: ID!
  title: String!
  content: String!
}

```


<br><br>
__E:__ `amplify push` including __graphql codegen__

<details>
  <summary>Console output</summary>

  ```
  % amplify push
  ✔ Successfully pulled backend environment dev from the cloud.

  Current Environment: dev

  | Category | Resource name                        | Operation | Provider plugin   |
  | -------- | ------------------------------------ | --------- | ----------------- |
  | Auth     | userPoolGroups                       | Create    | awscloudformation |
  | Auth     | awsamplifyjsticket853cf927003cf92700 | Create    | awscloudformation |
  | Api      | awsamplifyjsticket85                 | Create    | awscloudformation |
  ? Are you sure you want to continue? (Y/n) 
  peter@MacBook-Air-von-Peter aws-amplify-js-ticket-8545-example % 
  peter@MacBook-Air-von-Peter aws-amplify-js-ticket-8545-example % 
  peter@MacBook-Air-von-Peter aws-amplify-js-ticket-8545-example % 
  peter@MacBook-Air-von-Peter aws-amplify-js-ticket-8545-example % 
  peter@MacBook-Air-von-Peter aws-amplify-js-ticket-8545-example % 
  peter@MacBook-Air-von-Peter aws-amplify-js-ticket-8545-example % 
  peter@MacBook-Air-von-Peter aws-amplify-js-ticket-8545-example % amplify push
  ✔ Successfully pulled backend environment dev from the cloud.

  Current Environment: dev

  | Category | Resource name                        | Operation | Provider plugin   |
  | -------- | ------------------------------------ | --------- | ----------------- |
  | Auth     | userPoolGroups                       | Create    | awscloudformation |
  | Auth     | awsamplifyjsticket853cf927003cf92700 | Create    | awscloudformation |
  | Api      | awsamplifyjsticket85                 | Create    | awscloudformation |
  ? Are you sure you want to continue? Yes

  GraphQL schema compiled successfully.

  Edit your schema at /Users/peter/git/aws-amplify-js-ticket-8545-example/amplify/backend/api/awsamplifyjsticket85/schema.graphql or place .graphql files in a directory at /Users/peter/git/aws-amplify-js-ticket-8545-example/amplify/backend/api/awsamplifyjsticket85/schema
  ? Do you want to generate code for your newly created GraphQL API Yes
  ? Choose the code generation language target javascript
  ? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.js
  ? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
  ? Enter maximum statement depth [increase from default if your schema is deeply nested] 10
  ⠦ Updating resources in the cloud. This may take a few minutes...

  ... removed the deployment logs
  ```
</details>


<br><br>
__F:__ Setting up Vue app.
- `Amplify.configure` in `main.js`
- Installing `aws-amplify/ui-components`.
- Using examples from [>> here <<](https://docs.amplify.aws/ui/auth/authenticator/q/framework/vue#recommended-usage).
- Everything in file `src/App.vue` including buttons to load data and create data.


### 3. What came next?

1. Creating user account via amplify authenticator component (sign up).
2. Added testuser to group "Authors" via Cognito console.
3. Fixed error "regeneratorRuntime is not defined" throug import in `main.js`.
3. Testing the app.

### 4. Testing app as is

Result:

### 5. Testing app with graphql_headers supplied

Remove comments in `main.js` to enable `API`-config withing `Amplify.configure`.
The additional config adds the jwt, if present, to a graphql request.