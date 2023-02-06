import RegionToggle from "../components/RegionToggle";
import NewsItems from "../components/NewsItems";
import Stocks from "../components/Stocks";

export default function News() {
    const news = ['Новость 1', 'Новость 2', 'Новость 3', 'Новость 4']; // axios.get('some yandex api');
    return (
        <div>
            <RegionToggle />
            <NewsItems news={news}/>
            <Stocks />
        </div>
    )
}
