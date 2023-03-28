import { AppContextType } from '@/components/AppProvider/AppContext';
import useInitAppState from '@/components/AppProvider/useInitAppState';
import ProductCard from '@/components/ProductCard';
import Services from '@/components/Services';
import { getCategories } from '@/services/category';
import { getNavigation } from '@/services/navigation';
import { getProducts } from '@/services/product';
import { Language } from '@/types/Language';
import { ProductType } from '@/types/Product';
import { NextPageContext } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Layout from './Layout';

interface HomeProps extends Omit<AppContextType, "language"> {
  mostPopularProducts: ProductType[]
}

export async function getServerSideProps(context: NextPageContext) {
  const language = context.locale as Language;

  const [navigations, categories, products] = await Promise.all([
    getNavigation(language),
    getCategories(),
    getProducts()
  ]);

  const props: HomeProps = {
    mainNavigation: navigations,
    categories,
    mostPopularProducts: products
  }

  return {
    props
  }
}

export default function Home({ mostPopularProducts, ...rest }: HomeProps) {
  const { lang } = useTranslation("product");
  useInitAppState({ ...rest, language: lang })

  return (
    <Layout bgColor="gray">
      <div className="section-style-one new-products mb-[60px]">
        <div className="section-wrapper w-full">
          <div className="container-x mx-auto">
            <div className=" section-title flex justify-between items-center mb-5">
              <div>
                <h1 className="sm:text-xl text-xl font-600 text-qblacktext leading-none">
                  Most Populars
                </h1>
              </div>
            </div>
            <div className="section-content">
              <div className="products-section w-full">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                  {mostPopularProducts?.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </Layout>
  )
}
