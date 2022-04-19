import { DiscordAuthController } from "./authcontrollers/discordauthcontroller";
export { DiscordAuthController } from "./authcontrollers/discordauthcontroller";

import { Router, DefaultHandlers } from "pioche";
import { easyPreflight } from "./middleware";

Router.useBefore(easyPreflight);
// Router.register(DiscordAuthController, {binding: "DISCORDAUTH"});

export default DefaultHandlers;