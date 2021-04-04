const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    return await res.json()
}

async function getResource  (url) {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`fetch error: ${res.status}`)
    }

    return await res.json()
}

export default postData
export {getResource}