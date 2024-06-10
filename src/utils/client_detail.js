function isMobile() {
    let a = null;
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        a = true;
    } else {
        a = false;
    }
    return a;
}

export function checkEdge(){
    return navigator.userAgent?.match(/edg/i) ? true: false
}

export const client_device_detail = () => {
    const mobile = isMobile()
    const userAgent = navigator.userAgent;

    const browser = userAgent.match(/(opera|edg|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i)[0].split('/')[0];
    console.log(`Browser client_detail.js ${browser}`);
    const os = userAgent.match(/(Windows|Macintosh|Linux|Android|iOS|SymbianOS|Windows|Phone|BlackBerry)/i)[0];

    return { isMobile: mobile, os, browser }
}