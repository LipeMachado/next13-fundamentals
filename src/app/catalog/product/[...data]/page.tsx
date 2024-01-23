interface ProductProps {
    params: {
        data: string[]
    }
}

export default function Product({ params }: ProductProps) {
    const [productId, size, color] = params.data;

    return (
        <>
            <div>Product: {productId}</div>
            <div>Size: {size}</div>
            <div>Color: {color}</div>
        </>
    )
}