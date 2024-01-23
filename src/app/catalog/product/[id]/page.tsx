interface ProductProps {
    params: {
        id: string
    }
}

export default function Product(props: ProductProps) {
    return (
        <>
            <div>Product {props.params.id}</div>
        </>
    )
}