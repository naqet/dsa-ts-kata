function search(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) return path;

    search(node.left, path);

    search(node.right, path);

    path.push(node.value);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return search(head, []);
}
