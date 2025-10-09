// 음악 제목, 재생 시작되고 끝난 시각, 악보
// 각 음은 1분에 1개씩 재생
// 음악은 처음부터 재생되며, 음악 길이보다 더 길다면 반복해서 재생
// 음악 길이보다 짧다면, 처음부터 재생한 시간
// 음악이 00:00(자정) 까지 넘겨서 재생 되지 X

function timestamp(time){
    const [hour, min] = time.split(":").map(Number);
    return hour * 60 + min;
}
function solution(m, musicinfos) {
    
    // m : 음(1~1439)
    // musicinfos: 100개 이하의 곡 정보 (시작 시각, 끝난 시각, 음악 제목, 악보)
    // 시간은 24시간 형태
    // 음악제목은 , 제외 문자(1~64 길이)
    
    // 조건에 맞는게 여러개 -> 라디오에서 재생된 시간이 가장 긴 음악
    // 재생 시간도 같다면, 먼저 입력된 음악제목
    // 조건에 일치 X -> (None)을 반환

    let answer = [];
    const listened = m.match(/[A-Z]#*/g);
    for(const music of musicinfos){
        const [start, end, title, tones] = music.split(",");
      
        const toneList = tones.match(/[A-Z]#*/g);
        const totalDuration = toneList.length; // 단위(분)
        const playDuration = timestamp(end) - timestamp(start); // 단위(분)
        let totalTones;
        if(totalDuration === playDuration){
            totalTones = toneList;
        }
        else if(totalDuration < playDuration){
            // 배열의 요소 반복이 한번 이상 될 수 있음
            let repeat = Math.floor(playDuration/totalDuration);
            const left = playDuration % totalDuration;
            let arr = [];
            while(repeat > 0){
                arr = [...arr, ...toneList];
                repeat--;
            }
            totalTones = [...arr, ...toneList.slice(0, left)];
        }else{
            totalTones = toneList.slice(0, playDuration);
        }
        // 그냥 join을 해서 비교하면, C, C#구분 못할 수 있음
        // "ABC"를 찾는데, "ABC#"이면 일치한다고 할 수 있음 (정규식, includes 하면)
        for(let i = 0; i <totalTones.length; i++){
            const listenedLength = listened.length;
            if(i + listenedLength > totalTones.length) break;
            const part = totalTones.slice(i, i + listenedLength);
            if(part.join("") === listened.join("")){
                answer.push([title, playDuration]);
                break;
            }
        }
    }
    if(answer.length === 0) return "(None)";
    return answer.sort((a, b) => b[1] - a[1]).map((a) => a[0])[0];
}