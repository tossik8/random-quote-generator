import styles from "./css/Author.module.scss"
const Author = () =>{
    return (
        <div className="creator">
            <p className={styles.author}>by <a href="https://www.facebook.com/nikita.toropov.54" rel="noreferrer" target="_blank">Nikita Toropov</a></p>
        </div>
    );
}

export default Author;
