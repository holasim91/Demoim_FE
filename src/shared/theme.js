const size = {
 mobile: '767px',
 tablet: '1024px',
 desktop: '1025px'
};

//임시로 세팅. 컬러,로고 전달되면 바꾸기!
const theme = {
 main_color: '#683fee',
 main_black: '#000000',
 sub_color: '#999cda',
 main_gray: '#f1f1f1',
 main_sky: '#f2f5fa',
 mobile: `(max-width:${size.mobile})`,
 tablet: `(max-width:${size.tablet})`,
 desktop: `(min-width:${size.desktop})`,
 logo: '',
};



export default theme;