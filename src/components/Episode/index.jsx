import "./index.css";

export const Episode = ({ num, title, guest }) => (
            <div className="episode">
                <div className="episode__num">{num}</div>
                <div className="episode__body">
                <div className="episode__title">{title}</div>
                <div className="episode__guest">host: {guest}</div>
            </div>
        </div>
    )