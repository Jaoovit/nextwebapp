import Header from "../../components/header";
import { useRouter } from 'next/router'

export default function ClientCode () {
    const router = useRouter()

    return (
        <Header title="Dynamic routes">
            <span>Code = {router.query.code}</span>
        </Header>
    )
}