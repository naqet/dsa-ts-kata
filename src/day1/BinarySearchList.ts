export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    let found = false;

    do {
        let middle = Math.floor(lo + (hi - lo) / 2);

        let value = haystack[middle];

        if (value === needle) {
            found = true;
        } else if (needle < value) {
            hi = middle;
        } else {
            lo = middle + 1;
        }
    } while (!found && lo < hi);

    return found;
}
