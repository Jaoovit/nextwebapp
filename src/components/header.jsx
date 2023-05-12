import Link from "next/link"
import styles from "../styles/header.module.css"

export default function Header(props) {
    return(
        <div className={styles.layout}>
            <div className={styles.backbutton}>
                <Link href="/">Back</Link>
            </div>
                {props.children}
            <h1>{props.title}</h1>
        </div>
    )
}