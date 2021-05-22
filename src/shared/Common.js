//정규식 체크

import moment from "moment";

//이메일
export const emailCheck = (email) => {

  let _reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return _reg.test(email);

}

// let _reg = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,5}$/;

//닉네임
//닉네임은 한글,영문,숫자만가능하며 2~6자리가능
export const nicknameCheck = (nickname) => {
  let _reg = /^[a-zA-Zㄱ-힣0-9]{2,6}$/;
  return _reg.test(nickname)

}


//비밀번호영어숫자특수기호
export const pwMatch = (pw) => {

  //const _reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{4,20}$/;
  const _reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{4,20}$/;
  return _reg.test(pw) && pw.search(/\s/) === -1 ? true : false;

}

//비밀번호 연속3자리
export const pwContinuous = (pw) => {

  const _reg = /(\w)\1\1/;
  return _reg.test(pw)
}

//url http(s) 확인
export const urlCheck = (url) => {
  const _reg = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
  return _reg.test(url)
}

// 시간 변경
export const ChangeTimeType = (time) => {
  const changedTime = moment(time).format('YYYY.MM.DD HH:mm')
return changedTime
}

export function calcTime(time){
  let currentDate = new Date()
  let createdDate = new Date(time)
  if(currentDate.getFullYear() !== createdDate.getFullYear()){
    return currentDate.getFullYear() - createdDate.getFullYear() + '년 전'
  }
  if(currentDate.getMonth() !== createdDate.getMonth()){
    return currentDate.getMonth() - createdDate.getMonth() + '개월 전'
  }
  if(currentDate.getDate() !== createdDate.getDate()){
    return currentDate.getDate() - createdDate.getDate() + '일 전'
  }
  if(currentDate.getHours() !== createdDate.getHours()){
    return currentDate.getHours() - createdDate.getHours() + '시간 전'
  }
}


//핸드폰번호 
export const cellPhoneNum = (userNumber) => {
  const _reg = /^\d{3}\d{3,4}\d{4}$/;
  return _reg.test(userNumber)
}

//인증번호 숫자6자리
export const certNumberCheck = (certNumber) => {
  const _reg = /^\d{6}$/;
  return _reg.test(certNumber)
}