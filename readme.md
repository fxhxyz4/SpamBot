## Spam bot for [twitch.tv](twitch.tv) ![chatting)](https://cdn.betterttv.net/emote/618c77311f8ff7628e6d5b8f/1x.gif)

### Features:

- ### [auto-spam](https://github.com/fxhxyz4/spam_bot/edit/main/readme.md#enable-auto-spam-change-this-line-in-config).
- ### [commands](https://github.com/fxhxyz4/spam_bot/edit/main/readme.md#commands-1).

#

### Commands:

| Cmd       | Desc                 | Example           |
| --------- | -------------------- | ----------------- |
| **?ping** | pong                 | ?ping             |
| **?spam** | Spam message in chat | ?spam 5 AlienPls3 |

#

### installation

```
git clone https://github.com/fxhxyz4/spam_bot.git
cd spam_bot
code .
```

#

### install packages

```
npm install
```

#

### rename `config.exmaple.js` to `config.js`

#

### edit config

```js
user: "YOUR-TWITCH-USER-NAME",
token: "oauth:token", // https://twitchapps.com/tmi/
channels: ["#channel", "#channel2", "#channel3"], // channel list.
// example: ["#xqc", "#forsen", "#fxhxyz"]
```

#

### enable auto-spam. change this line in config

```js
spam: true;
```

#

### configure auto-spam

```js
spam: true, // enable
message: "Tasty", // message
repeat: 50, // repeat message in 1 line
count: 20, // amount messages
```

#

### change user_id in index.js

```
const user_id = "YOUR_TWITCH_ID";
```

#

### development

```
npm run dev
```

#

### production

```
npm run server
```

#

### License [MIT](./license)
