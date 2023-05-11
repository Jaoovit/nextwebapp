import Link from "next/link"

export default function Header(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <Link href="/">Back</Link>
        </div>
    )
}