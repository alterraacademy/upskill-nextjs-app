"use client";

import { useEffect, useState } from "react";

import { ProductExtend } from "@/utils/types/products";
import { getDetailProducts } from "@/utils/apis/products";

export default function Page({ params }: { params: { product_id: string } }) {
  const [data, setData] = useState<ProductExtend>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getDetailProducts(params.product_id);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.price}</p>
      <p>{data?.description}</p>
    </div>
  );
}
