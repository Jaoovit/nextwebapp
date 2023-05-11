import Link from "next/link"

export default function navigation (props) {
    return(
        <Link href={props.fate} passHref>
        <div> {props.text}</div> 
        </Link>
    )
}