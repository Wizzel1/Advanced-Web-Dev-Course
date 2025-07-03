class SettingsManager {
    private static instance: SettingsManager;
    private settings: Record<string, string> = {};

    private constructor() { }

    public static getInstance(): SettingsManager {
        if (!SettingsManager.instance) {
            SettingsManager.instance = new SettingsManager();
        }
        return SettingsManager.instance;
    }

    public getSetting(key: string): string {
        return this.settings[key];
    }

    public setSetting(key: string, value: string) {
        this.settings[key] = value;
    }

    public resetSettings() {
        this.settings = {};
    }
}

const settingsManager = SettingsManager.getInstance();
settingsManager.setSetting("theme", "dark");
console.log(settingsManager.getSetting("theme"));

settingsManager.resetSettings();