
let users=[]

export async function POST(request){
    console.log(request,"=================================")
    try {
        const body = await request.json();
        const {name} = body;
        if(!name){
            Response.json({
                status:400,
                message:"Name is required"
            })
        }
        console.log("Received Name", name)
        users.push(name)
        return Response.json({
            status:201,
            message:users
        })

        
    } catch (error) {
        console.log(error)
        return Response.json({
            status:500,
            message:"Something went wrong"
        })
    }

    
}