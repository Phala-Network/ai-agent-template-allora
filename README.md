<div align="center">
  <a href="https://github.com/Phala-Network/ai-agent-template-allora">
    <h1>AI Agent Contract Template with Allora</h1>
    <img height="320" src="./public/AI-Agent-Contract.jpg" />
    <br />
  </a>
  <p align="center">
    Host your AI Agent Contract on Phala's decentralized serverless cloud.
    <br />
    <a href="https://github.com/Phala-Network/ai-agent-template-allora"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://agents.phala.network/ipfs/QmYYXm467aK4Ey1zGwVW7SiTao6FKzXGo8E6c8v8DqnqVe/0?key=ff8b15ee63157768">View Demo</a>
    ·
    <a href="https://github.com/Phala-Network/ai-agent-template-allora/issues">Report Bug</a>
    ·
    <a href="https://discord.gg/DXGGJajW">Discord</a>
  </p>

  <h3>Architecure Overview</h3>
  <img height="320" src="./public/ai-agent-architecture.jpg" />
</div>

## 🤖 What Is This?!

<div align="center">
  <img height="240" src="https://www.jlwranglerforums.com/forum/attachments/zoolander-gif.325299/">
</div>

The Allora AI Agent template is a **MINIMAL** template to build an AI Agent that can be hosted on Phala Network's decentralized hosting protocol. Unlike Vercel or other FaaS, it allows you to publish your AI Agent compiled code to IPFS and hosts it on a fully decentralized FaaS cloud with the following benefits:

- 💨 Ship Fast: Build and ship with familiar toolchain in minutes
- ⛑️ Secure: Execution guarded by rock solid TEE / Intel SGX
- 🔒 Private: Host API keys and user privacy at ease
- 💎 Unstoppable: Powered by IPFS and Phala's 35k+ decentralized TEE workers

