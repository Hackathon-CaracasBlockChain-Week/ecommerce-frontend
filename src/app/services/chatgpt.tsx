const CURRENCY_URL = "http://localhost:5000";

export async function postCommentary(message: any){
    const res = await fetch(`${CURRENCY_URL}/chat`, {
        method: 'POST',
        body : JSON.stringify(message),
        headers : {
            "Content-Type": "application/json"
        }
    });

    if(!res.ok){
        throw new Error('Something went wrong');
    }

    const data = await res.json();
    return data;
}