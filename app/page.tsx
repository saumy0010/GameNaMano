import BackgroundCard from "./components/background/BackgroundCard";
import { BackgroundCardProps, allData } from './components/background/utils/allData';
import ProductComponent from "./components/product/ProductComponent";


export default function Home() {
  let data:BackgroundCardProps = allData['1']
 
  return (
    <div>
      <BackgroundCard {...data}/>
      <ProductComponent/>
    </div>
  );
}
