import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
export default function Quotes() {
    return (
        <div className="section quote">
            <p className="quote-text">
                <FontAwesomeIcon icon={faQuoteLeft} />
                Food is not just sustenance; it's a journey of flavors, a celebration of cultures, and a universal language that speaks to the soul through every bite.
            </p>
            <p className="quote-author">- ChatGPT</p>
        </div>
    )
}

