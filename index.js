import { config } from "./config/config.js";
import tmi from "tmi.js";

let { user, token, channels, spam, message = "ppL", repeat = 30, count = 15 } = config;

// change user_id
const user_id = "603173186";

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
  client.on("join", (channel) => {
    for (let k = 0; k < count; k++) {
      client.say(channel, message.repeat(repeat));
    }

    client.disconnect();

    setInterval(() => {
      client.connect();
    }, 15 * 1000);
  });
}

client.on("message", (channel, tags, message, self) => {
  if (self || !message.startsWith(`?`)) return;

  const arr = message.slice(1).split(" ");
  const cmd = arr[0];

  const num = arr[1];
  const arg = arr[2];

  if (cmd === "spam" && tags["user-id"] === user_id) {
    for (let i = 0; i < num; i++) {
      client.say(channel, `${arg}`);
    }
  }
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.toLowerCase() === `?ping` && tags["user-id"] === user_id) {
    client.say(channel, `@${tags.username}, pong`);
  }
});
