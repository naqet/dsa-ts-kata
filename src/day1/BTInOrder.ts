function search(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) return path;

    search(node.left, path);

    path.push(node.value);

    search(node.right, path);

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return search(head, []);
}
