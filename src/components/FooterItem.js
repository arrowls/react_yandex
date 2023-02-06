export default function FooterItem({item}) {
    return (
        <>
        <div className="l-footer-item">
            <div className="l-footer-item__title">
                {item.title}
            </div>
            <div className="l-footer-item__content">
                {item.content}
            </div>
        </div>
        </>
    )
}
