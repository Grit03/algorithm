function cal(num_list) {
    return num_list.at(-1) > num_list.at(-2) ? num_list.at(-1) - num_list.at(-2) : num_list.at(-1) * 2;
}

function solution(num_list) {
    return [...num_list, cal(num_list)];
}