import Link from "next/link"
import styles from "../styles/navigation.module.css"

export default function navigation (props) {
    return(
        <div className={styles.navigation}>
            <Link href={props.fate} passHref>
            {props.text}
            </Link>
        </div>


    )
}