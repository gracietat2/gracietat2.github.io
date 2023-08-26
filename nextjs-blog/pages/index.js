import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import butterFlyGif from 'butterfly.GIF';
// import {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dcoznrnqy', 
//   api_key: '676282115528383', 
//   api_secret: 'bXjvfATVU8p4wFet3kqnhgSzuH0' 
// });


export default function Home() {
  return (

    
    
    <div className={styles.title}>
      <Head>
        <title>Gracie Tat2</title>

      </Head>


      <h1 className='title'>Gracie Tat2</h1>
      

      <main>

   <div className={styles.butterfly}>  
<Image
    className='butterfly'
    src="/images/butterfly.gif" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="butterfly"
  /> 
 
  </div>  
  <div className={styles.container}>
      <h1 className="title">
 <Link href="/routes/About">About</Link>
</h1>

<h1 className="title">
 <Link href="/routes/Tattoos">Tattoos</Link>
</h1>

<h1 className="title">
 <Link href="/routes/Flash">Flash</Link>
</h1>

<h1 className="title">
 <Link href="/routes/Contact">Contact</Link>
</h1>

<h1 className="title">
 <Link href="/routes/About">Shop</Link>
</h1>

<h1 className="title">
 <Link href="/routes/Aftercare">Aftercare</Link>
</h1>


{/* 
<Image
    src="/images/profile.jpeg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  /> */}

{/* <h1 className="title">
  Link <Link href="/posts/runway">Runway</Link>
</h1> */}

{/* <Image
    src="/images/profile.jpeg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  /> */}


</div> 
      </main>

      <footer>
       
      </footer>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Petit Formal Script', cursive;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

  
  )
}