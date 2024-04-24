export default function setCookie(name, data) {

    const domain = window.location.hostname
    const maxAge = 86400

    document.cookie = `${name}=${data}; domain=${domain}; max-age=${maxAge}; secure; path=/;`
}