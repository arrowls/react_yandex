import Logo from '../components/Logo';
import SearchBar from "../components/SearchBar";
import RandomHint from '../components/RandomHint';

export default function Search() {
    return (
        <div className="l-search">
            <Logo />
            <SearchBar />
            <RandomHint />
        </div>
    )
}
