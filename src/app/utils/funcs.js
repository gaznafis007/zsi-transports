export const fetchData = async (url) =>{
    try{
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`Failed to fetch from ${url}`)
        }
        const data = await res.json();
        return data;
    }
    catch(error){
        console.error(`Failed to fetch from ${url}`);
        return null;
    }
}