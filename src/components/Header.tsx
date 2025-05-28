import { staticAsset } from "../lib";

export default function Header() {
    return (
        <header>
            <div className="circular-shade">
                <img src={staticAsset("/images/icon-star.svg")} alt="star icon"/>
            </div>
        </header>
    )
}
