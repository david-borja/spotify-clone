import { allPlaylists, songs as allSongs } from '@/lib/data'

export async function GET({ params, request }) {
  const { url } = request // request nativa de la api fetch. Con express a veces es igual, pero eso es casualidad
  // si tenemos la url completa con el protocolo, para recuperar un search param puedes hacer lo siguiente
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  // otra forma
  // const [, queryString] = url.split('?') // queryString id=123
  // const query = new URLSearchParams(queryString) // también de la plataforma web
  // query.get('id')

  const playlist = allPlaylists.find((playlist) => playlist.id === id)
  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { 'content-type': 'application/json' }, // quizá no sería necesario porque ya lo estamos convirtiendo en un JSON
  })
}
