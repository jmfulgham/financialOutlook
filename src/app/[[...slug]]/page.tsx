import {ClientOnly} from "./client";

//TODO delete this when adding routes
export function generateStaticParams() {
    return [{ slug: [''] }]
}

export default function Page() {
    return <ClientOnly />
}
