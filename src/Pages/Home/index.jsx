import { useRef, useContext, useEffect } from 'react'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { ShoppingCartContext } from '../../Context'

function Home() {
    const context = useContext(ShoppingCartContext);

    const currentPath = window.location.pathname;
    let page = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    const inputRef = useRef(null);

    // Re-sets the search if the URL changes
    useEffect(()=>{
      context.setSearchByAny('')
      // Clear input value
      inputRef.current.value = '';
    },[page]);

    const handleChange = (event) => {
      context.setSearchByAny(event.target.value);
    }


    let sourceProducts = context.items;

    // Depending on the url, it filters by category
    const pageTitle = () => {
      if (page === '') {
        return 'Home'
      } else {
        // Changes the value of sourceProducts for the page that works as a filter 
        if (page !== 'all'){
          sourceProducts = context.searchByAnyInArray(sourceProducts, 'category', page);
        }
        // takes the string from page and capitalize the first letter
        return page.charAt(0).toUpperCase() + page.slice(1);
      }
    }

    const renderView = () => {
      const products = context.searchByAnyInArray(sourceProducts, 'title', context.searchByAny);
      if (products?.length === 0) {
        return (
            <p>There is no product called: {context.searchByAny}</p>
        )
      } else {
        return (
          products?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      }
    }

    return (
      <Layout>
        <h1 className='text-2xl'>{pageTitle()}</h1>
        <input
          type="text"
          placeholder="Search a product"
          className="w-80 m-6 p-3 border border-black rounded-lg outline-none"
          onChange={handleChange}
          ref={inputRef}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
      </Layout>
    )
}
export default Home