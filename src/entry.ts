import { DiscordAuthController } from "./authcontrollers/discordauthcontroller";
export { DiscordAuthController } from "./authcontrollers/discordauthcontroller";

import { Router, handleFetch, handleScheduled } from "pioche";
import { easyPreflight } from "./middleware";

Router.useBefore(easyPreflight);
// Router.register(DiscordAuthController, {binding: "DISCORDAUTH"});

export default{handleFetch, handleScheduled};