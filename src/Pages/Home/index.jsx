import { useContext } from 'react'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { ShoppingCartContext } from '../../Context'

function Home() {
    const context = useContext(ShoppingCartContext);

    return (
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            context.items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </Layout>
    )
}
export default Home