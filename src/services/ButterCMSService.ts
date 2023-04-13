import Butter from "buttercms";


export let butterService: any = undefined;
try {
    const apiKey = String("be66a8821d3ee0d8d370176b0c36d591824d35bf");
    const preview = import.meta.env.VITE_APP_BUTTER_CMS_PREVIEW !== "false";
    butterService = Butter(apiKey, preview);
} catch (error) {
    console.error(error);
}

