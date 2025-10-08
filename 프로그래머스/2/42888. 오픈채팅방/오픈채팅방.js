// 닉네임 변경 방법
// 채팅방 나간후, 새 닉네임으로 들어오기
// 방에서 닉네임 변경
// 닉네임 변경 시 기존 채팅방의 내역의 닉네임도 변경

// 채팅방 중복 닉네임 허용

// record의 단어는 알파벳 대소문자, 숫자
// 유저아이디와 닉네임은 알파벳 대소문자 구별
// 유저 아이디, 닉네임 길이 1~10

function solution(record) {
    const users = {};
    const history = [];
    const operator = {
        "Enter": ([type, uuid, nickname]) => {
            history.push([type, uuid]);
            users[uuid] = nickname;
        },
        "Leave": ([type, uuid, nickname]) => {
            history.push([type, uuid]);
        },
        "Change": ([type, uuid, nickname]) => {
            users[uuid] = nickname;
        },
    };
    
    for(const item of record){
        const info = item.split(" ");
        operator[info[0]](info);
    }
    
    const answer = history.map(([type, uuid]) => `${users[uuid]}님이 ${type === "Enter" ? "들어왔습니다." : "나갔습니다."}`);
    
    
    return answer;
}