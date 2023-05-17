export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let queue = [head];

    let found = false;

    while (!found && queue.length) {
        let curr = queue.shift();

        if (!curr) {
            break;
        }

        if (curr.value == needle) {
            found = true;
            break;
        }

        if (curr.left) {
            queue.push(curr.left);
        }

        if (curr.right) {
            queue.push(curr.right);
        }
    }

    return found;
}
