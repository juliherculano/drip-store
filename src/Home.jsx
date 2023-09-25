import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCollectionList from './components/FeaturedCollectionList'
import BestSellerProductList from './components/BestSellerProductList'

export default function Home() {
    return (
        <>
            <Hero />
            <main>
                <FeaturedCollectionList />
                <BestSellerProductList />
            </main>
        </>
    );
}