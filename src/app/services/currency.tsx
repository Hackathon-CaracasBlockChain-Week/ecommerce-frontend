const CURRENCY_URL = "http://localhost:3002";

export async function getCurrencyVES(){
    const res = await fetch(`${CURRENCY_URL}/dollar-bcv`);

    if(!res.ok){
        throw new Error('Something went wrong');
    }

    const data = await res.json();
    return data;
}

export async function getCurrencyCOP(){
    const res = await fetch(`${CURRENCY_URL}/pesos-colombianos`);

    if(!res.ok){
        throw new Error('Something went wrong');
    }

    const data = await res.json();
    return data;
}

export async function getCurrencyARS(){
    const res = await fetch(`${CURRENCY_URL}/pesos-argentinos`);

    if(!res.ok){
        throw new Error('Something went wrong');
    }

    const data = await res.json();
    return data;
}