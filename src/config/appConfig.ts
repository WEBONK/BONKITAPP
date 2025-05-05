interface AppConfig {
  websiteTitle: string;
  socialLinks: {
    xTwitter: string;
    github: string;
    gitbook: string;
  };
  contractAddress: string;
}

const appConfig: AppConfig = {
  websiteTitle: "BONK IT with AI",
  socialLinks: {
    xTwitter: "https://x.com/BonkItApp/",
    github: "https://github.com/WEBONK/BONKITAPP/",
    gitbook: "https://bonklabs.gitbook.io/bonkit/",
  },
  contractAddress: "So11111111111111111111111111111111111111112",
};

export default appConfig; 