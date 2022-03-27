export async function search(options = {}) {
  const params = {
    ...options
  }
  const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');

  const results = fetch(`https://api.cloudinary.com/v1_1/dqhop939m/resources/image`, { mode: 'no-cors'},{
    headers: {
      Authorization: `Basic ${Buffer.from('362321772356577' + ':' + '_K_8q55wUzCobz1iVjmkLv73GkY').toString('base64')}`,
    }
  }).then(r => r.json()).then(x => console.log(x));

  return results;
}