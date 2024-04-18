export async function GET(request) {
  const users = [
    {id: 1, name: 'Daniel'},
    {id: 2, name: 'Juana'},
    {id: 3, name: 'Pedro'},
  ];

  return new Response(JSON.stringify(users))
}