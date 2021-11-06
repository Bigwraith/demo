const setSession = (key: String, val: any) => {
    if (val.constructor === Object) {
        sessionStorage.setItem(key as string, JSON.stringify(val))
    } else {
        sessionStorage[key as string] = val
    }

}

const getSession = (key: String) => {
    const getKey = sessionStorage[key as string]
    if (getKey && getKey.constructor === Object  ) {
        return JSON.parse(getKey)
    } else {
        return getKey
    }
}


const delSession = (key: String) => {
    sessionStorage.removeItem(key as string)
}

const clearSession = () => {
    sessionStorage.clear()
}

export { setSession, getSession, delSession, clearSession }