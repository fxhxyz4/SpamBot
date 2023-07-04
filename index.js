import { config } from "./config/config.js";
import tmi from "tmi.js";

let {
  id,
  user,
  prefix,
  token,
  channels,
  ban,
  blist,
  spam,
  message = "ppL",
  repeat = 30,
  count = 15
} = config;

const opts = {
  options: {
    debug: true,
  },
  identity: {
    username: user,
    password: token,
  },

  channels: channels,
};

const client = new tmi.client(opts);
client.connect();

if (spam === true) {
  let array = message.split("");
  let i = array[0];

  let msg = array.join("").replace(i, ` ${i}`);
  let resMsg = msg.repeat(repeat);

  client.on("join", (channel) => {
    for (let k = 0; k < count; k++) {
      client.say(channel, resMsg);
    }

    client.disconnect();

    setInterval(() => {
      client.connect();
    }, 15 * 1000);
  });
}

if (ban === true) {
  client.on("message", banWord);
}

client.on("message", (channel, tags, message, self) => {
  if (self || !message.startsWith(prefix)) return;

  const arr = message.slice(1).split(" ");
  const cmd = arr[0];

  const num = arr[1];
  const arg = arr[2];

  if (cmd === "spam" && tags["user-id"] === id) {
    for (let i = 0; i < num; i++) {
      client.say(channel, `${arg}`);
    }
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self || !message.startsWith(prefix)) return;

  const arr = message.slice(1).split(" ");
  const cmd = arr[0];

  if (cmd === "ping" && tags["user-id"] === id) {
    client.say(channel, `@${tags.username}, pong`);
  }
});

function banWord(channel, username, message) {
  let shouldSendMessage = false;
  message = message.toLowerCase();

  shouldSendMessage = blist.some((blockedWord) => message.includes(blockedWord.toLowerCase()));
  if (shouldSendMessage) {
    client
      .ban(channel, username.username)
      .then((d) => {})
      .catch((e) => {});

    client.say(channel, `${username.username}, banned`);
  }
}
