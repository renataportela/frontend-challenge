import { Provider } from 'jotai'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page)

  return (
    <Provider>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}

// export async function getStaticProps(context) {
//   return {
//     props: {
//       cart: [],
//       isMiniCartOpen: false,
//     }, // will be passed to the page component as props
//   }
// }

export default MyApp
