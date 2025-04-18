import fetchData from "@/app/hooks/fetchCurrencyData";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate"

const Homepage = async () => {
    const [dataInfos, logoInfos] = await fetchData();
    return (
        <HomeTemplate dataInfos={dataInfos} logoInfos={logoInfos} />
    )
}

export default Homepage