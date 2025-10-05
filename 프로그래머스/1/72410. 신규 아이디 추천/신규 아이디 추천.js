function solution(new_id) {
    // 1단계
    let id = new_id.toLowerCase();
    console.log("1단계:", id);
    // 2단계
    id = id.split("").filter((char) => /[a-z0-9-_.]/.test(char)).join("");
    console.log("2단계:", id);
    // 3단계
    id = id.replaceAll(/[.]+/g, ".");
    console.log("3단계:", id);
    
    // 4단계
    const idArr = id.split("");
    if(idArr[0] === ".") idArr[0] = "";
    if(idArr[idArr.length -1] === ".") idArr[idArr.length -1] = "";
    id = idArr.join("");
    console.log("4단계:", id);
    
    // 5단계
    if(id === "") id = "a";
    console.log("5단계:", id);
    // 6단계
    if(id.length >= 16){
        id = id.slice(0, 15);
        if(id[0] === ".") id = id.slice(1);
        if(id[id.length -1] === ".") id = id.slice(0, id.length -1);
    }
    console.log("6단계:", id);
    // 7단계
    if(id.length <=2){
        const idLength = id.length;
        id = id + id[idLength - 1].repeat(3 - idLength);
    }
    console.log("7단계:", id);

    return id;
}