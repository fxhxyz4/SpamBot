## Spam bot for [twitch.tv](twitch.tv) ![chatting)](https://cdn.betterttv.net/emote/618c77311f8ff7628e6d5b8f/1x.gif)

### Features:

- ### [auto-spam](https://github.com/fxhxyz4/spam-bot/edit/main/readme.md#enable-auto-spam-set-to-true).
- ### [commands](https://github.com/fxhxyz4/spam_bot#commands-1).

- ### [auto-ban](https://github.com/fxhxyz4/spam-bot/edit/main/readme.md#enable-auto-ban-set-to-true-in-configjs).

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
id: "YOUR-TWITCH-ID",
user: "YOUR-TWITCH-USER-NAME",
token: "oauth:token", // https://twitchapps.com/tmi/ | https://chatix.com/token
channels: ["#channel", "#channel2", "#channel3"], // channel list.
// example: ["#xqc", "#forsen", "#fxhxyz"]
```

#

### enable auto-ban. set to true in config.js

```js
ban: true,
```

#

### add words to auto-ban.

```js
blist: ["word1", "word2"],
```

#

### enable auto-spam. set to true

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

### development

```
npm run dev
```

#

### deploy

```
npm run dep
```

#
