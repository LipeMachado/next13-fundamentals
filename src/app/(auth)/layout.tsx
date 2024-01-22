import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <h1 className='text-xl font-bold'>Logo do app</h1>
            <div>{children}</div>
        </>
    )
}