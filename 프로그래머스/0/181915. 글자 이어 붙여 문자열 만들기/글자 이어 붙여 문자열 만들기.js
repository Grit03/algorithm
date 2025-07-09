function solution(my_string, index_list) {
    return index_list.map((position) => my_string[position]).join("");
}