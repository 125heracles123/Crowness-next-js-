import Layout from "../../components/layout"

export default function About() {
  return (
    <>
      <Layout title="About" name="DBAnime"></Layout>
      <h1 className="font-bold text-center capitalize text-xl">This web has build in <a href="https://nextjs.org" className="transition duration-500 ease-in-out hover:text-blue-500" rel="noreferrer" target="_blank">Nextjs</a> as frontend and <a href="https://djangoproject.com/" className="transition duration-500 ease-in-out hover:text-green-300" rel="noreferrer" target="_blank">Django</a> as backend and dont forget <a href="https://postgresql.org/" rel="noreferrer" className="transition duration-500 ease-in-out hover:text-blue-300" target="_blank">Postgresql</a> as a database</h1>
      <div className="mt-5"></div>
      <h1 className="font-bold text-center">entah lah mau buat fitur apa lagi dinextjs, kayanya frontend versi nextjs ga selengkap nuxtjs deh</h1>
    </>
  )
}
