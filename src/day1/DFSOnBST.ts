function walk(node: BinaryNode<number> | null, value: number): boolean {
    if (!node) return false;

    if (node.value === value) return true;

    return walk(node.left, value) || walk(node.right, value);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle);
}
