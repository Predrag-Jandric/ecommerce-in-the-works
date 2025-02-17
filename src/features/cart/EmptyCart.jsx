import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-6 flex flex-col gap-6 items-center">
      <p className="mt-7 text-lg font-semibold text-center">
        Your cart is still empty. Start adding some pizzas.
      </p>

      <LinkButton to={"/menu"}>
        <Button type="primarySmall">&larr; Back to menu</Button>
      </LinkButton>
    </div>
  );
}

export default EmptyCart;
