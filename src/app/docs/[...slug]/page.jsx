export default async function Docs({params}){
    const {slug} = await params;
    
    if(slug?.length === 3){
        return <p>You are viewing Feature {slug[0]} of concept {slug[1]} and example {slug[2]}</p>
    }
    if(slug?.length === 2){
        return <p>You are viewing Feature {slug[0]} of concept {slug[1]}</p>
    }
    if(slug?.length === 1){
        return <p>You are view Feature </p>
    }
    return <h1>Docs Page Example</h1>
}