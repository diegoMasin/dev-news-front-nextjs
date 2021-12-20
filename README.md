![Alt text](https://github.com/diegoMasin/maximumtech/blob/master/assets/img/logo-colorida.png)<br>

# DevNews in Nextjs with OAuth Github + FaunaDB + Stripe + Prismic

###### This training is a news project that will be consuming some public apis including a subscription payments api.

**Install Project**

```
yarn
```

**Run Project Local**

```
yarn dev
```

**Run Project's Tests**

```
yarn test
```

**Build Project**

```
yarn build
```

**Run Project Production**

```
yarn start
```

![Alt text](https://github.com/diegoMasin/dev-news-front-nextjs/blob/main/public/images/FlowchartDevNews.png)<br>

### How to configure .env

**Stripe** -
Create account in: stripe.com > register all your information, account name,...

###### STRIPE_API_KEY=

```
Click: developers > API Keys > Reveal test key
```

###### NEXT_PUBLIC_STRIPE_PUBLIC_KEY=

```
Click: developers > API Keys > Copy public key
```

###### STRIPE_WEBHOOK_SECRET=

```
Click: developers > Webhooks > Test in local enviroment >
> follow steps for install CLI > Copy Key in your SO's Terminal
```

**GitHub** -
On your Github, go to settings and click: Developer settings > OAuth Apps > New OAuth App
Save all registers.

###### GITHUB_CLIENT_ID=

```
Take Client ID
```

###### GITHUB_SECRET_ID=

```
Generate Client secrets and Copy Client ID.
Be careful, if you lose the secret, you'll have to create another one.
```

**FaunaDB** -
Create account on FaunaDB. Create Database. Create collections: users (email, stripe_customer_id) and subscriptions (id, userId, status, priceId). Create Indexes:

- subscription_by_id: data.id
- subscription_by_status: data.status
- subscription_by_user_ref: data.userId
- user_by_email: data.email
- user_by_stripe_customer_id: data.stripe_customer_id

###### FAUNADB_KEY=

```
Go to Side Menu: Security > New Key > Copy Secret e paste here
```

**NextAuth**

###### NEXTAUTH_SECRET=

```
For now in a local environment, use any code, generate one here: https://djecrety.ir/
```

**Primic CMS** -
Create account. Create Custom Types (UID, Title, Content with Rich Text). Set type Repeatable and name as "Post".
Create some documents on side menu Documents.

###### PRISMIC_ENDPOINT=

```
Go to Settings > Api & Security > copy "entry point for your api access"
```

###### PRISMIC_ACCESS_TOKEN=

```
Go to Settings > Generate and copy a permanent master access tokens
```
