import { useState, useEffect } from "react";
import styles from "./css/Quote.module.scss";
import { quotes } from "./data/quotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { generateColor } from "./colorGenerator";


const Quote = () =>{
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [color, setColor] = useState("");

    useEffect(() =>{
        document.getElementById("text").onanimationstart= () =>{
            document.getElementById("new-quote").disabled = true;
        };
        document.getElementById("text").onanimationend = () =>{
            document.getElementById("text").classList.remove(styles.animated);
            document.getElementById("new-quote").disabled = false;
        };
        document.getElementById("author").onanimationend = () =>{
            document.getElementById("author").classList.remove(styles.animated);
        };

        let color2 = generateColor();
        let index = Math.floor(Math.random() * quotes.length);
        document.getElementById("text").classList.add(styles.animated);
        document.getElementById("author").classList.add(styles.animated);
        setColor(color2);
        setTimeout(() => {
            setQuote(quotes[index].quote);
            setAuthor(quotes[index].author);

        }, 800);
    }, [])

    const handleClick = () =>{
        let color2 = generateColor();
        let index = Math.floor(Math.random() * quotes.length);
        document.getElementById("text").classList.add(styles.animated);
        document.getElementById("author").classList.add(styles.animated);
        setColor(color2);
        setTimeout(() => {
            setQuote(quotes[index].quote);
            setAuthor(quotes[index].author);
        }, 800);

    };
    return (
        <div id="quote-box" className={styles.blockQuote}>
            <blockquote>
                <p id="text" className={styles.quote} style={{color: color}}><FontAwesomeIcon className={styles.leftQuotes} style={{color: color}} icon={faQuoteLeft} /> {quote}</p>
                <cite id="author" className={styles.author} style={{color: color}}>{author}</cite>
            </blockquote>

            <div className={styles.panel}>
                <div className={styles.icons}>
                    <div className={styles.iconWrapper} style={{backgroundColor: color}}>
                        <a id="tweet-quote" target="_blank" rel="noreferrer" href="https://www.twitter.com/intent/tweet"><FontAwesomeIcon className={styles.twitterIcon} icon={faTwitter}/></a>
                    </div>
                    <div className={styles.iconWrapper} style={{backgroundColor: color}}>
                        <a id="tumblr-quote" target="_blank" rel="noreferrer" href="https://www.tumblr.com" ><FontAwesomeIcon className={styles.tumblrIcon} icon={faTumblr}/></a>
                    </div>
                </div>
                <button id="new-quote" className={styles.newQuote} style={{backgroundColor:  color}} onClick={handleClick}>New quote</button>
            </div>
        </div>
    )
};

export default Quote;
