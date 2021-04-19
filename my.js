let text1 = prompt("Nhập vào 1 chuỗi để kiểm tra đối xứng")

function isPalidrome(text) {
    text = text.toString();
    let flag = false;
    for (let i = 0; i < Math.floor(text.length / 2); i++) {
        if (text[i] === text[text.length - (1 + i)]) {
            flag = true;
        }else {
            flag = false;
            break;
        }
        console.log(text[i])
        console.log(text[text.length - (1 + i)])
    }

    console.log(flag);
    if (flag === true) {
        document.write("Từ này đối xứng")
    } else {
        document.write("Từ này không đối xứng")
    }
    return flag;
}

isPalidrome(text1);

