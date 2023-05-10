import Link from 'next/link'

export default function navigation (props) {
    return(
        <Link href={props.navigation} passHref></Link>
    )
}