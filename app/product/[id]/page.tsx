export default function Page({params}) {
    return(
        <div style={{border: "2px solid black", width:"100px", height: "100px"}}>
            {params.id}
        </div>
    )
}