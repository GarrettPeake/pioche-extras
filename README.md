 <div>
 <p align="center">
  <a href="https://github.com/GarrettPeake/pioche-extras" title="View Project Source"><img width="375" src="https://github.com/GarrettPeake/pioche/blob/master/readme_logo.png" />-extras</a>
 </p>
 
 <div align="center">
  <p>**PIOCHE/PIOCHE-EXTRAS IS A WORK IN PROGRESS AND DOES NOT YET FUNCTION**</p><p>TypeScript first framework for <a href='https://workers.cloudflare.com'>Cloudflare Workers</a> enabling ⚡lightning⚡ fast development and execution</p>
</div>
<a href="https://www.npmjs.com/package/pioche-extras"><img src="https://badgen.net/npm/v/pioche-extras?color=blue" alt="npm version"></a>
</div>

Note: This repository is extra features built on top of pioche, to use these features [install pioche first](https://github.com/GarrettPeake/pioche)

## 🔋 Tree Shakeable Batteries For Pioche
 - [ ] Password & OAuth controllers
 - [x] WebSocket logging utility
 - [ ] Configurable CORS middleware

## 💾 Installation

To install just run
```
npm install pioche-extras
```
Then to implement the features just use them as you would normal pioche controllers and middleware
```ts
import { DiscordAuthController } from 'pioche-extras';
export { DiscordAuthController } from 'pioche-extras';
...
Router.register(DiscordAuthController, {binding = "DISCORDAUTH"});
...
```
Now you can login to your API using discord!

## People

Pioche was created by [Garrett Peake](https://github.com/GarrettPeake)

## License
 [MIT](https://github.com/GarrettPeake/pioche/blob/master/LICENSE)