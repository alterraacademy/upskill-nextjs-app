"use client";

import { useCallback, useMemo } from "react";
import { Trash } from "lucide-react";
import { debounce } from "lodash";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { CartItem as ItemType } from "@/utils/types/carts";
import { editItemFromCart, removeItemFromCart } from "@/utils/actions/cart";

interface Props {
  data: ItemType;
}

const CartItem = ({ data }: Props) => {
  const removeItem = removeItemFromCart.bind(null, data.id);

  const changeQuantity = useCallback(async function (quantity: number) {
    await editItemFromCart(data.id, { quantity });
  }, []);

  const changeQuantityDebounce = useMemo(
    () => debounce(changeQuantity, 1000),
    [changeQuantity]
  );

  return (
    <div className="grid grid-cols-[100px_1fr_auto] items-center gap-6">
      <Image
        alt={data.product.name}
        className="rounded-lg object-cover aspect-square"
        height={100}
        src={data.product.image ?? "/placeholder.svg"}
        width={100}
        priority
      />
      <div className="grid gap-1">
        <h3 className="font-medium">{data.product.name}</h3>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Input
            className="w-20 text-center"
            defaultValue={data.quantity}
            min="1"
            type="number"
            onChange={(e) => changeQuantityDebounce(e.target.valueAsNumber)}
          />
          <Button
            size="icon"
            variant="outline"
            onClick={async () => removeItem()}
          >
            <Trash className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
        <div className="text-lg font-medium">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(+data.product.price * data.quantity)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
