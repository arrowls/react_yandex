export default function Ad() {
    const ad = {src: 'https://source.unsplash.com/random/800x100'}; // axios.get('some Yandex api');
    return (
        <img src={ad.src} alt=""/>
    )
}
