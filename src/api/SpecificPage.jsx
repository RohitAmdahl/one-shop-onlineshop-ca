import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleItem from "../components/detailCard/SingleItem";

const SpecificPage = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url);

        const json = await response.json();
        console.log(json);

        setProduct(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);
  if (isLoading || !product) {
    return (
      <div>
        <h1>Loding....</h1>
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(product);

  return <SingleItem product={product} />;
};

export default SpecificPage;
