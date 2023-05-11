import Link from "next/link"
import styles from "../styles/header.module.css"

export default function Header(props) {
    return(
        <div>
            <div className={styles.backlink}>
            <Link href="/">Back</Link>
            {props.children}
            </div>
            <h1>{props.title}</h1>
        </div>
    )
}