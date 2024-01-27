"use client";
import { useEffect, useState } from "react";

import FilterComponent from '../components/product/filter';
import GetData from '../components/api/getData';
import { ProductProps } from '../components/product/ProductComponent';
import ProductCard from '../components/product/ProductCard';
import CustomSelect from '../components/utils/CustomSelect';
import AccordionUsage from '../components/utils/Accordion';

import styles from '../components/navigation/Navigation.module.css';



export default function Page() {

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const { data, loading } = GetData(
    "https://dummyjson.com/products/categories"
  );

  const product = GetData("https://dummyjson.com/products");

  useEffect(()=>{

    let temp = filteredData.length === 0 ? (product?.data?.products || []) : filteredData;

    if (selectedOption === "Price : Low to High") {
      let res = temp.slice().sort((a:any, b:any) => a.price - b.price)
      setFilteredData(res)
    }
    
    if(selectedOption === "Price : High to Low"){
      let res = temp.slice().sort((a:any, b:any) => b.price - a.price)
      setFilteredData(res)
    }

  },[selectedOption])

  return (
    <div className={styles.productContainer}>
      <div className={styles.accordionDiv}>
        <AccordionUsage
          categories={data}
          loading={loading}
          setSelectedCategories={setSelectedCategories}
          setFilteredData={setFilteredData}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className={styles.filterDiv}>
        <FilterComponent
          categories={data}
          loading={loading}
          setSelectedCategories={setSelectedCategories}
          setFilteredData={setFilteredData}
          setSelectedOption={setSelectedOption}
        />
      </div>
      {product.loading ? (
        <p>Loading....</p>
      ) : (
        <div className={styles.filteredDataDivContainer}>
          <div className={styles.topDiv}>
            <div className={styles.topDivText}>
              <div>{`Search results for ${
                selectedCategories.length !== 0
                  ? selectedCategories.join(", ")
                  : "All Categories"
              }`}</div>
              <div style={{ fontSize: "12px" }}>
                {filteredData.length === 0
                  ? `${product?.data?.products?.length} result${
                      product?.data?.products?.length !== 1 ? "s" : ""
                    } found`
                  : `${filteredData.length} result${
                      filteredData.length !== 1 ? "s" : ""
                    } found`}
              </div>
            </div>
            <div className={styles.topDivPop}>
              <CustomSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>
          </div>

          <div className={styles.filteredDataDiv}>
            {(
              (filteredData.length == 0
                ? product?.data?.products
                : filteredData) || []
            ).map((ele: ProductProps) => {
              return <ProductCard key={ele?.id} {...ele} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