[//]: # (<img width="320" src="https://media1.tenor.com/m/NBtFH5F9QTgAAAAd/what-is-my-purpose-butter.gif" />)

## Getting Started
### Prepare
Install dependencies
```shell
npm install
```

### Testing Locally
Create `.env` file and add your Allora API Key
```shell
cp .env.example .env
```

In `.env` file replace `YOUR_ALLORA_KEY` with your API Key
```text
ALLORA_API_KEY="YOUR_ALLORA_KEY"
```

Build your Agent
```shell
npm run build
```

Test your Agent locally
```shell
npm run test
```

Expected Test Results
```shell
INPUT: {"method":"GET","path":"/ipfs/QmVHbLYhhYA5z6yKpQr4JWr3D54EhbSsh7e7BFAAyrkkMf","queries":{},"secret":{"alloraApiKey":"UP-c6ebdef4703d412881a3f349"},"headers":{}}
{"request_id":"e96a7612-debb-47ed-8465-1762365b0357","status":true,"data":{"signature":"0xbfb5d4e16e86180ecba10823f5a99eb08184a22b6433a68b40391ac50efcd94c247474c804b531d117ec10e61bae22a97fb9c9a3a06bf9634389306f2f72ae8e1b","inference_data":{"network_inference":"68577670693603340000000","confidence_interval_percentiles":[],"confidence_interval_values":[],"topic_id":"3","timestamp":1722570312,"extra_data":"0xe98e2830be1a7e4156d656a7505e65d08c67660dc618072422e9c78053c261e9"}}}
{"request_id":"d32d5d95-af6f-4b4b-b856-98d64eeeaf25","status":true,"data":{"signature":"0x17276c6b64785551eea46cb25e74d9c680bf79cafdfeef8ffba7ce98e48f2a081ed604b6145eae61d1698445bbbe264f15d375747c0ef645adbf42015050e1ba1c","inference_data":{"network_inference":"67704219253489110000000","confidence_interval_percentiles":[],"confidence_interval_values":[],"topic_id":"4","timestamp":1722570312,"extra_data":"0xe98e2830be1a7e4156d656a7505e65d08c67660dc618072422e9c78053c261e9"}}}
GET RESULT: {
  status: 200,
  body: '\n' +
    '    <!DOCTYPE html>\n' +
    '    <html lang="en">\n' +
    '        <head>\n' +
    '            <meta charset="utf-8" />\n' +
    '            <title>AI Agent Contract Demo UI</title>\n' +
    '        </head>\n' +
    '        <body>\n' +
    '            <div align="center">\n' +
    '                <p>"Allora AI Agent Contract hosted on <a href="https://github.com/Phala-Network/ai-agent-template-allora">Phala Network</a>, an AI Coprocessor for hosting AI Agents."</p>\n' +
    '                <img src="https://i.imgur.com/8B3igON.png" width="600" alt="AI Agent Contract" />\n' +
    '                <p>BTC Price Prediction in 10 mins: $68577.67069360334</p>\n' +
    '                <p>BTC Price Prediction in 24 hours: $67704.21925348911</p>\n' +
    '            </div>\n' +
    '        </body>\n' +
    '    </html>',
  headers: {
    'Content-Type': 'text/html; charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
}

To test in the SideVM playground go to https://phat.phala.network/contracts/view/0xf0a398600f02ea9b47a86c59aed61387e450e2a99cb8b921cd1d46f734e45409

Connect you polkadot.js account and select 'run_js' with the parameters:
- engine: SidevmQuickJSWithPolyfill
- js_code: Source code text of dist/index.ts
- args: {"method":"GET","path":"/ipfs/QmVHbLYhhYA5z6yKpQr4JWr3D54EhbSsh7e7BFAAyrkkMf","queries":{},"secret":{"alloraApiKey":"ALLORA_API_KEY"},"headers":{}}
Watch video here for to see the visual steps of testing in Sidevm playground: https://www.youtube.com/watch?v=fNqNeLfFFME

Make sure to replace queries and secret with your values compatible with your AI Agent Contract.```
```

### Publish Your AI Agent
Upload your compiled AI Agent code to IPFS.
```shell
npm run publish-agent
```

Upon a successful upload, the command should show the URL to access your AI Agent.
```shell
> phat-gpt-template@0.0.1 publish-agent
> phat-fn build --experimentalAsync && tsx scripts/publish.ts

✓ Compiled successfully.
  72.73 KB  dist/index.js

    $$\     $$\       $$\                 $$\                         $$\       
    $$ |    $$ |      \__|                $$ |                        $$ |      
  $$$$$$\   $$$$$$$\  $$\  $$$$$$\   $$$$$$$ |$$\  $$\  $$\  $$$$$$\  $$$$$$$\  
  \_$$  _|  $$  __$$\ $$ |$$  __$$\ $$  __$$ |$$ | $$ | $$ |$$  __$$\ $$  __$$\ 
    $$ |    $$ |  $$ |$$ |$$ |  \__|$$ /  $$ |$$ | $$ | $$ |$$$$$$$$ |$$ |  $$ |
    $$ |$$\ $$ |  $$ |$$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$   ____|$$ |  $$ |
    \$$$$  |$$ |  $$ |$$ |$$ |      \$$$$$$$ |\$$$$$\$$$$  |\$$$$$$$\ $$$$$$$  |
     \____/ \__|  \__|\__|\__|       \_______| \_____\____/  \_______|\_______/ 

 💎 thirdweb v0.14.12 💎

- Uploading file to IPFS. This may take a while depending on file sizes.

✔ Successfully uploaded file to IPFS.
✔ Files stored at the following IPFS URI: ipfs://QmayeZxHXwJxABXaNshP6j8uBE6RedkhmEgiaXd1w1Jib3
✔ Open this link to view your upload: https://bafybeif3y2jpswse2n6s2cikwyjmbak4cxlpm6vrmgobqkgsmmn34l6m4i.ipfs.cf-ipfs.com/

AI Agent Contract deployed at: https://agents.phala.network/ipfs/QmayeZxHXwJxABXaNshP6j8uBE6RedkhmEgiaXd1w1Jib3

Make sure to add your secrets to ensure your AI-Agent works properly.
```

<details>
<summary>New to thirdweb?</summary>
We use <a href="https://thirdweb.com/dashboard/infrastructure/storage">thirdweb Storage</a> to host IPFS contents. If you are new to thirdweb, the command will guide you to create your account or login to your existing account from the browser. (You may need to forward port 8976 if you are accessing a remote console via SSH.)
</details>

### Access the Published AI Agent

Once published, your AI Agent is available at the URL: `https://agents.phala.network/ipfs/<your-cid>`. You can get it from the "Publish to IPFS" step.

You can test it with `curl`.

```bash
curl https://agents.phala.network/ipfs/<your-cid>
```

### Add Secrets

By default, all the compiled JS code is visible for anyone to view if they look at IPFS CID. This makes private info like API keys, signer keys, etc. vulnerable to be stolen. To protect devs from leaking keys, we have added a field called `secret` in the `Request` object. It allows you to store secrets in a vault for your AI Agent to access.

<details>
<summary><b>How to Add Secrets</b></summary>

The steps to add a `secret` is simple. We will add the [Allora](https://developer.upshot.xyz/) API Key in this example by creating a secret JSON object with the `alloraApiKey`:

```json
{"alloraApiKey": "<ALLORA_API_KEY>"}
```

Then in your frame code, you will be able to access the secret key via `req.secret` object:

```js
async function POST(req: Request): Promise<Response> {
    const apiKey = req.secret?.alloraApiKey
}
```

> **Note**: Before continuing, make sure to publish your compiled AI Agent JS code, so you can add secrets to the CID.

**Open terminal**
Use `curl` to `POST` your secrets to `https://agents.phala.network/vaults`. Replace `IPFS_CID` with the CID to the compile JS code in IPFS, and replace `<ALLORA_API_KEY>` with your Allora API key. Note that you can name the secret field name something other than `alloraApiKey`, but you will need to access the key in your `index.ts` file with the syntax `req.secret?.<your-secret-field-name> as string`

The command will look like this:
```shell
curl https://agents.phala.network/vaults -H 'Content-Type: application/json' -d '{"cid": "IPFS_CID", "data": {"alloraApiKey": "<ALLORA_API_KEY>"}}'
# Output:
# {"token":"e85ae53d2ba4ca8d","key":"e781ef31210e0362","succeed":true}
```

The API returns a `token` and a `key`. The `key` is the id of your secret. It can be used to specify which secret you are going to pass to your frame. The `token` can be used by the developer to access the raw secret. You should never leak the `token`.

To verify the secret, run the following command where `key` and `token` are replaced with the values from adding your `secret` to the vault.
```shell
curl https://agents.phala.network/vaults/<key>/<token>
```

Expected output:
```shell
{"data":{"alloraApiKey":"<ALLORA_API_KEY>"},"succeed":true}
```

If you are using secrets, make sure that your URL is set in the following syntax where `cid` is the IPFS CID of your compiled JS file and `key` is the `key` from adding secrets to your vault.
```text
https://agents.phala.network/ipfs/<cid>?key=<key>
```

Example:
https://agents.phala.network/ipfs/QmYYXm467aK4Ey1zGwVW7SiTao6FKzXGo8E6c8v8DqnqVe/0?key=ff8b15ee63157768

</details>

### Access Queries
To help create custom logic, we have an array variable named `queries` that can be accessed in the `Request` class. To access the `queries` array variable `chatQuery` value at index `0`, the syntax will look as follows:
```typescript
const query = req.queries.chatQuery[0] as string;
```
The example at https://agents.phala.network/ipfs/Qma2WjqWqW8wYG2tEQ9YFUgyVrMDA9VzvkkdeFny7Smn3R/0?key=686df81d326fa5f2&chatQuery=When%20did%20humans%20land%20on%20the%20moon will have a value of `When did humans land on the moon`. `queries` can have any field name, so `chatQuery` is just an example of a field name and not a mandatory name, but remember to update your `index.ts` file logic to use your expected field name.

## FAQ

<details>
<summary><b>What packages can I use in the AI Agent server?</b></summary>
<ul>
  <li>Most of the npm packages are supported: viem, onchainkit, ….</li>
  <li>Some packages with some advanced features are not supported:</li>
  <ul>
    <li>Large code size. Compiled bundle should be less than 500kb.</li>
    <li>Large memory usage, like image generation</li>
    <li>Web Assembly</li>
    <li>Browser only features: local storage, service workers, etc</li>
  </ul>
</ul>
</details>

<details>
<summary><b>What’s the spec of the Javascript runtime?</b></summary>
<ul>
  <li>The code runs inside a tailored <a href="https://bellard.org/quickjs/">QuickJS engine</a></li>
  <li>Available features: ES2023, async, fetch, setTimeout, setInterval, bigint</li>
  <li>Resource limits</li>
  <ul>
    <li>Max execution time ~120s</li>
    <li>Max memory usage: 16 mb</li>
    <li>Max code size: 500 kb</li>
    <li>Limited CPU burst: CPU time between async calls is limited. e.g. Too complex for-loop may hit the burst limit.</li>
  </ul>
</ul>
</details>

<details>
<summary><b>Why is the serverless platform secure?</b></summary>
<ul>
  <li>Your AI Agent code on is fully secure, private, and permissionless. Nobody can manipulate your program, steal any data from it, or censor it.</li>
  <li>Security: The code is executed in the decentralized TEE network running on Phala Network. It runs code inside a secure blackbox (called enclave) created by the CPU. It generates cryptographic proofs verifiable on Phala blockchain. It proves that the hosted code is exactly the one you deployed.</li>
  <li>Privacy: You can safely put secrets like API keys or user privacy on Phala Network. The code runs inside TEE hardware blackboxs. The memory of the program is fully encrypted by the TEE. It blocks any unauthorized access to your data.</li>
  <li>Learn more at <a href="https://phala.network">Phala Network Homepage</a></li>
</details>

<details>
<summary><b>What's TEE / Intel SGX?</b></summary>
<ul>
  <li><a href="https://collective.flashbots.net/t/tee-sgx-wiki/2019">TEE/SGX wiki</a></li>
  <li><a href="https://collective.flashbots.net/t/debunking-tee-fud-a-brief-defense-of-the-use-of-tees-in-crypto/2931">Debunking TEE FUD: A Brief Defense of The Use of TEEs in Crypto</a></li>
</details>
