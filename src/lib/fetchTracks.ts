// const apiToken: string = '';

// export const fetchTracks = async () => {
//   // This function does nothing, yet
// };

const apiToken = 'BQBwxladnD35mQ6Bwx3GVEYx12BDHtSc6ywmV1igu-0wjaaD763FzMcCUSjLqgAMHUTn078x3lieAgxm6kQafysKdm870Cmm3GLsb2VzNJGoYrh7wGxR_zIpOKYquAi7ZhKmf6_G-jI4da5uKluLpDTrfF8PdkoeUV21HgX_DApYI56Gm1b7M-DI1-0JJGhmfzLo3H8BPJ18Qb7h6Wm4m5l1VEhbJQ';



export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};
