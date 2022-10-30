import styles from "./css/Author.module.scss"
const Author = () =>{
    return (
        <div className="creator">
            <p className={styles.author}>by <a href="https://www.facebook.com/nikita.toropov.54" target="_blank">Nikita</a></p>
        </div>
    );
}

export default Author;
