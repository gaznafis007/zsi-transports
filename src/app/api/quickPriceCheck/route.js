const data = [
    {
        id: 1,
        title: 'hourly rate',
        minPrice: 60,
    },
    {
        id: 2,
        title: 'lga airport',
        minPrice: 80,
    },
    {
        id: 3,
        title: 'jfk airport',
        minPrice: 90,
    },
    {
        id: 4,
        title: 'ewr airport',
        minPrice: 100,
    },
]

export const GET = () =>{
    return Response.json(data)
}