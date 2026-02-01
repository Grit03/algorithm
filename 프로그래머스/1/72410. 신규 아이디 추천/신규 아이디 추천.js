
function solution(new_id) {
    const first = new_id.toLowerCase();
    const second = first.match(/[a-z0-9\-_\.]/g).join("");
    const third = second.replace(/[\.]{2,}/g, ".");
    const fourth = third.replace(/^\.|\.$/g, "");
    const fifth = fourth === "" ? "a" : fourth;
    const sixth = fifth.length >= 16 ? fifth.slice(0, 15).replace(/^\.|\.$/, "") : fifth;
    
    const sixthLength = sixth.length;
    const left = 3 - sixthLength;
    const seventh = sixthLength <= 2 ? sixth + sixth.at(-1).repeat(left) : sixth;
    
    return seventh;
}
