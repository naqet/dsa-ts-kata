function search(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) return path;

    path.push(node.value);

    search(node.left, path);

    search(node.right, path);

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return search(head, []);
}
