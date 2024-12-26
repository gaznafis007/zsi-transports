const reviews = [
  {
    id: 1,
    name: "peter rose",
    body: "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and professionalism of the chauffeurs were outstanding",
    img: "https://rpclimo.com/wp-content/uploads/2023/10/team1-150x150.jpg",
  },
  {
    id: 2,
    name: "carolina monntoya rose",
    body: "Impeccable service! From punctuality to the pristine condition of the vehicles, RPC Limo made our corporate event seamless and stylish. Highly recommended!",
    img: "https://rpclimo.com/wp-content/uploads/2023/10/team3-150x150.jpg",
  },
];

export const GET = async() =>{
    return Response.json(reviews)
}
