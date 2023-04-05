import Butter from "buttercms";
// export const butterService = Butter(import.meta.env.VITE_APP_BUTTERCMS_API_KEY);


export let butterService: any = undefined;
try {
    const apiKey = String('abcd');
    const preview = import.meta.env.VITE_APP_BUTTER_CMS_PREVIEW !== "false";
    butterService = Butter(apiKey);
} catch (error) {
    console.error(error);
} 