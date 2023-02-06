export default function NewsItems({news}) {
    return (
        <div>
            {news.map((item) =>
                <div className="l-news__item">
                    {item}
                    <span className="l-news__item-img">@</span>
                </div>
            )}
        </div>
    )
}
