/**
 * Real service icons via favicon endpoints (stable, no bundler imports).
 * We use Google S2 favicon service for consistent sizing.
 */
import anthropicIcon from "../assets/tool-icons/anthropic-icon.svg";
import amocrmLogo from "../assets/tool-icons/amocrm.svg";

const s2 = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

export const TOOL_ICON_BY_NAME = {
  Amplitude: s2("amplitude.com"),
  "Google Analytics": s2("analytics.google.com"),
  UXcam: s2("uxcam.com"),
  OneSignal: s2("onesignal.com"),
  AmoCRM: amocrmLogo,
  Adapty: s2("adapty.io"),
  AppsFlyer: s2("appsflyer.com"),
  Qonversion: s2("qonversion.io"),
  AppStoreConnect: s2("developer.apple.com"),
  PlayConsole: s2("play.google.com"),
  Claude: anthropicIcon,
  Typeform: s2("typeform.com"),
  Web2Wave: s2("web2wave.com"),
  WordPress: s2("wordpress.com"),
  Figma: s2("figma.com"),
  Miro: s2("miro.com"),
  Jira: s2("atlassian.com"),
  Asana: s2("asana.com"),
  Notion: s2("notion.so"),
  Trello: s2("trello.com")
};

